import { Component, OnInit } from '@angular/core';
import Box from 'src/types/box';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor() { }

  boxes: Box[] = [{square: {bottom: 10, left: 10, top: 80, right: 80 }}]

  ngOnInit(): void {
  }

}
