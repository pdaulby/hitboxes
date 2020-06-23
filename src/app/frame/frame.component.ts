import { Component, OnInit } from '@angular/core';
import Box from 'src/types/box';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor() { }
  
  imageUrl: string = "https://i.imgur.com/im8dAFe.jpeg";
  boxes: Box[] = [
    {square: {bottom: 10, left: 10, top: 80, right: 80 }},
    {square: {bottom: 20, left: 20, top: 90, right: 90 }}
  ]

  getRedraw() {
    var i = this.imageUrl;
    var b = this.boxes;
    return ()=>this.redraw(i, b);
  }

  redraw(imageUrl: string, boxes: Box[]) {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    var img = new Image(); //Create a background image
    img.src = imageUrl;
    img.onload = function() {
      context.drawImage(img, 0, 0);
      boxes.forEach(box => {
        context.beginPath();
        context.rect(box.square.bottom, box.square.left, box.square.top, box.square.right);
        context.stroke();
      });
    }
  }

  ngOnInit(): void {
    this.redraw(this.imageUrl, this.boxes);
  }

  addBox() {
    this.boxes.push({square: {bottom: 0, left: 0, top: 0, right: 0 }})
  }


  stringify() {
    return JSON.stringify(this.boxes);
  }
}
