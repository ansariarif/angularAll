import { Component, OnInit } from '@angular/core';
// import { StudentService } from '../student.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
//  title = 'pagination';
//  POSTS: any = { content: [] };
//  pageNo: number= 0;
//  pageSize: number = 4;
//  page: number = 1;
//  count: number = 0;
//  TableSize: number = 4;
//  TableSizes : any = [5, 10, 15, 20];
  constructor() { }

  ngOnInit(): void {
   // this.POSTS = { content: [] };
   // this.postList();
  }

  // postList():void{
  //   this.studentService.getAllList(this.pageNo, this.pageSize).subscribe((response) =>{
  //     this.POSTS = response;
  //     console.log(this.POSTS);
  //   })
  // }

  // onTableDataChange(event: any): void{
  //   this.pageNo = event;
  //   this.postList();
  // }

  // onTableSizeChange(event: any): void{
  //   this.pageSize = event.target.value;
  //   this.pageNo=1;
  //   this.postList();
  // }

}
