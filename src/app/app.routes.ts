import { Routes } from '@angular/router';
import { FotoPlantaComponent } from './components/foto-planta/foto-planta';

export const routes: Routes = [
  { path: '', component: FotoPlantaComponent },
  { path: 'foto', component: FotoPlantaComponent }
];
