import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalScorePage } from './final-score.page';

describe('FinalScorePage', () => {
  let component: FinalScorePage;
  let fixture: ComponentFixture<FinalScorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
