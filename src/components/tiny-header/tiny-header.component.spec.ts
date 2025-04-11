import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyHeaderComponent } from './tiny-header.component';

describe('TinyHeaderComponent', () => {
  let component: TinyHeaderComponent;
  let fixture: ComponentFixture<TinyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TinyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
