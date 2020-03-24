import { Component } from '@angular/core';
import { Tareas } from '../models/tareas';
import { TareasService } from '../services/tareas.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tarea: Tareas[] = [];

  constructor(private  tareasService : TareasService, private router : Router) {
    this.tarea = this.tareasService.getTareas();
  }
  view(tarea : any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tarea)
      }
    };

    this.router.navigate(['/view-tareas'], extras);
  }

  changeStatus(pos: number): void{
    this.tareasService.changeStatus(pos);
  }

}
