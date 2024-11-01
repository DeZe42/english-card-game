import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../../models/card";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Card;
  @Output() moveToKnown = new EventEmitter<Card>();
  @Output() moveToUnknown = new EventEmitter<Card>();

  flipCard() {
    this.card.isFlipped = !this.card.isFlipped;
  }
}
