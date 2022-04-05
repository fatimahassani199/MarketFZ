import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsList : any;

  constructor(private api : ApiServiceService, private cardService :CardService ) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(resp=>{
      this.productsList=resp;
      this.productsList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total : a.price})
        
      });
    })
  }
  addtoCard(item : any){
    this.cardService.addtoCard(item); 
  }

}
