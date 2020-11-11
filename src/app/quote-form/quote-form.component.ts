// import { EventEmitter } from 'protractor';
import { Quote } from './../quote';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFromComponent implements OnInit {


newQuote = new Quote(0,"name","quote","publisher",new Date(),0,0);
@Output() addQuote = new EventEmitter<Quote>();

submitQuote(){
  this.addQuote.emit(this.newQuote);
}
  constructor() { }

  ngOnInit(): void {
  }

}
