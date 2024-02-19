import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-getemail',
  templateUrl: './getemail.component.html',
  styleUrls: ['./getemail.component.css']
})
export class GetemailComponent implements OnInit {
 
  email:any;
  constructor(private  http:HttpClient) { }

  ngOnInit(): void {
    //this.emaitltoOtp(this.email);
  }

  emaitltoOtp(email:any){
    this.http.get("http://localhost:8080/send-otp",email,{responseType:'text' as 'json'})
                .subscribe((data:any) => this.email=data);

  }

}
