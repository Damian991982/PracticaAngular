import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApistoreComponent } from './apistore.component';

describe('ApistoreComponent', () => {
  let component: ApistoreComponent;
  let fixture: ComponentFixture<ApistoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApistoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApistoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
