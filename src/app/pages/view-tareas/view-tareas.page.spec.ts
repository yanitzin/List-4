import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTareasPage } from './view-tareas.page';

describe('ViewTareasPage', () => {
  let component: ViewTareasPage;
  let fixture: ComponentFixture<ViewTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
