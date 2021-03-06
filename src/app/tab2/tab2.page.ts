import { Component } from '@angular/core';
import { Tareas } from '../models/tareas';
import { TareasService } from '../services/tareas.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tarea : Tareas []=[];
  active = false;

  constructor(private tareasService: TareasService,private router : Router) {
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
