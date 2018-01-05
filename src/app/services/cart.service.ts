import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CartService {

  private delete$ubject: Subject<any> = new Subject<any>();

  constructor() { }

  deleteFromCart(item:any){
    this.delete$ubject.next(item);
  }

  onDeleteItem(): Observable<any>{
    return this.delete$ubject;
  }

}
