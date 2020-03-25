import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTareasPage } from './new-tareas.page';

describe('NewTareasPage', () => {
  let component: NewTareasPage;
  let fixture: ComponentFixture<NewTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
