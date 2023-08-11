import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnChanges {
  averageSalary!: number;
  averageDiscount!: number;
  highestSalary!: number;
  lowestSalary!: number;
  @Input() cpf!: string;


  constructor(private dashboardService: DashboardService) {}

  ngOnChanges(): void {
    this.loadDashboardData(this.cpf);
  }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(cpf?: string): void {
    this.dashboardService.getDashboardData(cpf).subscribe((data) => {
      this.averageSalary = data.averageSalary;
      this.averageDiscount = data.averageDiscount;
      this.highestSalary = data.highestSalary;
      this.lowestSalary = data.lowestSalary;
    });
  }
}
