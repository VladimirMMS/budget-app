import { EventEmitter } from '@angular/core';
import { Budget, BudgetExpense } from './models/budget';

export class BudgetService {
  incomingSum: number = 0;
  expenseSum: number = 0;
  expensePercent: number = 0;
  incoming: Budget[] = [
    new Budget('House', 3000),
    new Budget('Salary', 40000),
    new Budget('Go out', 50000),
    new Budget('Restaurant', 3000),
  ];
  expenses: BudgetExpense[] = [
    new BudgetExpense('House', 3000, 3),
    new BudgetExpense('Salary', 40000, 41),
  ];
  removeEvent = new EventEmitter<Budget[]>();

  getCurrentBudget() {
    return this.incomingSum - this.expenseSum;
  }

  addBudget(type: string, description: string, value: number) {
    if (type == 'ing') this.incoming.push(new Budget(description, value));
    else {
      let percent = ((value * 100) / this.incomingSum).toFixed(2);
      this.expenses.push(
        new BudgetExpense(description, value, parseFloat(percent))
      );
    }
  }

  removeIncoming(index: number, budgetType) {
    budgetType.splice(index, 1);
  }

  setIcoming() {
    this.incomingSum = 0;
    this.incoming.map((element) => {
      return (this.incomingSum = this.incomingSum + element.value);
    });
    return this.incomingSum;
  }

  setExpense() {
    this.expenseSum = 0;
    this.expenses.map((element) => {
      this.expensePercent = this.expensePercent + element.percent;
      this.expenseSum = this.expenseSum + element.value;
    });
    return this.expenseSum;
  }

  getPercent() {
    this.expensePercent = Math.round(
      (this.expenseSum * 100) / this.incomingSum
    );
    return this.expensePercent;
  }
}
