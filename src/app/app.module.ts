import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { HeaderComponent } from './header/header.component';
import { DfMessengerComponent } from './df-messenger/df-messenger.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    AddUserComponent,
    UpdateDeleteComponent,
    LoginComponent,
    ResetComponent,
    PassChangeComponent,
    HeaderComponent,
    DfMessengerComponent,
    EmailVerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
