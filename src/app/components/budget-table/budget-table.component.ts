import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { budget2023 } from 'src/app/data/budget2023';
import { months } from 'src/app/data/months';
import { ExpenseService } from 'src/app/services/expense-service.service';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

const expense_table: Expense[] = budget2023;

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class TableComponent implements OnInit, OnDestroy{
  constructor(private expenseService: ExpenseService, private categoryService: CategoryService){}

  expenseArray: Expense[];
  dataSource: Expense[];
  expenseCreatedSubscription: Subscription;
  categories: Category[]

  //table columns
  displayedColumns: string[] = ['date', 'expense', 'category', 'amount', 'balance', 'actions'];
  
  getExpenses(expenses:Expense[]):Expense[]{
    return this.expenseService.sortExpenses(expenses) ;
  }

  getExpenseDate(month:number, day: number):string{
    return `${months[month]} ${day}`
  }

  ngOnInit(): void {
    //get expenses from backend (right now it's in dummy data)
    this.dataSource = this.getExpenses(expense_table);
    this.categories = this.categoryService.getCategories();


    //subscribe to behaviour subject for when a new expense is added
    this.expenseCreatedSubscription = this.expenseService.expenseCreated.subscribe((expense:Expense)=>{
      if(expense){
        //sort expenses
        const newExpenseArray = [expense, ...this.dataSource];
        const sortedExpenseArray = this.expenseService.sortExpenses(newExpenseArray);
        console.log(sortedExpenseArray);
        this.dataSource = sortedExpenseArray;
      }
    });
  }

  getCategoryColor(categoryID: number): string{
    const category = this.getCategoryByID(categoryID);
    const color: string = category.color;
    return color
  }

  getCategoryByID(id:number): Category{
    const category = 
     this.categories.filter(function(item){
      return item.categoryID == id
    });

    return category[0];
  }

  ngOnDestroy(){
    this.expenseCreatedSubscription.unsubscribe();
  }
}
