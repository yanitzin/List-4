import { Injectable } from '@angular/core';
import { Tareas } from '../models/tareas';
import { NumericValueAccessor } from '@ionic/angular';

@ Injectable ({
  providedIn : 'root'
})
export class TareasService {

  private tarea: Tareas [] = new Array ();

  constructor() {
    this.tarea.push ({
      description : 'Compras de verduras',
      data: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/malla-bolsas-reciclables-anthropologie-1533547532.jpeg?crop=1xw:1xh;center,top&resize=768:*',
      time: '13:00',
      place: 'waltMart',
      active : true
    });
    this.tarea.push ({
      description : 'Cena con mi mamá',
      data: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-0/p206x206/10653721_755697334476743_7270117306775707619_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=lCbp_OURivAAX8wg2Dg&_nc_ht=scontent.ftpq1-1.fna&_nc_tp=6&oh=d9f40af5362a9bc40e43ab511622a3aa&oe=5E9C8F39',
      time: '19:00',
      place: 'Vips',
      active : false
    });
    this.tarea .push ({
      description : 'Lavar los platos',
      data: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2011%2F02%2F19044711%2Ftvs3360_xl.jpg&q=85',
      time: '20:00',
      place: 'Casa',
      active : true
    });
  }

  changeStatus (position : number) {
    this.tarea [position ].active = !this.tarea [position ].active ;
  }

  getTareas (): Tareas [] {
    return this.tarea;
  }
  newTareas(tareas: Tareas): void {
    this.tarea.push(tareas);
  }
}
