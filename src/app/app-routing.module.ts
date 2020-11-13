import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
const routes: Routes = [
  {path:'userList',component: HomeComponent},
  {path:'userAdd',component:AddUserComponent},
  {path: 'update',component:UpdateDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
  AddUserComponent,
  UpdateDeleteComponent];
