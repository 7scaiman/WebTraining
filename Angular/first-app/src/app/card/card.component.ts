import {Component, Input, OnInit} from "@angular/core"
import {Card} from "../app.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["card.component.scss"]


})
export class CardComponent implements OnInit{
  @Input() card!: Card
  @Input() index!: number
  number : number = 0;
  color : string = "blue"

  cardDate: Date = new Date()
  newColor : string = ""

  newFontSize : string = ""

  imgUrl : string ="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"

  disabled : boolean = true

  ngOnInit() {
    setTimeout(() => {
   this.imgUrl = "https://angular.io/assets/images/logos/angular/shield-large.svg"
      this.disabled = false
    },3000)
  }

  increment(){
    this.number++
  }
  decrement(){
    this.number--
  }

  setColor(){
   this.color = this.newColor
  }
  setFontSize(){

  }
  chagecolor() {

  }
}
