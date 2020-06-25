export default interface Box {
  square: {
    bottom: number,
    left: number,
    top: number,
    right: number
  }
}

export interface BoxDefinition {
  name: string;
  color: string;
  numbers: string[];
}

export class Boxes {
  boxes: Map<string, Box[]>;

  constructor (definitions: BoxDefinition[]){
    this.boxes = new Map();
    definitions.map(d=>d.name).forEach(name=>{
      this.boxes.set(name, [])
    });
  }

  add(name: string, box: Box){
    this.boxes.get(name).push(box);
  }
}