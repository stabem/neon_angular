import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SalaryListComponent } from '../salary-list/salary-list.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  editing: { cpf: string, field: string } | null = null;

  @Output() userSelected = new EventEmitter<any>();
  @ViewChild(SalaryListComponent) salaryListComponent: SalaryListComponent | undefined;

  constructor(private userService: UserService,  private snackBar: MatSnackBar) {}

  onDoubleClick(user: any, field: string): void {
    this.editing = { cpf: user.cpf, field };
  }

  onEditDone(user: any, field: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;

    // Preparando o objeto para atualização
    const updatedUser = { ...user, [field]: newValue };

    // Chamando o serviço para atualizar o usuário
    this.userService.updateUser(updatedUser).subscribe(() => {
      // Atualizando a lista local de usuários
      const index = this.users.findIndex(u => u.cpf === user.cpf);
      if (index > -1) {
        this.users[index] = updatedUser;
      }
      this.editing = null;
    });
  }


  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  onDeleteUser(user: any): void {
    this.userService.deleteUser(user.cpf).subscribe(() => {
      this.users = this.users.filter(u => u.cpf !== user.cpf);
      this.snackBar.open('Usuário excluído', 'X', { duration: 3000 });
      this.userSelected.emit(null);
      if (this.salaryListComponent) {
        this.salaryListComponent.clearSalaries();
      }
    });
  }

  selectUser(user: any): void {
    this.userSelected.emit(user);
  }
}
