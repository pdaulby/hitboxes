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
    {name: "hurtbox", color: "green"},
    {name: "hitbox", color: "red", numbers: ["damage"]},
  ]

  imageUrl: string = "https://i.imgur.com/im8dAFe.jpeg";
  anchor = { x: 300, y: 300 };
  boxes: Boxes = new Boxes(this.boxTypes);

  getRedraw() {
    var b = this.boxes;
    var a = this.anchor;
    return ()=>this.redraw(b, a);
  }

  redraw(boxes: Boxes, anchor: {x: number, y: number}) {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;

    context.strokeStyle = "black";
    context.fillRect(anchor.x-2, anchor.y-2, 4, 4)

    //TODO this.boxTypes may need to be passed in?
    this.boxTypes.forEach(definition=> {
      context.strokeStyle = definition.color;
      boxes[definition.name].forEach(box=>{
        var start = { x: anchor.x + box.square.left, y: anchor.y - box.square.top };
        var end = { x: box.square.right - box.square.left, y: box.square.top - box.square.bottom };
        context.beginPath();
        context.rect(start.x, start.y, end.x, end.y);
        context.stroke();
      })
    })
  }

  ngOnInit(): void {
    this.boxes.add("hurtbox", {square: {left: -20, bottom: -80, right: 80, top: 160 }});
    this.boxes.add("hurtbox", {square: {left: -110, bottom: -60, right: 65, top: 120 }});
    this.boxes.add("hitbox", {square: {left: -65, bottom: -75, right: 25, top: 15 }, damage: 20});
    this.redraw(this.boxes, this.anchor);
  }

  addBox(name: string) {
    this.boxes.add(name, {square: {bottom: -10, left: -10, top: 10, right: 10 }})
    this.redraw(this.boxes, this.anchor);//TODO should probably not do this
  }


  stringify() {
    return JSON.stringify(this.boxes, null, 2);
  }
}
