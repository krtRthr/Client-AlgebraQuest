import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Question25Page } from './question2-5.page';

describe('Question25Page', () => {
  let component: Question25Page;
  let fixture: ComponentFixture<Question25Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Question25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
