import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoaderService } from 'src/app/components/loader/service/loader.service';
import { AuthenticationResponse } from 'src/gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let authenticationResponse : AuthenticationResponse = {};
    if(localStorage.getItem('accessToken')) {
      authenticationResponse = JSON.parse(
        localStorage.getItem('accessToken') as string
      ); 

      const authReq  = req.clone( {
        headers: new HttpHeaders( {
          Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });
      
      console.log('inside interceptor');

      //return next.handle(authReq);
      return this.handleRequest(authReq,next);

    }

    
    //return next.handle(req);
    return this.handleRequest(req,next);
    
   
   
      
  }


  handleRequest(req: HttpRequest<any>,next: HttpHandler):  Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(
        req => {
          if (req instanceof HttpResponse) {
            this.loaderService.hide();
          }
        },
        err => {
          this.loaderService.hide();
        }
      )
    );
   
  }

  
}
