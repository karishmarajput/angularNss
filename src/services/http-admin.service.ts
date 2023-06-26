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
    return this.http.get(environment.API_ENDPOINT + 'events?'+'per_page=15&sort=score.desc&page=3')
  }
  getEvent(id:any): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + 'events/'+id)
  }
  getPerform(): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + 'performers')
  }
  getPerformer(id:any): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + 'performers/'+id)
  }
  getVolunteers(): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + 'volunteers')
  }
  getVenues(): Observable<any>{
    return this.http.get(environment.API_ENDPOINT + 'venues')
  }
  getEventWithVenue(venue:any):Observable<any>{
    return this.http.get(environment.API_ENDPOINT + 'events?venue.state='+venue)
  }
  addEvent(params:any, authToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', authToken); 
    return this.http.post(environment.API_ENDPOINT + 'admin/addEvent', params,{headers})
  }
  addVolunteer(params: any, authToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', authToken); 
    return this.http.post(environment.API_ENDPOINT + 'admin/addVolunteer', params, { headers });
  }

}
