import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-tareas',
  templateUrl: './view-tareas.page.html',
  styleUrls: ['./view-tareas.page.scss'],
})
export class ViewTareasPage implements OnInit {

 tareas: any;

  constructor(private actroute: ActivatedRoute, private router: Router) { 
    this.actroute.queryParams.subscribe(
      params => {
        this.tareas = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {
  }

}
