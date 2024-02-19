import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import {FormsModule} from '@angular/forms';
import { JavaComponent } from './java/java.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    NeosoftComponent,
    JavaComponent,
    AboutComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
