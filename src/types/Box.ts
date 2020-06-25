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

  constructor (definitions: BoxDefinition[]){
    definitions.map(d=>d.name).forEach(name=>{
      this[name] = []
    });
  }

  add(name: string, box: Box){
    this[name].push(box);
  }
}