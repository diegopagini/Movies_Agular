import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiRequest = request.clone({
      url: `${environment.baseUrl}${request.url}`,
      setParams: {
        api_key: environment.apiKey,
        language: 'es-ES',
      },
    });

    return next.handle(apiRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(error);
        return throwError(error);
      })
    );
  }
}
