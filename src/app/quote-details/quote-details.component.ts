import { Quote } from './../quote';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Input () quotes;
  @Output () toVote=new EventEmitter<boolean>();
  @Output() isComplete= new EventEmitter<boolean>();
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  
  vote(voteValue:boolean) {
    this.toVote.emit(voteValue);
}


  quoteHighestLikes() {
    for (var index = 0; index < this.quotes.length; index++) {
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[index].likes > this.quotes[i].likes) {
                this.quotes[index].highest = true;
                this.quotes[i].highest = false;
            }

        }
    }
}

   constructor() { }

  ngOnInit(): void {
  }

}
