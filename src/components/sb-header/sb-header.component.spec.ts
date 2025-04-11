import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbHeaderComponent } from './sb-header.component';

describe('SbHeaderComponent', () => {
  let component: SbHeaderComponent;
  let fixture: ComponentFixture<SbHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
