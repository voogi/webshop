import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'voga-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.less']
})
export class ShoppingCarComponent implements OnInit, OnDestroy {

  public itemsLength: number = 1;

  private deleteItem$ubscription: Subscription = new Subscription();
  private addedItem$ubscription: Subscription = new Subscription();

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit():void {

    this.deleteItem$ubscription = this.cartService.onDeleteItem().subscribe( item => {
      this.itemsLength--;
    });

  }

  ngOnDestroy():void {
    this.deleteItem$ubscription.unsubscribe();
  }

  onCarClick(){
    this.router.navigate(["shopping-car"]).then(console.log);
  }

  onProfileClick(){
    this.router.navigate(["profile"]).then(console.log);
  }

}
