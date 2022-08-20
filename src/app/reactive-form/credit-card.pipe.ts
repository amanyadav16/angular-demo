import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length>12){
      return value.slice(0,12);
    }
    if(value.length%4==0){
      return value=value+'-';
    }
    return value;
  }

}
