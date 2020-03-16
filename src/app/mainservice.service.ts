import { Injectable } from '@angular/core';
import { Fruits } from './fruits';


@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  private fruits: Fruits[];
   item ;
  constructor() {

  this.fruits = [ {id: '1', name: 'Apple', price: 120 ,  } ,

  {id: '2', name: 'Banana', price: 20 ,   },

  {id: '3', name: 'Orange', price: 40 ,  },
  {id: '4', name: 'Mango', price: 65 ,  },
  {id: '5', name: 'Grapes', price: 30 ,  },
  {id: '6', name: 'Strawberry', price: 20 ,  },
  {id: '7', name: 'WaterMelon', price: 20 ,  },
  {id: '8', name: 'Pinapple', price: 105 ,  },
  {id: '9', name: 'Pomegrante', price: 49 ,  },
  {id: '10', name: 'Guava', price: 80 ,  },

  {id: '11', name: 'Tomato', price: 30 ,  } ,

  {id: '12', name: 'Potato', price: 36 ,   },

  {id: '13', name: 'Onion', price: 23 ,  },
  {id: '14', name: 'Cauliflower', price: 78 ,  },
  {id: '15', name: 'Ladyfinger', price: 50 ,  },
  {id: '16', name: 'Brinjal', price: 30 ,  },
  {id: '17', name: 'Cabbage', price: 22 ,  },
  {id: '18', name: 'Cucumber', price: 15 ,  },
  {id: '19', name: 'BeetRoot', price: 40 ,  },
  {id: '20', name: 'Ginger', price: 55 ,  },

  {id: '21', name: 'Rice', price: 50 ,  } ,

  {id: '22', name: 'Wheat', price: 30 ,   },

  {id: '23', name: 'Sugar', price: 48 ,  },
  {id: '24', name: 'Salt', price: 20 ,  },
  {id: '25', name: 'Dal', price: 80 ,  },
  {id: '26', name: 'Cooking oils', price: 140 ,  },
  {id: '27', name: 'Whole spices for food', price: 300 ,  },
  {id: '28', name: 'Dry Fruits', price: 370 ,  },
  {id: '29', name: 'Poha', price: 30 ,  },
  {id: '30', name: 'Sabudana', price: 55 ,  },

  {id: '31', name: 'Noodles', price: 30 ,  } ,

  {id: '32', name: 'Biscuit and Cookies', price: 30 ,   },

  {id: '33', name: 'Oats', price: 100,  },
  {id: '34', name: 'Chips and Namkeens', price: 20 ,  },
  {id: '35', name: 'Ketchup', price: 30 ,  },
  {id: '36', name: 'Cadbury and Chocolates', price: 65 ,  },
  {id: '37', name: 'Pickles', price: 120 ,  },
  {id: '38', name: 'Coffee', price: 150,  },
  {id: '39', name: 'Tea', price: 110 ,  },
  {id: '40', name: 'Cold Drinks', price: 55 ,  },

  {id: '41', name: 'Breads', price: 15 ,  } ,

  {id: '42', name: 'Milk', price: 20 ,   },

  {id: '43', name: 'Butter', price: 43 ,  },
  {id: '44', name: 'Cheese', price: 69 ,  },
  {id: '45', name: 'Paneer', price: 70 ,  },
  {id: '46', name: 'Buns', price: 10 ,  },
  {id: '47', name: 'Curds', price: 15 ,  },
  {id: '48', name: 'Cakes', price: 600 ,  },

  {id: '49', name: 'Bath Room Cleaner', price: 100 ,  },
  {id: '50', name: 'Detergent Liquid', price: 185 ,  },
  {id: '51', name: 'Dish Washer', price: 30 ,   },

  {id: '52', name: 'Cold Creams', price: 140 ,  },
  {id: '53', name: 'Bathing Soap', price: 40 ,  },
  {id: '54', name: 'Hair Oil', price: 220 ,  },
  {id: '55', name: 'Shampoo', price: 145 ,  },
  {id: '56', name: 'Home Cleaner', price: 300 ,  },


   ];
  }

  findAll(): Fruits[] {
    return this.fruits;

  }

  find(id: string): Fruits {
      return this.fruits[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (let i = 0; i < this.fruits.length; i++) {
          // tslint:disable-next-line: triple-equals
          if (this.fruits[i].id == id) {
              return i;
          }
      }
      return -1;
  }



}
