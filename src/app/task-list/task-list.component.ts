import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { TaskFilterPipe } from '../task-filter.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent,AddTaskComponent,CommonModule,TaskFilterPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
Tasks=[{id:1,Desc:"Goint to Office", Priority:"Low", Status:"Complete"},
  {id:2, Desc:"Learn Angular", Priority:"High", Status:"OnProcess"},
  {id:3, Desc:"Netflix and Chill", Priority:"Low", Status:"Pending"}
]
priorityFilter: string = '';
JaldiHatao(tid:number):void{
this.Tasks = this.Tasks.filter((task)=>
task.id!=tid)
console.log()
}

JaldiAddKaro(arr:any):void{
  this.Tasks.push(arr)
  console.log(arr);
}

trackById(index: number, item: any): number {
  return item.id; // Assuming id is a unique identifier for each task
}

sortBy(field: string): void {
  console.log(field)
  this.priorityFilter = field;
}
}
