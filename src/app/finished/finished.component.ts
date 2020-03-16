import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {
 Item ;
  constructor(  private main: MainserviceService ) { }



user = JSON.parse(localStorage.getItem('cart')) ;
user1 = JSON.parse(sessionStorage.getItem('cart1'));
  ngOnInit() {


  }

}
