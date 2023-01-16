import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular15 MUI Essentials';
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private matDialog: MatDialog,
    private employeeService: EmployeeService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  handleAddEmployee() {
    const dialogRef = this.matDialog.open(EmployeeFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.coreService.openSnackBar('Employee deleted', 'done');
        this.getEmployeeList();
      },
    });
  }

  openEmployeeForm(data: any) {
    const dialogRef = this.matDialog.open(EmployeeFormComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.getEmployeeList();
        }
      },
    });
  }
}
