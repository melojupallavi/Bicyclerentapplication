import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addbicycles } from 'src/app/admin/addbicycles/addbicycles';
import { AddbicyclesComponent } from 'src/app/admin/addbicycles/addbicycles.component';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {
  emailofuser!: string;
  Bicycledetails:any;
  constructor(private helper :ServicesService, private router:Router) { }

  ngOnInit(): void {
    this.emailofuser=this.helper.getemailofuser();
    console.log(this.emailofuser);
  
  this.helper.getcompanies().subscribe((data)=>
  {
        this.Bicycledetails=data;
  })
  }

  onsubmit(companyname:string)
  {

    console.log(companyname);
    this.helper.setcompanyname(companyname);
    this.router.navigate(["/userbicycles"]); 
  }

}
