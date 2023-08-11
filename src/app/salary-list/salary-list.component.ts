import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SalaryService } from '../salary.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit {
  @Input() cpf!: string;
  @Output() salaryChanged = new EventEmitter<void>();

  salaries: any[] = [];
  editing: { id: number, field: string } | null = null;
  originalValues: { [id: number]: any } = {};

  constructor(private salaryService: SalaryService,  private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadSalaries();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cpf']) {
      this.loadSalaries();
    }
  }
  onDoubleClick(salary: any, field: string): void {
    this.editing = { id: salary.id, field: field };
  }

  clearSalaries(): void {
    this.salaries = [];
  }

  onEditDone(salary: any, field: string, event: any): void {
    const newValue = event.target.value;
    salary[field] = newValue;

    const updateData = { [field]: newValue };

    this.salaryService.updateSalary(salary.id, updateData).subscribe(
      updatedSalary => {
        this.salaryChanged.emit();
      },
      error => {
        console.error('Error updating salary:', error);
        salary[field] = this.originalValues[salary.id][field];
      }
    );
  }

  onDeleteSalary(salary: any): void {
    this.salaryService.deleteSalary(salary.id).subscribe(() => {
      this.salaries = this.salaries.filter(s => s.id !== salary.id);
      this.snackBar.open('Salário excluído', 'X', { duration: 3000 });
      this.salaryChanged.emit();
    });
  }

  private loadSalaries(): void {
    if (this.cpf) {
      this.salaryService.getSalariesByCpf(this.cpf).subscribe((salaries) => {
        this.salaries = salaries;
      });
    }
  }
}
