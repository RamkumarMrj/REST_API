import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  
  constructor(private taskService: TasksService, private router: Router) { }

  public data: any
  public sel: any

  ngOnInit() {
    this.taskService.getAllData()
    .subscribe(data => { 
      this.data = data
      console.log(data)
    })
  }
  submitData(value: any) {
    let body = {
      id: value.id,
      name: value.name,
      description: value.description
    }
    this.taskService.postData(body)
    .subscribe(response => {
      console.log(response)
    })
  }

  create() {
    this.router.navigate(['create'])
  }

  delete() {
    console.log(this.sel)
  }

  // dalete(value: any) {
  //   let body = {
  //     id: value.id,
  //     name: value.name,
  //     description: value.description
  //   }
  //   this.taskService.postData(this.sel)
  //   .subscribe(response => {
  //     console.log(response)
  //   })
  // }

}
