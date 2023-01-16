import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormComponent } from './employee-form.component';

describe('Employee Form Component', () => {
  let employeeForm: EmployeeFormComponent;
  let employeeFormFixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
    }).compileComponents();

    employeeFormFixture = TestBed.createComponent(EmployeeFormComponent);
    employeeForm = employeeFormFixture.componentInstance;
    employeeFormFixture.detectChanges();
  });

  it('should create', () => {
    expect(employeeForm).toBeTruthy();
  });
});
