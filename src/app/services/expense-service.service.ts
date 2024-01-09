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
  reverseSortExpenses(expenseList:Expense[]):Expense[]{
    let sortedList:Expense[] = []

    const monthSorting = this.reverseSortByMonth(expenseList);

    //for each month sort by day
    for(let month of monthSorting){
      const daySorting = this.reverseSortByDay(month);
      sortedList.push(...daySorting);
    }

    return sortedList;
  }

  //sort by months Z-A: array of expenses for each month
  reverseSortByMonth(expenseList: Expense[]): Expense[][]{
    let sortedList:Expense[][] = []

    //filter values for each month
    for (let i=12; i>0; i--){
      const filterMonthArr = expenseList.filter(function(expense){
        return expense.month == i
      })

      //if the current month has expenses in the filtered array, push it, otherwise ignore it
      if(filterMonthArr.length>0){
        sortedList.push(filterMonthArr);
      }
    }

    return sortedList;
  }

  //sort month expenses by day Z-A
  reverseSortByDay(monthExpenses: Expense[]):Expense[]{

    //sort by the value of expense.day and return te value
    return [...monthExpenses].sort(
      function(expense1, expense2){ return expense2.day-expense1.day })
  }

  constructor() { }
}
