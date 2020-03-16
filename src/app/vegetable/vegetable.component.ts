import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {


  constructor(private main: MainserviceService) {

  }



private fruits: Fruits[];






ngOnInit() {

  this.fruits = this.main.findAll();


}
}
