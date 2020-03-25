import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'view-tareas',
    loadChildren: () => import('./pages/view-tareas/view-tareas.module').then( m => m.ViewTareasPageModule)
  },
  {
    path: 'new-tareas',
    loadChildren: () => import('./form/new-tareas/new-tareas.module').then( m => m.NewTareasPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
