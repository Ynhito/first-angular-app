import { Component } from '@angular/core';

export interface Card {
  title: string;
  flag: boolean;
}

export type consoleLog = () => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app-angular';

  counter = 0;

  cards: Card[] = [
    {title: 'First title', flag: false},
    // {title: 'Second title', flag: true},
    // {title: 'Third title', flag: false}
  ];

  cardTwo: Card = {title: 'Second title', flag: true};

  cardThree: Card = {title: 'Third title', flag: false};

  consoleLog(): void {
    console.log('ff');
  }

  addCard = (): void => {
    switch (this.counter) {
      case 0:
        this.cards.push(this.cardTwo);
        this.counter++;
        break;
      case 1:
        this.cards.push(this.cardThree);
        this.counter++;
        break;
      default:
        return;
    }
  }
}
