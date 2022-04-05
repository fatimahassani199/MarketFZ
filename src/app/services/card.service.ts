import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cardItemsList : any =[];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }


  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cardItemsList.push(...product);
    this.productList.next(product);
  }

  addtoCard(product : any){
    this.cardItemsList.push(product);
    this.productList.next(this.cardItemsList);
    this.getTotalPrice();
  }
  getTotalPrice() : number{
    let grandTotal=0;
    this.cardItemsList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCardItem(product : any){
    this.cardItemsList.map((a:any ,index:any)=>{
      if(product.id ===a.id){
        this.cardItemsList.splice(index,1);
      }
    }) 
    this.productList.next(this.cardItemsList);
  }
  removeAllCard(){
    this.cardItemsList=[];
    this.productList.next(this.cardItemsList);
  }
}
