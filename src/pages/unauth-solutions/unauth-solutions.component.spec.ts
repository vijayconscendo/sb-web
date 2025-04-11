import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthSolutionsComponent } from './unauth-solutions.component';

describe('UnauthSolutionsComponent', () => {
  let component: UnauthSolutionsComponent;
  let fixture: ComponentFixture<UnauthSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
