import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categories } from 'src/app/data/categories';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { months } from 'src/app/data/months';
import { ExpenseService } from 'src/app/services/expense-service.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  constructor(private expenseService: ExpenseService){

  }

  showExpenseForm:boolean = false;
  categories: Category[];
  selectedCategory: string;
  isFormValid:boolean;
  newExpense: Expense;
  ExpenseForm = new FormGroup({
    expense: new FormControl('', Validators.required),
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    date: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)

  });

  ngOnInit(): void {
    this.categories = this.getCategories(categories);

  }

  onSubmit(){
    this.CheckFormValidity(this.ExpenseForm);
    if(this.isFormValid){
      this.showExpenseForm = !this.showExpenseForm;
      this.newExpense = this.getFormValues(this.ExpenseForm);
      this.expenseService.addNewExpense(this.newExpense);
    }
    else{
      this.isFormValid = false;
    }
  }

  CheckFormValidity(form: FormGroup){
    this.isFormValid = (form.valid && form.touched)? true : false;
  }

  getFormValues(ExpenseForm:FormGroup): Expense|any{
    const formControls = ExpenseForm.controls;
    const newExpense = {
      date: this.getDayAndMonth(formControls['date'].value) ,
      amount: formControls['amount'].value,
      expense: formControls['expense'].value,
      category: formControls['category'].value
    };
    return newExpense; 
  }

  getDayAndMonth(date:string):string{
    const month = +date.split('-')[1]-1;
    const day = +date.split('-')[2];
    return `${months[month]} ${day}` 
  }

  onAddNewExpense(){
    this.showExpenseForm = !this.showExpenseForm;
  }


  getCategories(object:{}):Category[]{
    const keys = Object.keys(object);
    let categoryArray = [];
    for(let key of keys){
      const item = {value: key, viewValue: object[`${key}`]}
      categoryArray.push(item);
    }
    return categoryArray
  }


}
