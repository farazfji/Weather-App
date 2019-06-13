import { Router } from '@angular/router';
// import { LocalStorage } from './../services/local-storage.service';
// import { httpResponseCodes } from './../../shared/shared.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
// import { SnackBarService } from '../services/snack-bar.service';
// import { networkError, genericApiError } from '../../shared/shared.constants';

@Injectable()
export class HttpInterceptorService {
  private baseUrl = environment.weatherApiUrl;

  constructor(
    private router: Router
  ) { }

  intercept<T>(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params: HttpParams = req.params;
    const headers: HttpHeaders = req.headers;
    return this.sendRequest<T>(next, req, headers, params);
  }

  sendRequest<T>(next: HttpHandler, req: HttpRequest<any>, headers: HttpHeaders, params: HttpParams): Observable<HttpEvent<any>> {
    const url = environment.weatherApiUrl;

    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Host': environment.weatherApiUrlHost,
        'X-RapidAPI-Key': environment.weatherApiUrlKey
      },
      responseType: 'text' as 'json',
      url,
      params
    });

    return next.handle(req)
    .pipe(tap(
      (event: HttpEvent<any>) => { },
      (err: HttpErrorResponse) => {
        console.log(err);
        if(err.status === 404){
          // alert('Something went wrong');
        }
      }
    ));
  }
}
