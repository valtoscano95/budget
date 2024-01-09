import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expense';
import { expenseType } from '../data/expenseType';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  balance:number;
  expenseCreated = new BehaviorSubject<Expense>(null);

  addNewExpense(newExpense:Expense){
    this.expenseCreated.next(newExpense);
  }

  //get balance of array based on an initialo balance (e.g. if it comes from a previous year)
  getBalance(sortedExpenseArray: Expense[], initialBalance:number): Expense[]{
    let balance = initialBalance;
    let array = [...sortedExpenseArray];
    for(let i=array.length; i>0; i--){
      const item:Expense = array[i-1];

      //if it's an expense, substract amount from balance
      if(item.type == expenseType.expense){
        item.balance = balance - item.amount;
        balance = item.balance;
      }

      //if it's an income add it to the balance
      else{
        item.balance = balance + item.amount;
        balance = item.balance
      }
    }
    // console.log(sortedExpenseArray);
    return array
  }

  //sort expenses A-Z
  sortExpenses(expenseList:Expense[]):Expense[]{
    let sortedList:Expense[] = []

    const monthSorting = this.sortByMonth(expenseList);

    //for each month sort by day
    for(let month of monthSorting){
      const daySorting = this.sortByDay(month);
      sortedList.push(...daySorting);
    }

    //get balance
    this.balance = 0;
    return this.getBalance(sortedList, this.balance)
  }

  //sort by months Z-A: array of expenses for each month
  sortByMonth(expenseList: Expense[]): Expense[][]{
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
  sortByDay(monthExpenses: Expense[]):Expense[]{

    //sort by the value of expense.day and return te value
    return [...monthExpenses].sort(
      function(expense1, expense2){ return expense2.day-expense1.day })
  }

  constructor() { }
}
