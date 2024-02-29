import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

export const isAuthenticated = () :CanActivateFn => {
  return () : boolean | UrlTree => {
    const router :Router = inject(Router);

    // Temporary
    const isUserLoggedIn = true;

    if(isUserLoggedIn) {
      return true;
    }

    return router.parseUrl('auth/login');
  }

}