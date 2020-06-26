import { Component, OnInit } from '@angular/core';
import Box, { BoxDefinition, Boxes, forEachBox, BoxCallback } from 'src/types/box';

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
    return ()=>this.redraw();
  }

  redraw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;

    //draw cross
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(this.anchor.x - 6, this.anchor.y - 6);
    context.lineTo(this.anchor.x + 6, this.anchor.y + 6);
    context.moveTo(this.anchor.x + 6, this.anchor.y - 6);
    context.lineTo(this.anchor.x - 6, this.anchor.y + 6);
    context.stroke();

    //TODO this.boxTypes may need to be passed in?
    this.doForEachBox()((box, definition)=>{
      context.strokeStyle = definition.color;
      var start = { x: this.anchor.x + box.square.left, y: this.anchor.y - box.square.top };
      var end = { x: box.square.right - box.square.left, y: box.square.top - box.square.bottom };
      context.beginPath();
      context.rect(start.x, start.y, end.x, end.y);
      context.stroke();});
  }

  updateAnchorY(newY: number){
    var difference: number = this.anchor.y - newY;
    this.anchor.y = Number(newY);
    this.doForEachBox()((box)=>{
      box.square.bottom-=difference;
      box.square.top-=difference;});
    this.redraw();
  }

  updateAnchorX(newX: number){
    var difference: number = this.anchor.x - newX;
    this.anchor.x = Number(newX);
    this.doForEachBox()((box)=>{
      box.square.left+=difference;
      box.square.right+=difference;});
    this.redraw();
  }

  doForEachBox = () => {
    return (fn: BoxCallback) => forEachBox(this.boxes, this.boxTypes, fn)
  }

  ngOnInit(): void {
    this.boxes.add("hurtbox", {square: {left: -20, bottom: -80, right: 80, top: 160 }});
    this.boxes.add("hurtbox", {square: {left: -110, bottom: -60, right: 65, top: 120 }});
    this.boxes.add("hitbox", {square: {left: -65, bottom: -75, right: 25, top: 15 }, damage: 20});
    this.redraw();
  }

  addBox(name: string) {
    this.boxes.add(name, {square: {bottom: -10, left: -10, top: 10, right: 10 }})
    this.redraw();//TODO should maybe not do this
  }


  stringify() {
    return JSON.stringify(this.boxes, null, 2);
  }
}