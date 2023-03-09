import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseURL = 'http://localhost:5000/api'
  
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/tasks`)
  }

  postData(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/task/`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/task/`, id)
  }
}
