import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewKompComponent } from './new-komp.component';

describe('NewKompComponent', () => {
  let component: NewKompComponent;
  let fixture: ComponentFixture<NewKompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewKompComponent]
    });

    
    fixture = TestBed.createComponent(NewKompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
