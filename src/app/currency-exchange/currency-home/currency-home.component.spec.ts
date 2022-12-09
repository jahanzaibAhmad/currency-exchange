import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHomeComponent } from './currency-home.component';

describe('CurrencyHomeComponent', () => {
  let component: CurrencyHomeComponent;
  let fixture: ComponentFixture<CurrencyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
