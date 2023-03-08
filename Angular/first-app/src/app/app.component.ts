import { Component } from '@angular/core';

export interface  Card {
  name : string
  title : string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  toggle = true

  cards: Card[] = [
    {name: "Card 1", title: "This is card number 1"},
    {name: "Card 2", title: "This is card number 2"},
    {name: "Card 3", title: "This is card number 3  "},

  ]
  toggleCards(){
    this.toggle = !this.toggle

  }
}
