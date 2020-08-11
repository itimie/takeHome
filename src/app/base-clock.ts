import { Directive, OnInit } from '@angular/core';
import {Days} from './days.enum';

@Directive()
export abstract  class  BaseClock implements OnInit{

  daysOfTheWeek = Days;
  date = new Date();

  hour : string;
  minute: string;
  second: string;
  day: string;
  ampm: string;

  ngOnInit(){
    console.log('in base clock');
     setInterval(() => {
      this.changeTime(new Date())
    }, 1000);  
  }

  changeTime(newTime: Date): void{
    this.date = newTime;
    this.createAnalogTime();
  }

  createAnalogTime(): void{
    this.formatDay();
    this.formatHour();
    this.formatMinute();
    this.formatSeconds();
  }

  private formatDay(): void {
      this.day = this.daysOfTheWeek[this.date.getDay()];
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