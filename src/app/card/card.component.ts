import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  image: 'https://images.indianexpress.com/2021/07/GettyImages-healthy-eating-1200.jpg';

  constructor() {
  }

  ngOnInit() {
  }


}
