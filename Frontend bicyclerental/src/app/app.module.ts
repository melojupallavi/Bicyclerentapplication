import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { AddbicyclesComponent } from './admin/addbicycles/addbicycles.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AddcompaniesComponent } from './admin/addcompanies/addcompanies.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { AdmincardsComponent } from './admin/admincards/admincards.component';
import { UsersidebarComponent } from './user/usersidebar/usersidebar.component';
import { UserbicyclesComponent } from './user/userbicycles/userbicycles.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { HttpClientModule } from '@angular/common/http';
import { UserheaderComponent } from './user/userheader/userheader.component';
import { UserbookingdisplayComponent } from './user/userbookingdisplay/userbookingdisplay.component';
import { AdminbicycleeditComponent } from './admin/adminbicycleedit/adminbicycleedit.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddbicyclesComponent,
    CustomersComponent,
    AddcompaniesComponent,
    PaymentsComponent,
    AdminheaderComponent,
    AdminsidebarComponent,
    AdmincardsComponent,
    UsersidebarComponent,
    UserbicyclesComponent,
    UserpaymentComponent,
    UserheaderComponent,
    UserbookingdisplayComponent,
    AdminbicycleeditComponent
    
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule ,
    MatListModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
