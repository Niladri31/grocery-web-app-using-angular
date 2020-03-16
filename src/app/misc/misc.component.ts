import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  constructor(private main: MainserviceService) {

  }



private fruits: Fruits[];

ngOnInit() {

  this.fruits = this.main.findAll();


}
}

