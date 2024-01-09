import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenseCreated = new BehaviorSubject<Expense>(null);

  addNewExpense(newExpense:Expense){
    this.expenseCreated.next(newExpense);
  }

  test = [
    {
        month: 1,
        day: 31,
        amount: 37,
        expense: "PLATA Paleta Dolce Natura",
        category: 'credito',

    },
    {
        day: 3,
        month:5,
        amount: 400,
        expense: "Baño Mila",
        category: 'mila'    
    }
        
]

//sort expenses
  sortExpenses(expenseList:Expense[]):Expense[]{
    let sortedList:Expense[] = []
    //12-31 =
    //12-29 =
    //2-4 = 
    //1-5 = 6
    //1-4 = 5
    //1-3 = 4
    //1-2 = 3
    //1-1 = 2
    const arr = [1,4,6,23,3,27]
    //{ day: number;
    // month: number,
    // amount: number;
    // expense: string;
    // category: string;}
    console.log(arr.sort(function(a,b){
      return a-b
    }));
    for(let expense of expenseList){
      const date = +`${expense.day}${expense.month}`
      console.log(date);
    }
    return sortedList;
  }

  constructor() { }
}
