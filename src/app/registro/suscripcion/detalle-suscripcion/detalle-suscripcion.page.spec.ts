import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleSuscripcionPage } from './detalle-suscripcion.page';

describe('DetalleSuscripcionPage', () => {
  let component: DetalleSuscripcionPage;
  let fixture: ComponentFixture<DetalleSuscripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSuscripcionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleSuscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
