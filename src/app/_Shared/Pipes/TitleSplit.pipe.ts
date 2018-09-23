import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titlesplit' })
export class TitleSplitPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    var splits: string = 'qwertyuiopasdfghjklzxcvbnm';
    var result: string = '';

    for (let index = 0; index < value.length; index++) {
      if (splits.includes(value[index].toLowerCase()) || value[index] == ' ') {
        result += value[index];
      }
      else if (value[index] == '-') {
        result += ' ';
      }
    }
    return result;
  }

}
