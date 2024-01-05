import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { budget2023 } from 'src/app/data/budget2023';
import { months } from 'src/app/data/months';
import { ExpenseService } from 'src/app/services/expense-service.service';
import { Subscription } from 'rxjs';

const expense_table: Expense[] = budget2023[0];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy{
  constructor(private expenseService: ExpenseService){}

  expenseArray: Expense[];
  dataSource: Expense[];
  expenseCreatedSubscription: Subscription;

  //table columns
  displayedColumns: string[] = ['date', 'expense', 'amount', 'category', 'actions'];

  getExpenses(expenses:Expense[]):Expense[]{
    return expenses;
  }

  getExpenseDate(month:number, day: number):string{
    return `${months[month]} ${day}`
  }

  ngOnInit(): void {
    //get expenses from backend (right now it's in dummy data)
    this.dataSource = this.getExpenses(expense_table);


    //subscribe to behaviour subject for when a new expense is added
    this.expenseCreatedSubscription = this.expenseService.expenseCreated.subscribe((expense:Expense)=>{
      if(expense){
        const newExpenseArray = [expense, ...this.dataSource];
        this.dataSource = newExpenseArray;
      }
    });
  }

  ngOnDestroy(){
    this.expenseCreatedSubscription.unsubscribe();
  }
}
