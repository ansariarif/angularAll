import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  student:any={name:"",section:""};
  message:any;
  name:string="";
  section:string="";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }

  addStudent(student:any){
    this.http.post("http://localhost:8080//api/v1/cas/addStudent",student,{responseType:'text' as 'json'})
                .subscribe((data:any) => this.student=data);

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }

}

