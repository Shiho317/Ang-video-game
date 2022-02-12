import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'x-rapidapi-key': 'e161efc34cmsh4d9479a6fda8fddp188b38jsnc67ef812655f',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        
      });
      return next.handle(req)
  }
}