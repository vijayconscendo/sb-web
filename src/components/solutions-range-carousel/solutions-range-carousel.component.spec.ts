import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsRangeCarouselComponent } from './solutions-range-carousel.component';

describe('SolutionsRangeCarouselComponent', () => {
  let component: SolutionsRangeCarouselComponent;
  let fixture: ComponentFixture<SolutionsRangeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsRangeCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsRangeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
