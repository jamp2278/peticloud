import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuscripcionPage } from './suscripcion.page';

describe('SuscripcionPage', () => {
  let component: SuscripcionPage;
  let fixture: ComponentFixture<SuscripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscripcionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
