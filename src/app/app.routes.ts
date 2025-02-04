import { Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AskingPageComponent} from './asking-page/asking-page.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'yes', component: AskingPageComponent}
];
