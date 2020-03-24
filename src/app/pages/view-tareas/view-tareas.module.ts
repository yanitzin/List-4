import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTareasPageRoutingModule } from './view-tareas-routing.module';

import { ViewTareasPage } from './view-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTareasPageRoutingModule
  ],
  declarations: [ViewTareasPage]
})
export class ViewTareasPageModule {}
