import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QfiveComponent } from './qfive.component';

describe('QfiveComponent', () => {
  let component: QfiveComponent;
  let fixture: ComponentFixture<QfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
