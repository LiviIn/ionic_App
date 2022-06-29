import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ProductComponent,
    RestaurantComponent 
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductComponent,
    RestaurantComponent 
  ]
})
export class ComponentsModule { }
