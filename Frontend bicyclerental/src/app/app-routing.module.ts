import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbicyclesComponent } from './admin/addbicycles/addbicycles.component';
import { AddcompaniesComponent } from './admin/addcompanies/addcompanies.component';
import { AdminComponent } from './admin/admin.component';
import { AdminbicycleeditComponent } from './admin/adminbicycleedit/adminbicycleedit.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserbicyclesComponent } from './user/userbicycles/userbicycles.component';
import { UserbookingdisplayComponent } from './user/userbookingdisplay/userbookingdisplay.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'cutomers',component:CustomersComponent},
  {path:'addcompanies',component:AddcompaniesComponent},
  {path:'addbicycles',component:AddbicyclesComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'userbicycles',component:UserbicyclesComponent,canActivate:[AuthGuard]},
  {path:'users/:name',component:UserComponent,canActivate:[AuthGuard]},
  {path:'userpayment/:bicycle',component:UserpaymentComponent,canActivate:[AuthGuard]},
  {path:'userbookingdetails/:card',component:UserbookingdisplayComponent,canActivate:[AuthGuard]},
  {path:'adminbicycleedit',component:AdminbicycleeditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
