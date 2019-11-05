
import { ExpenseService } from './expense.service';

import { Component } from '@angular/core';

import { Expense } from 'src/model/Expense';

import { NgIf } from '@angular/common';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    updateNumber: number
    expense_code: number
    flag: number
    expenses:  Expense[]
    constructor(public ExpenseService: ExpenseService) {
        ExpenseService.newExpense = new Expense()
        ExpenseService.updatedExpense = new Expense()
        
        
    }
     getFunction() {
         if(this.expense_code != null){
            console.log(this.expense_code)
            this.ExpenseService.getExpenseByCode(this.expense_code).subscribe(data => this.ExpenseService.Expenses = data)
            this.flag=1
        }
        else{
        console.log("Cannot be empty")
        }
    }
    ngOnInit() {
        this.ExpenseService.getAll().subscribe(res => {
            this.expenses = res;
          });
          console.log(this.expenses)
    }   
  
   }   


