import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFilingsComponent } from './tax-filings.component';

describe('TaxFilingsComponent', () => {
  let component: TaxFilingsComponent;
  let fixture: ComponentFixture<TaxFilingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxFilingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxFilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
