import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpAdminService {

  constructor(private http: HttpClient) {}
  getEvents(): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + 'events')
  }
  getVolunteers(): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + 'volunteers')
  }
  addEvent(params:any, authToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', authToken); 
    return this.http.post(environment.API_ENDPOINT + 'admin/addEvent', params,{headers})
  }
  addVolunteer(params: any, authToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', authToken); 
    return this.http.post(environment.API_ENDPOINT + 'admin/addVolunteer', params, { headers });
  }
  adminLogin(params:any): Observable<any> {
    return this.http.post(environment.API_ENDPOINT + 'admin/login', params)
  }
}
