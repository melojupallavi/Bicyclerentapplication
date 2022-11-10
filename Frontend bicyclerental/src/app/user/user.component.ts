import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  emailofuser!: string;
  name:any;
  constructor(private router: Router,private helper:ServicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.emailofuser=this.helper.getemailofuser();
    this.name=this.route.snapshot.params['name'];
     console.log(this.emailofuser);
    this.helper.getuserdetailsbyemail(this.emailofuser).subscribe((data)=>
    {
           this.name=data.name;
          //  console.log(data);
    })

  
  }

}
