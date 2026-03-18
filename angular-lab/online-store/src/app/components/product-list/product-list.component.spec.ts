import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Если компонент standalone, импортируем его здесь
      imports: [ProductListComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Используем detectChanges вместо whenStable для инициализации
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});