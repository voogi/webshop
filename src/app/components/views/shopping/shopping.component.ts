import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'voga-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.less']
})
export class ShoppingComponent implements OnInit {

  public itemsList: Array<any> = [];

  constructor(private cartService: CartService) {

    this.itemsList = [
      {
        title: "Assam CTC Typ Typhoo",
        origin: "India",
        desc: "Kivételesen erős Assam tea. CTC eljárással készült, apróra tört levelek. Tanninokban gazdag, frissítő, gyümölcsös jegyekkel rendelkező, sötét színű főzet. Fogyasztását tejjel ajánljuk!",
        price: 1540,
        currency: "Ft",
        id: 1
      }
    ];
  }



  ngOnInit() {
  }

  clearCart():void {
    this.itemsList = [];
  }

  onDeleteItem(item:any){
    this.itemsList.splice(this.itemsList.indexOf(item),1);
    this.cartService.deleteFromCart(item);
  }

}
