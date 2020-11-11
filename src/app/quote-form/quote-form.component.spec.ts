import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFromComponent } from './quote-form.component';

describe('QuoteFromComponent', () => {
  let component: QuoteFromComponent;
  let fixture: ComponentFixture<QuoteFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
