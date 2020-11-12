import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePost'
})
export class DatePostPipe implements PipeTransform {

  transform(value: any) {

 if(value > 0 && value < 60) {
          return "Created a few seconds ago";
      } else if(value >= 60 && value < 3600 ) {
          return "Created " + Math.round(value/60) + " minutes ago";
      } else if(value >= 3600) {
          return "Created " + Math.round(value/3600) + " hours ago";
      }
  }
//     let today:Date = new Date(); 
//     let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
//     var dateDifference = Math.abs(todayWithNoTime - value ) 
//     const secondsInDay = 86400; 
//     var dateDifferenceSeconds = dateDifference*0.001; 
//     var dateCounter = dateDifferenceSeconds/secondsInDay;

//     if (dateCounter >= 1 && todayWithNoTime > value){
//       return dateCounter;
//     }else{

  
//   return 0;
// }

//   }

}
