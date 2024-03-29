import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './modules/app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/budget-table/budget-table.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FinanceHealthComponent } from './components/finance-health/finance-health.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetComponent } from './components/budget/budget.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ExpenseFormComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    FinanceHealthComponent,
    ArchiveComponent,
    SettingsComponent,
    DashboardComponent,
    BudgetComponent,
    FooterComponent,
    NavbarComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    MatToolbarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
