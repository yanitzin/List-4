import { Component } from '@angular/core';
import { Tareas } from '../models/tareas';
import { TareasService } from '../services/tareas.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tarea : Tareas []=[];

  constructor(private tareasService: TareasService, private router : Router) {
  this.tarea = this.tareasService.getTareas();
  }
  view(tareas : any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tareas)
      }
    };

    this.router.navigate(['/view-tareas'], extras);
  }


}
