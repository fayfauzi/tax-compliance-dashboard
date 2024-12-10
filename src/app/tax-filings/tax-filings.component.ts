import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tax-filings',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './tax-filings.component.html',
  styleUrl: './tax-filings.component.css',
})
export class TaxFilingsComponent {
  dataSource = [
    { type: 'VAT', deadline: '20/12/2024', status: 'Pending' },
    { type: 'Corporate Tax', deadline: '15/01/2025', status: 'Completed' },
    { type: 'Income Tax', deadline: '30/06/2025', status: 'Pending' },
    { type: 'VAT', deadline: '10/02/2025', status: 'Completed' },
    { type: 'Corporate Tax', deadline: '05/03/2025', status: 'Pending' },
    { type: 'VAT', deadline: '18/04/2025', status: 'Pending' },
    { type: 'Income Tax', deadline: '25/07/2025', status: 'Completed' },
    { type: 'Corporate Tax', deadline: '12/09/2025', status: 'Pending' },
    { type: 'VAT', deadline: '01/12/2025', status: 'Completed' },
    { type: 'Income Tax', deadline: '10/02/2026', status: 'Pending' },
    { type: 'Corporate Tax', deadline: '15/06/2026', status: 'Pending' },
    { type: 'VAT', deadline: '03/08/2026', status: 'Completed' },
    { type: 'Income Tax', deadline: '22/09/2026', status: 'Pending' },
    { type: 'Corporate Tax', deadline: '19/11/2026', status: 'Completed' },
  ];

  displayedColumns: string[] = ['type', 'deadline', 'status'];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'failed':
        return 'status-failed';
      default:
        return '';
    }
  }
}
