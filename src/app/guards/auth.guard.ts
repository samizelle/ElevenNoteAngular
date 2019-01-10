import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    path;
    route;
    constructor(private router: Router) {}

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if (!localStorage.getItem('id_token')) {
                this.router.navigate(['/login']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        });
    }
}
