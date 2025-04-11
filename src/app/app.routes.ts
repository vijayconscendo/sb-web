import { Routes } from '@angular/router';
import { UnauthLandingHomeComponent } from '../pages/unauth-landing-home/unauth-landing-home.component';
import { UnauthSolutionsComponent } from '../pages/unauth-solutions/unauth-solutions.component';
import { HistoryAndStatementsComponent } from '../pages/history-and-statements/history-and-statements.component';
import { CarouselTestComponent } from '../pages/carousel-test/carousel-test.component';

export const routes: Routes = [
  { path: '', component: UnauthLandingHomeComponent }, // Unauthenticated landing page
  { path: 'our-solutions', component: UnauthSolutionsComponent }, // Unauthenticated landing page
  { path: 'dashboard', component: HistoryAndStatementsComponent }, // Unauthenticated landing page
  { path: 'carousel-test', component: CarouselTestComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes
];
