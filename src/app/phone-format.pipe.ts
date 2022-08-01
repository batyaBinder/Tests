import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(number: any) {
    if(!number){
      return number;
    }

    let numberAsStr=number.toString();
    numberAsStr = numberAsStr.charAt(0) != 0 ? "0" + numberAsStr : "" + numberAsStr;

    let newStr = "";
    let i = 0;

    return numberAsStr.substr(0, 3) + "-"   + numberAsStr.substr(3);
  }
  
}
