import { Component, OnInit } from '@angular/core';

import { Tareas } from '../../models/tareas';
import { TareasService } from '../../services/tareas.service';

import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-tareas',
  templateUrl: './new-tareas.page.html',
  styleUrls: ['./new-tareas.page.scss'],
})
export class NewTareasPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private service: TareasService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  saveTareas() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newTareas({
        description: this.myForm.get('description').value,
        data: this.myForm.get('data').value,
        time: this.myForm.get('time').value,
        place: this.myForm.get('place').value,
        active: false
      });
    }
  }
  initializeForm(): void {
    this.myForm = this.fb.group({
      description: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      data: ['', Validators.compose([Validators.required])],
      time: ['', Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(4)])],
      place: ['', Validators.compose([Validators.required])]
    });
  } 
}