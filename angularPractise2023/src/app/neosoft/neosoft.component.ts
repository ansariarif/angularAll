import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-neosoft',
  templateUrl: './neosoft.component.html',
  styleUrls: ['./neosoft.component.css']
})
export class NeosoftComponent implements OnInit {

  title = 'directives';
  age=0;
  choice = 0;

  numArray = [23,34,45,67,89,43,76];

  addelement(ele:string):void{
    this.numArray.push((parseInt(ele)));
  }

  removeElement():number | undefined{
    return this.numArray.pop();
  }


  developerCounter:number=0;
  constructor(private mymath: MathService) { }

  increment2(){
    this.mymath.incrementCounter();
    this.developerCounter=this.mymath.getCounter();
  }

  ngOnInit(): void {
  }




}
