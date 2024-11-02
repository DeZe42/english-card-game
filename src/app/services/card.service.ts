import { Injectable } from '@angular/core';
import {Card} from "../models/card";

@Injectable({ providedIn: 'root' })
export class CardService {
  getCards(): Card[] {
    return [
      { id: 1, englishText: 'CAN + V1', hungarianText: 'tud, -hat, -het', isFlipped: false },
      { id: 2, englishText: 'COULD + V1', hungarianText: 'tudott, tudhatott, tudna', isFlipped: false },
      { id: 3, englishText: 'WILL BE ABLE TO', hungarianText: 'majd tudok, majd fogok tudni', isFlipped: false },
      { id: 4, englishText: 'COULD HAVE + V3', hungarianText: 'tudott volna', isFlipped: false },
      { id: 5, englishText: 'BE ABLE TO', hungarianText: 'képes valamire', isFlipped: false },
      { id: 6, englishText: 'HAVE TO/ NEED TO/ MUST', hungarianText: 'kell', isFlipped: false },
      { id: 7, englishText: 'HAD TO/ NEEDED TO', hungarianText: 'kellett', isFlipped: false },
      { id: 8, englishText: 'WILL HAVE TO/NEED TO', hungarianText: 'kelleni fog', isFlipped: false },
      { id: 9, englishText: 'MUST + V1', hungarianText: 'bizonyára (biztos)', isFlipped: false },
      { id: 10, englishText: 'MUST HAVE + V3', hungarianText: 'bizonyára ...ta', isFlipped: false },
      { id: 11, englishText: 'SHOULD + V1', hungarianText: 'kellene', isFlipped: false },
      { id: 12, englishText: 'SHOULD HAVE +V3', hungarianText: 'kellett volna', isFlipped: false },
      { id: 13, englishText: 'WOULD + V1', hungarianText: '-na, -ne, -ná, -né', isFlipped: false },
      { id: 14, englishText: 'WOULD HAVE + V3', hungarianText: '…tam volna', isFlipped: false },
      { id: 15, englishText: 'MAY/ MIGHT + V1', hungarianText: 'lehet, hogy… (bizonytalan)', isFlipped: false },
      { id: 16, englishText: 'MAY/ MIGHT HAVE + V3', hungarianText: 'lehet, hogy… (bizonytalan)', isFlipped: false },
      { id: 17, englishText: 'MUST + V1', hungarianText: 'bizonyára (biztos)', isFlipped: false },
      { id: 17, englishText: `DON'T HAVE TO/NEED TO`, hungarianText: 'nem kell', isFlipped: false },
      { id: 17, englishText: `DIDN'T HAVE TO/NEED TO`, hungarianText: 'nem kellett', isFlipped: false },
    ];
  }
}
