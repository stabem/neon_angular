import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(user: any): Observable<any> {
    const cpf = user.cpf;
    const payload = { data: user };
    return this.http.put(`${this.apiUrl}${cpf}/`, payload);
  }



  deleteUser(cpf: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${cpf}/`);
  }
}
