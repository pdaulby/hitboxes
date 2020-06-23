import { Component, OnInit, Input } from '@angular/core';
import Box from 'src/types/box';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit {
  @Input() box: Box;

  constructor() { }

  ngOnInit(): void {
  }
  stringify(): string {
    return JSON.stringify(this.box);
  }

}
