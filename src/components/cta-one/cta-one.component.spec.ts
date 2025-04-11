import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaOneComponent } from './cta-one.component';

describe('CtaOneComponent', () => {
  let component: CtaOneComponent;
  let fixture: ComponentFixture<CtaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
