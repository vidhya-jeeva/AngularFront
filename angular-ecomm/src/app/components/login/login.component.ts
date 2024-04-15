import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import myAppConfig from '../../config/my-app-config';
import { OKTA_AUTH } from '@okta/okta-angular';
import {OktaAuth} from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  oktaSignin:any;
  router: any;

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { 

    this.oktaSignin = new OktaSignIn({
      logo: 'assets/images/logo.png',
      baseUrl: myAppConfig.odic.issuer.split('/oauth2')[0],
      clientId: myAppConfig.odic.clientId,
      redirectUri: myAppConfig.odic.redirectUri,
      authParams:
      {
        pkce:true,
        issuer: myAppConfig.odic.issuer,
        scopes: myAppConfig.odic.scopes

      }
    });
  }
  signInWithOkta() {
    // Perform Okta sign-in
    // Once sign-in is successful, navigate to the main page URL
    this.router.navigate(['/products']);
  }
  ngOnInit(): void {
   this.oktaSignin.remove();
   this.oktaSignin.renderEl({
    el: '#okta-sign-in-widget'},
   (response:any)=>
  {
    if(response.status === 'SUCCESS')
    {
      this.oktaAuth.signInWithRedirect();
    
    }
  },
  (error:any)=>
  { throw error;
  }
   )
   

  }

  // ngOnDestroy(): void {
  //   this.oktaSignin.remove();
  // }

}
