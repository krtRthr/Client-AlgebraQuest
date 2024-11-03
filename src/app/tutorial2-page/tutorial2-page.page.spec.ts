import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial2PagePage } from './tutorial2-page.page';

describe('Tutorial2PagePage', () => {
  let component: Tutorial2PagePage;
  let fixture: ComponentFixture<Tutorial2PagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial2PagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
