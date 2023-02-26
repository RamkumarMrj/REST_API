import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  taskServiceApi() {
    return this.http.get<any>("http://localhost:5000/api/tasks")
  }
}
