import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAndStatementsComponent } from './history-and-statements.component';

describe('HistoryAndStatementsComponent', () => {
  let component: HistoryAndStatementsComponent;
  let fixture: ComponentFixture<HistoryAndStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryAndStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryAndStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
