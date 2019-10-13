import { Component, OnInit, Input } from '@angular/core';
import { Card, consoleLog } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() console: consoleLog;
  @Input() counter: number;
  @Input() addCard: () => void;
  @Input() index: number;

  ngOnInit() {
    this.console();
  }

}
