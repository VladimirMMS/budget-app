import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/budget.service';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit{
  incoming: Budget[] = []
  constructor(public budgetService: BudgetService) {

  }
  ngOnInit(): void {
    this.incoming = this.budgetService.incoming
   
  }
  emitRemove(index) {
    this.budgetService.removeIncoming(index, this.incoming)
    this.budgetService.removeEvent.emit(this.incoming)

  }

  

}
