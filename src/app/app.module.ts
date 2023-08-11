import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './users-list/users-list.component';
import { SalaryFormComponent } from './salary-form/salary-form.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    SalaryFormComponent,
    SalaryListComponent,
    DashboardComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
