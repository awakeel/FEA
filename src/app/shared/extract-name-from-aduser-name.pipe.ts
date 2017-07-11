import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractNameFromADUserName'
})
export class ExtractNameFromADUserNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    const regex = /[^\\]*$/

    return regex.exec(value)[0];


  }

}
