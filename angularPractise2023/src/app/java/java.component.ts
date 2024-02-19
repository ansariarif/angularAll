import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit , OnChanges{

 @Input() myValue: string = "hooks";

  constructor() {
    console.log("constructor call here...");
   }

 ngOnChanges(changes: SimpleChanges): void {
  // console.log("ngOnChanges call here...");
  console.log(changes)

 }

  ngOnInit(): void {
    console.log("ngOnInit call here...");

  }

}
