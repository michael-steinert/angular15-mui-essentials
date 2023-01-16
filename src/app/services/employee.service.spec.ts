import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('Employee Service', () => {
  let employeeService: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });
});
