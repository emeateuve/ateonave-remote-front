import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/env';
import { StatusService } from '@services/status';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private statusService: StatusService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        Authorization: environment.apiToken,
        Launcher: environment.apiLauncher,
      },
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('No autorizado o token inválido');
        }
        if (error.status === 404) {
          console.error('No se ha encontrado la petición');
        }
        this.statusService.setStatus('offline');
        return throwError(() => error);
      })
    );
  }
}
