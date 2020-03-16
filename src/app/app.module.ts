import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MainComponent } from './main/main.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { OilComponent } from './oil/oil.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BakeryComponent } from './bakery/bakery.component';
import { MiscComponent } from './misc/misc.component';
import { MainserviceService } from './mainservice.service';
import { CartComponent } from './cart/cart.component';
import { FinishedComponent } from './finished/finished.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MainComponent,
    FruitComponent,
    VegetableComponent,
    OilComponent,
    SnacksComponent,
    BakeryComponent,
    MiscComponent,
    CartComponent,
    FinishedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ MainserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
