import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialpagePage } from './tutorialpage.page';

describe('TutorialpagePage', () => {
  let component: TutorialpagePage;
  let fixture: ComponentFixture<TutorialpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
