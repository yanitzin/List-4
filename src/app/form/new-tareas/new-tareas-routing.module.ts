import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTareasPage } from './new-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: NewTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTareasPageRoutingModule {}
