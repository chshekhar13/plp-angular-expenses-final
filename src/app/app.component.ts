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
    expense_type : string
    flag: number
    code:number
    expenses:  Expense[]
    constructor(public ExpenseService: ExpenseService) {
        ExpenseService.newExpense = new Expense()
        ExpenseService.updatedExpense = new Expense()
        
        
    }
     getFunction() {
         if(this.code != null){
            console.log(this.expense_type)
            console.log(this.code)
            this.ExpenseService.getExpenseByCode(this.code).subscribe(data => this.ExpenseService.Expenses = data)
            this.flag=1
        }
        else{
        console.log("Cannot be empty")
        }
    }
    getAll()
    {
        this.ExpenseService.getAll().subscribe(res => {
            this.expenses = res;
            res.forEach(element => {
                if(element.expense_type==this.expense_type)
                {
                this.code=element.expense_code;
                console.log( this.code)
                this.getFunction();
                }
            });
          });
          console.log(this.expenses)
    }
    ngOnInit() {
        this.ExpenseService.getAll().subscribe(res => {
            this.expenses = res;
            
          });
          console.log(this.expenses)
    }   
  
   }   
