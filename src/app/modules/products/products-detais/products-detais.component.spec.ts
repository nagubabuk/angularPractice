import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetaisComponent } from './products-detais.component';

describe('ProductsDetaisComponent', () => {
  let component: ProductsDetaisComponent;
  let fixture: ComponentFixture<ProductsDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
