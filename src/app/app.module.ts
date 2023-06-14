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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddVolunteerComponent } from './admin/add-volunteer/add-volunteer.component';
import { DisplayVolunteerComponent } from './admin/display-volunteer/display-volunteer.component';
import { DisplayEventComponent } from './admin/display-event/display-event.component';
import { FooterComponent } from './footer/footer.component';
import { HttpAdminService } from 'src/services/http-admin.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminDashboard', component: DashboardComponent, },
  { path: 'adminDashboard/addEvent', component: AddEventComponent },
  { path: 'adminDashboard/addVolunteer', component: AddVolunteerComponent },
  { path: 'adminDashboard/displayVolunteer', component: DisplayVolunteerComponent },
  { path: 'adminDashboard/displayEvents', component: DisplayEventComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AddEventComponent,
    AddVolunteerComponent,
    DisplayVolunteerComponent,
    DisplayEventComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
