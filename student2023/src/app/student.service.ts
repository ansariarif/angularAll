import { Injectable } from '@angular/core';
// import { Page } from 'ngx-pagination';
import { Page } from './page.interface';

import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from './student';
const baseUrl1 = "http://localhost:8080/api/v1/cas/getAllStudent";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = "http://localhost:8080/api/v1/cas";
 
  constructor(private http: HttpClient) { }

  getAllStudent(page: number, size: number): Observable<Page<student>>
  {
    const params = new HttpParams()
    .set('pageNo', page.toString())
    .set('pageSize', size.toString());


    return this.http.get<Page<student>>(`${this.baseUrl}/getAllStudent`, { params });

  }

  getAllList(page: number, size: number): Observable<any>{
    const params = new HttpParams()
    .set('pageNo', page.toString())
    .set('pageSize', size.toString())
     return this.http.get(baseUrl1, { params });
  }
}
