import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {




    constructor(private main: MainserviceService) {

    }



  private fruits: Fruits[];

  ngOnInit() {

    this.fruits = this.main.findAll();


  }
  }
