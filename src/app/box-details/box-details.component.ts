import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit {
  @Input() word: string;

  constructor() { }

  ngOnInit(): void {
  }

}
