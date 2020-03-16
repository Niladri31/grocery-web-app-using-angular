import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import * as $ from 'jquery';
import { Fruits } from '../fruits';
import { Item } from '../item';
import { MainserviceService } from '../mainservice.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Item[] = [];
  public total = 0;
  txt: number;
i: string;

// tslint:disable-next-line: triple-equals
// tslint:disable-next-line: no-unused-expression

//  //  this.activatedRoute.params.subscribe(params =>
//  this.activatedRoute.params.forEach((urlParams) => {
//   const id = urlParams.id;
//   const quan = urlParams.quantity ;
//   if (id) {
//     const item: Item = {
//       product: this.main.find(id),
//       quantity: quan
//     };
//     if (localStorage.getItem('cart') == null ) {
//       const cart: any = [];
//       cart.push(JSON.stringify(item));
//       this.main.addToCart(cart);
//       localStorage.setItem('cart', JSON.stringify(cart));
//     } else {
//       const cart: any = JSON.parse(localStorage.getItem('cart'));
//       let index = -1;
//       for (let i = 0; i < cart.length; i++) {
//         // tslint:disable-next-line: no-shadowed-variable
//         const item: Item = JSON.parse(cart[i]);
//         // tslint:disable-next-line: triple-equals
//         if (item.product.id == id) {
//           index = i;
//           break;
//         }
//       }
//       // tslint:disable-next-line: triple-equals
//       if (index == -1) {
//         cart.push(JSON.stringify(item));
//         localStorage.setItem('cart', JSON.stringify(cart));}
//       // } else {
//       //   // tslint:disable-next-line: no-shadowed-variable
//       //   const item: Item = JSON.parse(cart[index]);
//       //   item.quantity += this.quantity;
//       //   cart[index] = JSON.stringify(item);
//       //   localStorage.setItem('cart', JSON.stringify(cart));
//       // }
//     }
//     this.loadCart();
//   } else {
//     this.loadCart();
//   }
// });

   quantity = 1 ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private main: MainserviceService ,
    private _location: Location) { }



    back() {
      this._location.back();
    }








ngOnInit() {


  let cart = localStorage.getItem('cart');

  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array
  cart = cart ? JSON.parse(cart) : {};

  // Add new data to localStorage Array


  // Save back to localStorage


    //  this.activatedRoute.params.subscribe(params =>
  this.activatedRoute.params.forEach((urlParams) => {
  const id = urlParams.id;
  const quan = urlParams.quantity ;
  if (id) {
    const item: Item = {
      product: this.main.find(id),
      quantity: quan
    };
    if (localStorage.getItem('cart') == null ) {
      const cart: any = [];
      cart.push(JSON.stringify(item));

      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const cart: any = JSON.parse(localStorage.getItem('cart'));
      let index = -1;
      for (let i = 0; i < cart.length; i++) {
        // tslint:disable-next-line: no-shadowed-variable
        const item: Item = JSON.parse(cart[i]);
        // tslint:disable-next-line: triple-equals
        if (item.product.id == id) {
          index = i;
          break;
        }
      }
      // tslint:disable-next-line: triple-equals
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart)); }
      // } else {
      //   // tslint:disable-next-line: no-shadowed-variable
      //   const item: Item = JSON.parse(cart[index]);
      //   item.quantity += this.quantity;
      //   cart[index] = JSON.stringify(item);
      //   localStorage.setItem('cart', JSON.stringify(cart));
      // }
    }
    this.loadCart();
  } else {
    this.loadCart();
  }
});

    }

loadCart(): void {
      this.total = 0;
      this.items = [];
      const cart = JSON.parse(localStorage.getItem('cart'));
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < cart.length; i++) {
        const item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += item.product.price * item.quantity;
      }
    }

remove(id: string): void {
      const cart: any = JSON.parse(localStorage.getItem('cart'));
      const index = -1;
      for (let i = 0; i < cart.length; i++) {
        const item: Item = JSON.parse(cart[i]);
        // tslint:disable-next-line: triple-equals
        if (item.product.id == id) {
          cart.splice(i, 1);
          break;
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.loadCart();
    }


  }
