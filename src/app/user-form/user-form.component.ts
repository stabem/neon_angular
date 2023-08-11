import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  @Output() userCreated = new EventEmitter<void>();


  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {
    this.userForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      name: ['', Validators.required],
      birth_date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.snackBar.open('Preencha todos os campos!', 'X', {
        duration: 3000,
      });
      return;
    }
    const user = {
      data: this.userForm.value,
    };
    this.userService.createUser(user).subscribe(
      (response) => {
        this.userCreated.emit();
        this.snackBar.open('Usuário criado com sucesso', 'X', { duration: 3000 });
      },
      (error) => {
        if (error.status === 409 || error.message.includes('Usuário já existe')) {
          this.snackBar.open('Usuário já existe com esse cpf', 'X', { duration: 3000 });
        } else {
          this.snackBar.open('Ocorreu um erro ao criar o usuário', 'X', { duration: 3000 });
        }
      }
    );

  }
}
