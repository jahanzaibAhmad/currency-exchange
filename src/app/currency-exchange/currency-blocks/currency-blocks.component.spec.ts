import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBlocksComponent } from './currency-blocks.component';

describe('CurrencyBlocksComponent', () => {
  let component: CurrencyBlocksComponent;
  let fixture: ComponentFixture<CurrencyBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
