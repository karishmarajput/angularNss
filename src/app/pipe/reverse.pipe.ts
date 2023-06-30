import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  nvalue: any;
  transform(value: any, ...args: unknown[]): unknown {
    this.nvalue = value.split('').reverse().join('');

    return this.nvalue;
  }

}
