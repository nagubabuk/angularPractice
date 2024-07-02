import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role']; //admin
    const userRole = this.authService.getRole(); //user or admin

    if (userRole === expectedRole) {
      return true;
    } else {
      alert("not authorised")
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}
