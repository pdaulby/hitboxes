export default interface Box{
  square: {
    bottom: number,
    left: number,
    top: number,
    right: number
  };
  [x: string]: any 
}

export interface BoxDefinition {
  name: string;
  color: string;
  numbers?: string[];
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

export type BoxCallback =  (box: Box, definition: BoxDefinition) => any;

export const forEachBox = (boxes: Boxes, boxTypes: BoxDefinition[], fn: BoxCallback) => {
  boxTypes.forEach(definition => {
    boxes[definition.name].forEach(box=> {
      fn(box, definition);
    })
  });
}