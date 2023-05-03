import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { UserComponent } from './user/user.component';
import { BasketComponent } from './basket/basket.component';
import { ErrorComponent } from './error/error.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'items/:id' , component: MenuItemsComponent},
  {path:'user' , component: UserComponent},
  {path:'checkout' , component: CheckoutOrderComponent},
  {path:'baskett' , component: BasketComponent},
  {path:'**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
