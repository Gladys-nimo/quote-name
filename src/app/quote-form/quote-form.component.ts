// import { EventEmitter } from 'protractor';
import { Quote } from './../quote';
import { Component, OnInit,  Input} from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


@Input() addNewQuote: Function;
// @Output() addQuote = new EventEmitter<Quote>();

// submitQuote(){
  // this.addQuote.emit(this.newQuote);

  constructor() { }

  ngOnInit(): void {
  }

}
