import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';



@NgModule({
  declarations: [
    ProductComponent,
    RestaurantComponent,
    LoadingRestaurantComponent,
    EmptyScreenComponent 
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductComponent,
    RestaurantComponent,
    LoadingRestaurantComponent,
    EmptyScreenComponent   
  ]
})
export class ComponentsModule { }
