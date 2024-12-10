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
    CommonModule
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
    inputValue = inputValue.replace(/[^0-9.]/g, '');
    event.target.value = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  checkCompliance() {
    if (this.complianceForm.valid) {
      this.showFormValues = true;
    } else {
      console.log('error')
    }
  }

  getFormValueKeys() {
    return Object.keys(this.complianceForm.value);
  }
}
