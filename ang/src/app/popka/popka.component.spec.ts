import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopkaComponent } from './popka.component';

describe('PopkaComponent', () => {
  let component: PopkaComponent;
  let fixture: ComponentFixture<PopkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
