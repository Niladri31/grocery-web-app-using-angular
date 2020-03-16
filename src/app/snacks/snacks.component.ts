import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

  constructor(private main: MainserviceService) {

  }



private fruits: Fruits[];

ngOnInit() {

  this.fruits = this.main.findAll();


}
}

