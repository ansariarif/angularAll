import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FindComponent } from './find/find.component';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
  { path:"add", component:AddComponent },
  { path:"get", component:FindComponent}
  // { path:"pagination", component:PaginationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
