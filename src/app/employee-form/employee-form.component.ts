import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  education: string[] = ['Student', 'Graduate'];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService: CoreService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.employeeForm = this.formBuilder.group({
      firstName: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      lastName: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
    this.dateAdapter.setLocale('de');
  }

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  onFormSubmit() {
    //  Form Validation
    if (this.employeeForm.valid) {
      if (this.data) {
        this.employeeService
          .updateEmployee(this.data.id, this.employeeForm.value)
          .subscribe({
            next: () => {
              this.coreService.openSnackBar('Employee Details updated');
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.error(err);
            },
          });
      } else {
        this.employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: () => {
            this.coreService.openSnackBar('Employee successfully added');
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          },
        });
      }
    }
  }
}
