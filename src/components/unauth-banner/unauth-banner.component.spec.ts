import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthBannerComponent } from './unauth-banner.component';

describe('UnauthBannerComponent', () => {
  let component: UnauthBannerComponent;
  let fixture: ComponentFixture<UnauthBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
