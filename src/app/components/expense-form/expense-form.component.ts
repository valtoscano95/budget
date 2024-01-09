import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  constructor(private expenseService: ExpenseService){}
  showExpenseForm:boolean = false;
  categories: Category[];
  selectedCategory: string;
  isFormValid:boolean;
  newExpense: Expense;
  days: number[];
  monthList: Category[];

  ExpenseForm = new FormGroup({
    day: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    expense: new FormControl('', Validators.required),
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    category: new FormControl('', Validators.required)

  });

  ngOnInit(): void {
    this.categories = this.getCategories(categories);
    this.days = this.getDays();
    this.monthList =  this.getMonths(months);

  }

  getDays():number[]{
    let arr :number[]= [];
    for(let i=0; i<31; i++){
      arr.push(i+1);
    }
    return arr;
  }

  onSubmit(){
    this.CheckFormValidity(this.ExpenseForm);
    if(this.isFormValid){
      this.newExpense = this.getFormValues(this.ExpenseForm);
      this.expenseService.addNewExpense(this.newExpense);
    }
  }

  CheckFormValidity(form: FormGroup){
    this.isFormValid = (form.valid && form.touched)? true : false;
  }

  getFormValues(ExpenseForm:FormGroup): Expense{
    const formControls = ExpenseForm.controls;
    const newExpense = {
      day: formControls['day'].value,
      month: formControls['month'].value ,
      amount: formControls['amount'].value,
      expense: formControls['expense'].value,
      category: formControls['category'].value
    };
    return newExpense; 
  }

  getDayAndMonth(day:number, month:string):string{
    return `${month} ${day}` 
  }

  getMonths(months:string[]): Category[]{
    let arr = []
    for(let index in months){
      const item = {value: +index+1, viewValue:months[index]}
      arr.push(item);
    }
    return arr;
  }

  //when add new expense is clicked show the form
  onAddNewExpense(){
    this.showExpenseForm = !this.showExpenseForm;
  }

  onCancel(){
    this.showExpenseForm = false;
  }

  onDone(){
    this.showExpenseForm = false;
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

  checkChanges(){
    this.isFormValid = this.ExpenseForm.valid;
  }

}
