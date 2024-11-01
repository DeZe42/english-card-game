import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {Card} from "./models/card";
import {CardService} from "./services/card.service";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CdkDrag, CdkDropList, CdkDropListGroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  centerCards: Card[] = [];
  knownCards: Card[] = [];
  unknownCards: Card[] = [];
  isEnglishFirst = true;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.centerCards = this.cardService.getCards();
  }

  toggleCardLanguage(): void {
    this.isEnglishFirst = !this.isEnglishFirst;
    this.updateCardsLanguage();
  }

  updateCardsLanguage(): void {
    this.centerCards.forEach(card => card.isFlipped = !this.isEnglishFirst);
    this.knownCards.forEach(card => card.isFlipped = !this.isEnglishFirst);
    this.unknownCards.forEach(card => card.isFlipped = !this.isEnglishFirst);
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.checkCenterCards();
    }
  }

  private checkCenterCards(): void {
    if (this.centerCards.length === 0) {
      this.centerCards = [...this.unknownCards];
      this.unknownCards = [];
    }
  }
}
