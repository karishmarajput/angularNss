import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpAdminService } from 'src/services/http-admin.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: HttpAdminService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const clientId = environment.CLIENT_ID;
    const authToken = localStorage.getItem('authToken') || '';
    let modifiedReq = req.clone({ setParams: { client_id: clientId } });
    modifiedReq = modifiedReq.clone({ headers: req.headers.set('Authorization', `${authToken}`), });
    return next.handle(modifiedReq);
  }
}
