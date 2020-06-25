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
  boxMap: Map<string, Box[]>;

  constructor (definitions: BoxDefinition[]){
    this.boxMap = new Map();
    definitions.map(d=>d.name).forEach(name=>{
      this.boxMap.set(name, [])
    });
  }

  add(name: string, box: Box){
    this.boxMap.get(name).push(box);
  }
}