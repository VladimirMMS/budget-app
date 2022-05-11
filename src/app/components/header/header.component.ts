import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/budget.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentBudget: number;
  incomingSum: number;
  expenseSum: number;
  expensePercent: number;
  constructor(public budgetService: BudgetService) {
    this.budgetService.removeEvent.subscribe(() => this.getBudget());
  }
  ngOnInit(): void {
    this.getBudget();
    this.expensePercent = this.budgetService.expensePercent;
  }

  getBudget() {
    this.incomingSum = this.budgetService.setIcoming();
    this.expenseSum = this.budgetService.setExpense();
    this.currentBudget = this.budgetService.getCurrentBudget();
    this.expensePercent = this.budgetService.getPercent()
  }
}
