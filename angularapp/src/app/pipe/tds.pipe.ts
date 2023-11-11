import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tds'
})
export class TdsPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let tds=value-(value*.10);
    if(args.find(x=>x=="pf")){
      tds=tds-(tds*.028);
      return tds;
    }
    return tds;
  }

  

}
