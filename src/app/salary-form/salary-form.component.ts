import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryService } from '../salary.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css'],
})
export class SalaryFormComponent implements OnInit, OnChanges {
  salaryForm: FormGroup;
  @Input() cpf!: string;
  @Input() name!: string;
  @Output() salaryCreated = new EventEmitter<void>();
  @Output() salaryChanged = new EventEmitter<void>();



  constructor(private formBuilder: FormBuilder, private salaryService: SalaryService, private snackBar: MatSnackBar) {
    this.salaryForm = this.formBuilder.group({
      cpf: [{value: '', disabled: true}, Validators.required],
      name: [{value: '', disabled: true}, Validators.required],
      date: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.updateFormFields();
  }

  ngOnChanges(): void {
    this.updateFormFields();
  }

  updateFormFields(): void {
    const cpfControl = this.salaryForm.get('cpf');
    const nameControl = this.salaryForm.get('name');

    if (cpfControl) {
      cpfControl.setValue(this.cpf);
    }
    if (nameControl) {
      nameControl.setValue(this.name);
    }
  }

  onSubmit(): void {
    if (this.salaryForm.invalid) {
      this.snackBar.open('Preencha todos os campos!', 'X', {
        duration: 3000,
      });
      return;
    }
    const salary = {
      data: this.salaryForm.value,
    };
    salary.data.cpf = this.cpf;
    this.salaryService.createSalary(salary).subscribe((response) => {
      this.salaryCreated.emit();
      this.salaryChanged.emit();
      this.snackBar.open('Salário criado com sucesso', 'X', { duration: 3000 });
    });
  }
}
