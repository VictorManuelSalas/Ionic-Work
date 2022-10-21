import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomersPage } from './customers.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    //Este es el compoenente el cual se maneja como modulo 
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
