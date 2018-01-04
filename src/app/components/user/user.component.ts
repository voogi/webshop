import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'voga-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  public loggedUser: string = "Dániel";

  constructor() { }

  ngOnInit() {
  }

}
