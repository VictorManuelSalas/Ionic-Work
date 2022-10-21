import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitiesPageRoutingModule } from './cities-routing.module';

import { CitiesPage } from './cities.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    CitiesPageRoutingModule
  ],
  declarations: [CitiesPage]
})
export class CitiesPageModule {}
