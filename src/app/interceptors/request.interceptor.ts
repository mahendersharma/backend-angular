import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../components/auth/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private _authService : AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let request :any;
    let currentUser :any;
    let isLoggedId: any;

    this._authService.isloggedIn.subscribe(res=>{
      isLoggedId = res;
      if(isLoggedId){
        this._authService.CurrentUser.subscribe(res=>{
          currentUser= res;
          request = req.clone({
            setHeaders:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${currentUser.token}`
            }
          })
        });
      }else{
        request = req.clone({
          setHeaders:{
            'Content-Type': 'application/json'
          }
        })
      }
    })
    return next.handle(request);


  }
}
