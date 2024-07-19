import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Level1Page } from './level-1.page';

describe('Level1Page', () => {
  let component: Level1Page;
  let fixture: ComponentFixture<Level1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
