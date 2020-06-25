import { Component, OnInit } from '@angular/core';
import Box, { BoxDefinition, Boxes } from 'src/types/box';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor() { }
  
  boxTypes: BoxDefinition[] = [
    {name: "hurtbox", color: "green", numbers: []},
    {name: "hitbox", color: "red", numbers: ["damage"]},
  ]

  imageUrl: string = "https://i.imgur.com/im8dAFe.jpeg";
  boxes: Boxes = new Boxes(this.boxTypes);

  getRedraw() {
    var b = this.boxes;
    return ()=>this.redraw(b);
  }

  redraw(boxes: Boxes) {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;
    this.boxTypes.forEach(definition=> {
      context.strokeStyle = definition.color;
      boxes.boxes.get(definition.name).forEach(box=>{
        context.beginPath();
        context.rect(box.square.bottom, box.square.left, box.square.top, box.square.right);
        context.stroke();
      })
    })
  }

  ngOnInit(): void {
    this.boxes.add("hurtbox", {square: {bottom: 110, left: 110, top: 180, right: 180 }});
    this.boxes.add("hurtbox", {square: {bottom: 120, left: 120, top: 280, right: 280 }});
    this.boxes.add("hitbox", {square: {bottom: 150, left: 120, top: 280, right: 250 }});
    this.redraw(this.boxes);
  }

  addBox() {
    this.boxes.add("hitbox", {square: {bottom: 0, left: 0, top: 0, right: 0 }})
  }


  stringify() {
    return JSON.stringify(this.boxes);
  }
}
