import {AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import * as firebase from 'firebase';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartComponent } from '../../../shopping/components/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    
     
  }
  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);  
   this.cart$ = await this.shoppingCartService.getCart()
     
  } 

  logout(){
   this.auth.logout();
  }

}
