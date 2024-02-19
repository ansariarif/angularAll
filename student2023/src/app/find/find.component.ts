import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Page } from 'ngx-pagination';
import { Page } from '../page.interface';
import { Observable } from 'rxjs';
import { student } from '../student';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  subject:any;

  students: student[] | undefined;
  currentPage = 0;
  pageSize = 4;
  totalElements  =0;
  // constructor(private http:HttpClient) { }

  constructor(private employeeService: StudentService) { }

  ngOnInit(): void {

    // this.getAllSubject();
    this.loadEmployees();
  }

//   getAllSubject(){
    
//     this.http.get("http://localhost:8080/api/v1/cas/getAllStudent").subscribe((data)=>this.subject=data);
//  }

// getAllStudent(page: number): Observable<Page<student>>
//   {
//     const params = new HttpParams()
//     .set('pageNo', page.toString());

//     return this.http.get<Page<student>>(`${this.baseUrl}/getAllEmployee`, { params });

//   }


loadEmployees(): void {
  this.employeeService.getAllStudent(this.currentPage, this.pageSize)
    .subscribe((page: Page<student>) => {
      console.log(this.loadEmployees)
      this.students = page.content;
      this.totalElements = page.totalElements;
    });
}

onPageChange(page: number): void {
  this.currentPage = page;
  this.loadEmployees();
}

getPageIndexes(): number[] {
  const totalPages = Math.ceil(this.totalElements / this.pageSize);
  return Array.from({ length: totalPages }, (_, index) => index);
}

onPageSizeChange(newPageSize: number): void {
  this.currentPage = 0; // Reset to the first page
  this.loadEmployees(); // Reload employees with new page size
  this.pageSize = newPageSize; // Update pageSize

}


}
