import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';



@NgModule({
  declarations: [
    ProductComponent,
    RestaurantComponent,
    LoadingRestaurantComponent 
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductComponent,
    RestaurantComponent,
    LoadingRestaurantComponent  
  ]
})
export class ComponentsModule { }
