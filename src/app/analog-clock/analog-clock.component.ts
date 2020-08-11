import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import {BaseClock} from '../base-clock';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  

  private ctx: CanvasRenderingContext2D;
  date: Date;

  ngOnInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.ctx.beginPath();
    this.ctx.arc(90, 90, 50, 0, Math.PI * 2, true); // Outer circle
    this.ctx.stroke(); // Draw it

    setInterval(() => {
      this.changeTime(new Date())
    }, 1000); 
  }

  private changeTime(newDate: Date): void{   
    this.date = newDate;

    let hour = this.date.getHours();
    let minute = this.date.getMinutes();
    let second = this.date.getSeconds();
    
     //hour
    hour = (60 * hour + minute) * Math.PI/360;
    // this.drawHand(this.ctx, hour, 20);
    minute = Math.PI/30 * minute;
    // this.drawHand(this.ctx, minute, 10);
    // second
    //this.drawHand(this.ctx, second, 20);
    
  }

   drawHand(ctx, pos, length) {
    this.ctx.beginPath();
    this.ctx.moveTo(90,90);
    this.ctx.lineTo(90,length);
    this.ctx.rotate(pos);
    this.ctx.stroke(); // Draw it
    this.ctx.rotate(-pos);

  } 
}