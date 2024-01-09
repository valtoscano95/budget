import { Expense } from "../models/expense"
import { categories } from "./categories"
import { expenseType } from "./expenseType"

//save later in DB
export const budget2023: Expense[] = [
      {
        day: 30,
        month: 9,
        amount: 400,
        expense: 'test septiembre 30',
        category: 3  ,
        type: expenseType.expense    
      },
      {
        day: 1,
        month: 2,
        amount: 300,
        expense: 'test febrero 1',
        category: 4,
        type: expenseType.expense
      },
      {
        day: 6,
        month: 1,
        amount: 3000,
        expense: 'test febrero 6',
        category: 4,
        type:expenseType.income
      },
      // {
      //   day: 11,
      //   month: 10,
      //   amount: 300,
      //   expense: 'test octubre 11',
      //   category: 'Mila'
      // },
      // {
      //   day: 2,
      //   month: 9,
      //   amount: 400,
      //   expense: 'test septiembre 2',
      //   category: 'Gasto Único'
      // },
      // {
      //   day: 6,
      //   month: 10,
      //   amount: 300,
      //   expense: 'test octubre 6',
      //   category: 'Mila'
      // },
      // {
      //   day: 18,
      //   month: 6,
      //   amount: 300,
      //   expense: 'test junio 18',
      //   category: 'Gatos'
      // },
      // {
      //   day: 30,
      //   month: 1,
      //   amount: 400,
      //   expense: 'test septiembre 30',
      //   category: 'Gasto Único'
      // },
      // {
      //   day: 1,
      //   month: 6,
      //   amount: 300,
      //   expense: 'test junio 1',
      //   category: 'Gatos'
      // },
      // {
      //   day: 20,
      //   month: 6,
      //   amount: 300,
      //   expense: 'test junio 20',
      //   category: 'Gatos'
      // },
      // {
      //   day: 25,
      //   month: 6,
      //   amount: 300,
      //   expense: 'test junio 25',
      //   category: 'Gatos'
      // },
      // {
      //   day: 5,
      //   month: 6,
      //   amount: 300,
      //   expense: 'test junio 5',
      //   category: 'Gatos'
      // }   

] 
    
