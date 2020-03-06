import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ServicioPage } from './servicio.page';

describe('ServicioPage', () => {
  let component: ServicioPage;
  let fixture: ComponentFixture<ServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
