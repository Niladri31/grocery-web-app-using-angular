import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { MainserviceService } from '../mainservice.service';



@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent  implements OnInit {

  constructor(private main: MainserviceService ) {

  }
quan = 1;



public fruits: Fruits[];





ngOnInit() {

  this.fruits = this.main.findAll();


}
}



