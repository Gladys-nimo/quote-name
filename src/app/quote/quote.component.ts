import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'Gladys','Never say never','John Doe',new Date(2020,11,10),0,0,false),
    new Quote(2,'Grace', 'proscrastintination is the thief of time', 'Luther KIng',new Date(2020,9,11),0,0,false),
    new Quote(3,'John', 'everything is possible', 'Moses Bliss',new Date(2020,11,12),0,0,false),
 ];

 get addNewQuoteFunc() {
  return this.addNewQuote.bind(this);
}

  toggleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}


completeQuote(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
 }
}


deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm('Are you sure you want to delete quote')
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
}

addNewQuote(name:string,quote:string,publisher:string){
  let number  = this.quotes.length + 1;
  let date = new Date();
    this.quotes.push( new Quote(number,name,quote,publisher,date,0,0,false));
}


quoteVote(vote:boolean,index) {
  if(vote) {
      this.quotes[index].likes += 1;
      this.getHighest();
  } else {
      this.quotes[index].dislikes += 1;
  }
}
getHighest(){
  let highest = 0;
  let highestQuote: Quote;
  for(let quote of this.quotes){
      if(quote.likes > highest){
          highest = quote.likes;
          highestQuote = quote;
      }
      if(quote.id === highestQuote.id){
          quote.highest = true;
      }else{
          quote.highest = false;
      }
  }
}



  constructor() { }

  ngOnInit(): void {
  }

}
// quote.number = quoteLength+1;
  // qet
  // quote.datePosted = new Date(quote.datePosted)
// 
