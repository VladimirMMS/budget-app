import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/budget.service';
import { BudgetExpense } from 'src/app/models/budget';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  expenses: BudgetExpense[] = [];
  constructor(public budgetService: BudgetService) {}
  ngOnInit(): void {
    this.expenses = this.budgetService.expenses;
  }
  emitRemove(index) {
    this.budgetService.removeIncoming(index, this.expenses);

    this.budgetService.removeEvent.emit(this.expenses);
  }
}
