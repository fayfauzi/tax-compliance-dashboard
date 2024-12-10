import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compliance-checker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './compliance-checker.component.html',
  styleUrl: './compliance-checker.component.css',
})
export class ComplianceCheckerComponent {
  complianceForm: FormGroup;
  showFormValues = false;

  constructor(private fb: FormBuilder) {
    this.complianceForm = this.fb.group({
      income: [
        null,
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      ],
      expenses: [
        null,
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      ],
      taxType: [null, Validators.required],
    });
  }

  formatNumber(event: any) {
    let inputValue = event.target.value;
    // Remove non-numeric characters except for the decimal point
    inputValue = inputValue.replace(/[^0-9.]/g, '');
    // Add comma separator for thousands
    event.target.value = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  checkCompliance() {
    if (this.complianceForm.valid) {
      console.log('Compliance Data:', this.complianceForm.value);
      this.showFormValues = true;
    } else {
      console.error('Form is invalid');
    }
  }

  getFormValueKeys() {
    return Object.keys(this.complianceForm.value);
  }
}
