import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

list = [];
 name: string;
 phone: string ;
 address: string ;
 city: string ;
 pincode: string ;

  constructor() { }

  update(name1 , phone1 , address1, city1 , pincode1): void {


this.list.push(name1 , phone1 , address1 , city1 , pincode1  ) ;

sessionStorage.setItem('cart1', JSON.stringify(this.list));

  }

  ngOnInit() {
  }

}
