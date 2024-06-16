import { Component,Input,Output,EventEmitter} from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskListComponent,AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() TaskItem:any;
  @Output() hatao = new EventEmitter();
onRemove(tid:number):void
{
 this.hatao.emit(tid)
}

}

