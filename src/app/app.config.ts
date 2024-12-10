import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComplianceCheckerComponent } from './compliance-checker/compliance-checker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaxFilingsComponent } from './tax-filings/tax-filings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'compliance-checker', component: ComplianceCheckerComponent },
  { path: 'tax-filings', component: TaxFilingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // optional default route
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
