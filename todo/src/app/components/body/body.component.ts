import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public taskList: any = [];
  public currentTask: number = 0;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.taskServiceApi()
      .subscribe((res: { tasks: any; }) => {
        this.taskList = res.tasks;
      })
  }

}
