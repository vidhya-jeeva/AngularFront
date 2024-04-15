
import { Injector, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// import { BrowserModule} from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { RouterModule, RouterOutlet } from '@angular/router';

import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
// import{ Routes,RouterModule,RouterOutlet } from '@angular/router';
import { Router, RouterModule,RouterOutlet,Routes } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
// import { OktaAuthModule,OktaCallbackComponent,OKTA_CONFIG } from '@okta/okta-angular';
// import { OktaAuthModule,OktaCallbackComponent,OKTA_CONFIG } from '@okta/okta-angular';
// import { Routes } from '@angular/router';
// import { ReactiveForms } from '@angular/forms';
 import{OktaAuth} from '@okta/okta-auth-js'
//  import { OktaAuth } from '@okta/okta-auth-js/lib';

import myAppConfig from './config/my-app-config';
import { OKTA_CONFIG, OktaAuthGuard, OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
// import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MemberPageComponent } from './components/member-page/member-page.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const oktaConfig = myAppConfig.odic;
const oktaAuth= new OktaAuth(oktaConfig);
function sendToLoginPage(oktaAuth: OktaAuth, injector: Injector){
  const router= injector.get(Router);
  router.navigate(['/login']);
}
const routes: Routes= [
  {path:'order-history', component: OrderHistoryComponent , canActivate:[OktaAuthGuard],
  data:{onAuthRequired: sendToLoginPage }},
  {path:'members',component: MemberPageComponent , canActivate:[OktaAuthGuard],
    data:{onAuthRequired: sendToLoginPage }
  },

  {path:'login/callback',component: OktaCallbackComponent},
  {path:'login',component: LoginComponent},
  {path:'checkout',component: CheckoutComponent},
  {path:'cart-details',component: CartDetailsComponent},
  {path:'products/:id',component: ProductDetailsComponent},
  {path:'search/:keyword',component: ProductListComponent},
  {path:'category/:id',component: ProductListComponent},
  {path:'category',component: ProductListComponent},
  {path:'products',component: ProductListComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',redirectTo:'/products',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    OrderHistoryComponent
    
  ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet,
    RouterModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    OktaAuthModule ,
    CommonModule ],

  providers: [ProductService ,{provide: OKTA_CONFIG, useValue: {oktaAuth}},{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }