import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
const routes: Routes = [
  {path:'',redirectTo:'userList',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'email',component:EmailVerificationComponent},
  {path:'reset',component:ResetComponent},
  {path:'change',component:PassChangeComponent},
  {path:'userList',component: HomeComponent},
  {path:'userAdd',component:AddUserComponent},
  {path: 'update',component:UpdateDeleteComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
  AddUserComponent,
  UpdateDeleteComponent];
