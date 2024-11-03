import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial3PagePage } from './tutorial3-page.page';

describe('Tutorial3PagePage', () => {
  let component: Tutorial3PagePage;
  let fixture: ComponentFixture<Tutorial3PagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial3PagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
