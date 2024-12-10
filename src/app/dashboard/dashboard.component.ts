import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartType,
  ChartOptions,
  ChartData,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarController,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public barChartType: ChartType = 'bar'; // Define chart type (e.g., 'bar', 'line', etc.)

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 15,
      },
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter'],
    datasets: [
      {
        data: [4, 7, 10, 12],
        label: '2024',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
      {
        data: [5, 8, 11, 13],
        label: '2025',
        backgroundColor: 'rgba(40, 167, 69, 0.5)',
      },
    ],
  };
}
