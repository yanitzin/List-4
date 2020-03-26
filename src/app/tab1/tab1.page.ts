import { Component } from '@angular/core';
import { Tareas } from '../models/tareas';
import { TareasService } from '../services/tareas.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tarea: Tareas[] = [];
  active = false;
  search: string;

  constructor(private  tareasService : TareasService, private router : Router, 
    private alert: AlertController) {
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

  operation(pos: number, ev: {detail: { side }}) {
    const side = ev.detail.side;
    if (side === 'start') {
      this.tareasService.changeStatus(pos);
    } else {
      this.showAlert(pos);
    }
  }

  async showAlert(pos: number)
   {
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar',
      buttons: [{
        text:'No',
        handler: () =>{}
      }, {
        text: 'Si',
        handler: () =>{
          this.tareasService.deleteStudent(pos);
        }
      }]
    });
    await al.present();
  }


  newTareas(): void{
    this.router.navigate(['/new-tareas']);
  }

  clearSearch(): void{
    this.tarea = this.tareasService.getTareas();
  }

  filter(): void {
    this.clearSearch();

    if(this.search && this.search.trim()){
      this.tarea = this.tarea.filter( (tareas) =>{
        return (tareas.description.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase())>-1);
      });
    }
  }
}

