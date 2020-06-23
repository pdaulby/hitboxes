import { Component, OnInit } from '@angular/core';
import Box from 'src/types/box';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor() { }

  boxes: Box[] = [
    {square: {bottom: 10, left: 10, top: 80, right: 80 }},
    {square: {bottom: 20, left: 20, top: 90, right: 90 }}
  ]

  ngOnInit(): void {
  }

  addBox() {
    this.boxes.push({square: {bottom: 0, left: 0, top: 0, right: 0 }})
  }


  stringify() {
    return JSON.stringify(this.boxes);
  }
}
