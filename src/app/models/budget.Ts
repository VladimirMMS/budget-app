export class Budget {
  constructor(public description: string, public value: number) {}
}

export class BudgetExpense {
  constructor(
    public description: string,
    public value: number,
    public percent: number
  ) {}
}
