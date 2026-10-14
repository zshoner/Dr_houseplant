import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FotoPlanta } from './foto-planta';

describe('FotoPlanta', () => {
  let component: FotoPlanta;
  let fixture: ComponentFixture<FotoPlanta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoPlanta],
    }).compileComponents();

    fixture = TestBed.createComponent(FotoPlanta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
