import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() currentcard: Card;
  @Output() selectedBid: EventEmitter<Card> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitBid() {
    this.selectedBid.emit(this.currentcard);
  }

}
