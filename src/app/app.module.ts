import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './pages/compontents/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {MaterialModule} from './material.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { DisplayVolunteerComponent } from './admin/display-volunteer/display-volunteer.component';
import { DisplayEventComponent } from './admin/display-event/display-event.component';
import { FooterComponent } from './pages/compontents/footer/footer.component';
import { HttpAdminService } from 'src/services/http-admin.service';
import { EventComponent } from './pages/home/event/event.component';
import { PerformerComponent } from './pages/performer/performer.component';
import { PerformComponent } from './pages/perform/perform.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { AuthInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';
import { LoaderComponent } from './pages/compontents/loader/loader.component';
import { LoaderInterceptorInterceptor } from './interceptor/loader-interceptor.interceptor';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'events', component: HomeComponent },
  { path: 'events/:eventId', component: EventComponent },
  { path: 'performer', component: PerformComponent },
  { path: 'performer/:performerId', component: PerformerComponent },
 ];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    DisplayVolunteerComponent,
    DisplayEventComponent,
    FooterComponent,
    EventComponent,
    PerformerComponent,
    PerformComponent,
    ReversePipe,
    LoaderComponent,
  
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorInterceptor,
      multi: true,
   },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
