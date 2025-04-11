import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyManageCarouselComponent } from './money-manage-carousel.component';

describe('MoneyManageCarouselComponent', () => {
  let component: MoneyManageCarouselComponent;
  let fixture: ComponentFixture<MoneyManageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyManageCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyManageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
