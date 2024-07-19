import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Level2Page } from './level-2.page';

describe('Level2Page', () => {
  let component: Level2Page;
  let fixture: ComponentFixture<Level2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
