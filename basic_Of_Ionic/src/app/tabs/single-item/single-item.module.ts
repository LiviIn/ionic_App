import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleItemPageRoutingModule } from './single-item-routing.module';

import { SingleItemPage } from './single-item.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleItemPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SingleItemPage]
})
export class SingleItemPageModule {}
