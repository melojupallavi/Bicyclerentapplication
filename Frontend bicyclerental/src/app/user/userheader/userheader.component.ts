import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/register/registerdata';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  emailofuser!: string;
  user!:Register;
  @Input()
  username!: string;
  constructor(private router: Router,private helper:ServicesService) { }

  ngOnInit(): void {
  
    
    this.emailofuser=this.helper.getemailofuser();
    // console.log(this.emailofuser);
    this.helper.getuserdetailsbyemail(this.emailofuser).subscribe((data)=>
    {
           this.user=data;
           console.log(data);
    })

}

logout()
{
  this.helper.loggout();
}

}