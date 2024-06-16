import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TaskListComponent,FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  Task:any={
    id:0,
    Desc:'',
    Priority:'',
    Status:''
   }

   Priority: string[] = ['Low', 'Medium', 'High']; 
   Status: string[] = ['OnProcess', 'Pending', 'Close']; 
@Output() addKro = new EventEmitter();
Add():void
{
  //this.Task.id++;
  console.log(this.Task.Priority)
  console.log(this.Task.Status)
this.addKro.emit(this.Task)
this.Task = { id: this.Task.id + 1, Desc: '', Priority: '', Status: '' };
}


}
