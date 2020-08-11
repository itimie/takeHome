import { Component, OnInit } from '@angular/core';
import {Days} from '../days.enum';
import {FormControl, FormGroup, FormBuilder } from '@angular/forms';
// import { BaseClock } from '../base-clock';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  selectedDate = new FormControl('');

  hour : string;
  minute: string;
  second: string;
  ampm: string;

  dateForm: FormGroup;

  private date = new Date();

  constructor(private fb: FormBuilder) { 
    // super();
  }

  ngOnInit(){
     setInterval(() => {
      this.changeTime(new Date())
    }, 1000);  

    this.dateForm = this.fb.group({
      selectDate: [''],
    });
  }

  changeTime(newTime: Date): void{
    this.date = newTime;
    this.formatTime();
  }

  formatTime(): void{
    this.formatHour();
    this.formatMinute();
    this.formatSeconds();
  }

  synchronize(): void{
      console.log('synchronize');
  }

  private formatHour(): void{
    const hour = this.date.getHours();
    this.hour = hour < 10 ? '0' + hour : `${hour}`;
    this.ampm = hour < 12 ? 'AM': 'PM';
  }

  private formatMinute(): void {
    const minute = this.date.getMinutes();
    this.minute = minute < 10  ? '0'+ minute: `${minute}`;
  }

  private formatSeconds(): void{
    const second = this.date.getSeconds();
    this.second = second < 10 ? '0'+second : `${this.date.getSeconds()}`;
  }
}

