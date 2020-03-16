import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { OilComponent } from './oil/oil.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BakeryComponent } from './bakery/bakery.component';
import { MiscComponent } from './misc/misc.component';
import { CartComponent } from './cart/cart.component';
import { FinishedComponent } from './finished/finished.component';

const routes: Routes = [
{path : '' , component : MainComponent},
{path : 'items',  component : ItemListComponent},
{path : 'main' , component : MainComponent},
{path : 'fruit', component : FruitComponent},
{path : 'vegetable', component : VegetableComponent },
{path : 'oil', component : OilComponent},
{path : 'snacks' , component : SnacksComponent},
{path : 'bakery' , component : BakeryComponent},
{path : 'misc' , component : MiscComponent},
{path : 'cart /:id /:quantity' , component : CartComponent},
{path : 'cart' , component : CartComponent},
{path : 'finished' , component : FinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
