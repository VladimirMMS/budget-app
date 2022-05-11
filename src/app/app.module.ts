import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { BudgetService } from './budget.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IncomeComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
