import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    //Esta es para poder usar las etiquetas de ionic en los componentes
    IonicModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
