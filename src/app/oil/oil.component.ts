import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {

  constructor(private main: MainserviceService) {

  }



private fruits: Fruits[];

ngOnInit() {

  this.fruits = this.main.findAll();


}
}
