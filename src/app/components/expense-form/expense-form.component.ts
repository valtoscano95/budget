import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {
  showExpenseForm:boolean = false;
  ExpenseForm = new FormGroup({
    expense: new FormControl(''),
    amount: new FormControl(0),
    date: new FormControl(''),
    category: new FormControl('')

  });


  onSubmit(){
    this.showExpenseForm = !this.showExpenseForm;
  }

  onAddNewExpense(){
    this.showExpenseForm = !this.showExpenseForm;
  }

}
