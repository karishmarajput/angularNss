import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './admin/login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  // { path: 'contactus', component: ContactUsComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
 exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
