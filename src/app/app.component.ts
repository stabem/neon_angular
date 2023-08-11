import { Component, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { UserListComponent } from './users-list/users-list.component';
import { SalaryService } from './salary.service';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neon';
  selectedUser: any;

  @ViewChild(SalaryListComponent, { static: false }) salaryListComponent!: SalaryListComponent;
  @ViewChild(UserListComponent, { static: false }) userListComponent!: UserListComponent;
  @ViewChild(DashboardComponent, { static: false }) dashboardComponent!: DashboardComponent;

  constructor(private userService: UserService, private salaryService: SalaryService) {}


  fillSalaryForm(user: any): void {
    this.selectedUser = user;
  }

  refreshSalaryList(): void {
    this.salaryService.getSalariesByCpf(this.selectedUser.cpf).subscribe((salaries) => {
      this.salaryListComponent.salaries = salaries;
    });
  }

  loadDashboardData(cpf?: string): void {
    this.dashboardComponent.loadDashboardData(cpf);
  }

  refreshUserList(): void {
    this.userListComponent.loadUsers();
  }
}
