import { HttpErrorResponse, HttpResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public authService: AuthServiceService,
      private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has("Authorization") && !request.url.includes("googleapis")) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.getToken()}`
                }
            });
        }

        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => event instanceof HttpResponse,
            (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.authService.clearUserInfo();
                    
                    const lienaccueil = 'login';
                    this.router.navigateByUrl(lienaccueil);
                } else if (error.status === 500) {
                }
            }
        ));
    }
}