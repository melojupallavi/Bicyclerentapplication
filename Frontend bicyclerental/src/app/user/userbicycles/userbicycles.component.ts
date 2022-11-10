import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addbicycles } from 'src/app/admin/addbicycles/addbicycles';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-userbicycles',
  templateUrl: './userbicycles.component.html',
  styleUrls: ['./userbicycles.component.css']
})
export class UserbicyclesComponent implements OnInit {


  somedata:any;
  name!:string;
  companyname!: string;
  emailofuser!: string;
  Bicycledetails:any;
  Bicycle!:Addbicycles;
  constructor(private router: Router,private helper:ServicesService) { }

  ngOnInit(): void {
    this.name=this.helper.getname();
    this.companyname=this.helper.getbycompanyname()
    console.log(this.companyname);
    this.emailofuser=this.helper.getemailofuser();
    console.log(this.emailofuser);
    // this.helper.getallbicycles().subscribe((data)=>
    // {
    //       this.Bicycledetails=data;
    // })
   this.helper.getallbicyclesbycompanyname(this.companyname).subscribe((data)=>
   {
      console.log(data);
      this.Bicycledetails=data;
   })
  
   

  }


  paymentdetails(modelname:string)
  {

    this.helper.setmodelname(modelname);
    
    this.helper.getbicyclebymodelname(modelname).subscribe((data)=>
    {
       console.log(data);
       this.Bicycle=data;
       console.log(data);
       this.helper.setcount(data.count);
       this.router.navigate([`/userpayment/${this.Bicycle}`]);
    })
     
    //  this.router.navigate(["userpayment"], {this.somedata:{ "othrData"}});
  }

}
