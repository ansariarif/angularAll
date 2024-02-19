import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { JavaComponent } from './java/java.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'login', component:NeosoftComponent},
  {path:'java', component:JavaComponent},
  // {path:'about', component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
