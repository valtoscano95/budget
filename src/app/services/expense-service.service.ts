import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenseCreated = new BehaviorSubject<Expense>(null);

  addNewExpense(newExpense:Expense){
    // console.log('creating new expense');
    this.expenseCreated.next(newExpense);
  }

  constructor() { }
}
