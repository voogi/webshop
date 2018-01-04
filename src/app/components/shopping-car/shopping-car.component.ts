import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'voga-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.less']
})
export class ShoppingCarComponent implements OnInit {

  public itemsLength: number = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCarClick(){
    this.router.navigate(["shopping-car"]).then(console.log);
  }

  onProfileClick(){

  }

}
