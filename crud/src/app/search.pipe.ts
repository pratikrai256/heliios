import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(data: any, searchField: any): any {
    if (searchField) {
      return data.filter((val: any) => {
        return val.email.toLowerCase().includes(searchField.toLowerCase());
      });
    }
    return data;
  }
}
