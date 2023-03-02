import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let headerReq=req.clone({
        setHeaders:{
            'name':'abc'
        }
      });
      return next.handle(headerReq);
    }
}
