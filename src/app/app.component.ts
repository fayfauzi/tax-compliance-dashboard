import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComplianceCheckerComponent } from './compliance-checker/compliance-checker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaxFilingsComponent } from './tax-filings/tax-filings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  title = 'tax-compliance-dashboard';

  loadComponent(componentName: string) {
    this.container.clear(); // Clear the current component
    if (componentName === 'dashboard') {
      this.container.createComponent(DashboardComponent);
    } else if (componentName === 'complianceChecker') {
      this.container.createComponent(ComplianceCheckerComponent);
    } else if (componentName === 'taxFilings') {
      this.container.createComponent(TaxFilingsComponent);
    }
  }
}
