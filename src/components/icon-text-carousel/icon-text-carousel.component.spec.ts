import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTextCarouselComponent } from './icon-text-carousel.component';

describe('IconTextCarouselComponent', () => {
  let component: IconTextCarouselComponent;
  let fixture: ComponentFixture<IconTextCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTextCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTextCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
