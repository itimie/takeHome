import { AnalogClockComponent } from "./analog-clock.component";
import {TestBed, ComponentFixture} from '@angular/core/testing';

describe ('analog clock', () => {
  let fixture;
  let component: AnalogClockComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogClockComponent ],
    });
    fixture = TestBed.createComponent(AnalogClockComponent);
    component = fixture.componentInstance; 
  });

});