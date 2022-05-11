import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/budget.service';
import { Budget } from '../../models/budget'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  constructor(public budgetService: BudgetService) {}
  description: string= ''
  value: number = 0
  type:string= 'ing'


  operationType(inputType: string) {
    this.type = inputType

  }
  addBudget(){
    this.budgetService.addBudget(this.type, this.description, this.value)

  }
  

}
