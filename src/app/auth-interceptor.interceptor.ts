import { Injectable } from '@angular/core';
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
    const clientId = "MzQyODQ4MzZ8MTY4Nzc2NjMwOS44OTM0NQ";
    const modifiedReq = req.clone({ setParams: { client_id: clientId } });
    return next.handle(modifiedReq);
  }
}
