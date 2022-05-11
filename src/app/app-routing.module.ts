import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : "Dashboard",
    component : DashboardComponent
  },
  {
    path : "Users",
    component : UsersComponent
  }, 
  {
    path : "Users-create",
    component : UserCreateComponent
  },
  {
    path : "Products",
    component : ProductsComponent
  },
  {
    path : "Products-create",
    component : ProductCreateComponent
  },
  {
    path : "Users/:id",
    component : UserViewComponent
  },
  {
    path : "Products/:id",
    component : ProductViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
