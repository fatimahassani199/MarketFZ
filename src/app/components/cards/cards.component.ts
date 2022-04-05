import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public product :any =[];
  public total !:number;

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cardService.getProduct()
    .subscribe(resp=>{
      this.product=resp;
      this.total=this.cardService.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cardService.removeCardItem(item);
  }

  emptyCard(){
    this.cardService.removeAllCard();
  }
}
