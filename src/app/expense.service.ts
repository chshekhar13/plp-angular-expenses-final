import { Expense } from '../model/Expense';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  Expenses: Expense[]
  newExpense: Expense
  updatedExpense: Expense
  Test: Observable<Expense[]>



  constructor(public http: HttpClient) {
    this.Expenses = []
  }
  getExpenseByCode(expense_code: number) {
    console.log(expense_code)
    this.Test= this.http.get<Expense[]>('http://localhost:8055/expensecodemodule/'+expense_code)
    if(this.Test!=null)
    {return this.http.get<Expense[]>('http://localhost:8055/expensecodemodule/'+expense_code)}
  }

 getAll(): Observable<Expense[]> {
      return this.http.get<Expense[]>('http://localhost:8055/expensecodemodule/')
  }
}