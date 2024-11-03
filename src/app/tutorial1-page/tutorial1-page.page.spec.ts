import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial1PagePage } from './tutorial1-page.page';

describe('Tutorial1PagePage', () => {
  let component: Tutorial1PagePage;
  let fixture: ComponentFixture<Tutorial1PagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial1PagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
