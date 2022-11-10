import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private helper:ServicesService,private router:Router){}
  canActivate(){


    if(this.helper.loggin())
    {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  
  }
  }
  

