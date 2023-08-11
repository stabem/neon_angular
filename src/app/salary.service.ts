import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private apiUrl = 'http://localhost:8000/salaries/';

  constructor(private http: HttpClient) { }

  createSalary(salary: any): Observable<any> {
    return this.http.post(this.apiUrl, salary);
  }

  getSalaries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDashboardData(cpf?: string): Observable<any> {
    const url = cpf ? `${this.apiUrl}dashboard/${cpf}/` : `${this.apiUrl}dashboard/`;
    return this.http.get<any>(url);
  }

  updateSalary(id: number, salary: any): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.put(url, { data: salary });
  }

  getSalariesByCpf(cpf: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}user/${cpf}/`);
  }

  deleteSalary(id: number): Observable<void> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete<void>(url);
  }

}
