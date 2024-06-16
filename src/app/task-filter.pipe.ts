import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter',
  standalone: true
})
export class TaskFilterPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    // Sort array based on field
    switch (field) {
      case 'priority':
        return array.sort((a, b) => {
          if (a.Priority < b.Priority) return -1;
          if (a.Priority > b.Priority) return 1;
          return 0;
        });
      case 'status':
        return array.sort((a, b) => {
          if (a.Status < b.Status) return -1;
          if (a.Status > b.Status) return 1;
          return 0;
        });
      default:
        return array;
    }
  }
}
