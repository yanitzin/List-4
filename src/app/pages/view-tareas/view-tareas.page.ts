import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-tareas',
  templateUrl: './view-tareas.page.html',
  styleUrls: ['./view-tareas.page.scss'],
})
export class ViewTareasPage implements OnInit {

 tarea: any;

  constructor(private actroute: ActivatedRoute, private router: Router) { 
    this.actroute.queryParams.subscribe(
      params => {
        this.tarea = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {
  }

}
