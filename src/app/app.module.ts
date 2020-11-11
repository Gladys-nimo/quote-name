import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePostPipe } from './date-post.pipe';
import { QuoteFromComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    // NgbModule,
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DatePostPipe,
    QuoteFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
