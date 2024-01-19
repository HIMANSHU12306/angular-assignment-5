import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core'; // Import Injectable decorator
import { UserservicesService } from './userservices.service';
@Injectable({
  providedIn: 'root',
})
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserservicesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page first log in");
      this.router.navigate(['/genericuserform']); // Redirect to the login page or another appropriate page
      return false;
      
    }
  }
}

