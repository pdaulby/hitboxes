import { Component, OnInit, Input } from '@angular/core';
import Box, { BoxDefinition } from 'src/types/box';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit {
  @Input() box: Box;
  @Input() boxType: BoxDefinition;
  @Input() redraw: () => void;

  constructor() { }

  ngOnInit(): void {
  }
}
