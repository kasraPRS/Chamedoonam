import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

const TOKEN_LOCAL_STORAGE_KEY = 'Token';
@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);

        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + `${token}`
                }
            });
        }
        const appVersion = request.headers.get('Api-Version');
        if (!appVersion) {
            request = request.clone({
                setHeaders: {
                    'Api-Version': `3`
                }
            })

        }

        const accept = request.headers.get('Accept');
        if (!accept) {
            request = request.clone({
                setHeaders: {
                    Accept: `application/json`
                }
            })
        }
        const contentType = request.headers.get('Content-Type');
        if (!contentType) {
            request = request.clone({
                setHeaders: {
                    contentType: `application/json`
                }
            });
        }

        return next.handle(request);
    }
}