import { RouterModule,Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { MainComponent } from './Components/main/main.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { CartsComponent } from './Components/carts/carts.component';

export const routes: Routes = [
  { path: 'Main', component: MainComponent },
  { path: 'Products', component: ProductsComponent },
  {path:'Sign-Up',component:SignUpComponent},
  {path:'Login',component:LoginComponent},
  {path:'Carts',component:CartsComponent}



];
