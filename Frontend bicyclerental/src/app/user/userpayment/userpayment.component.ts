import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Addbicycles } from 'src/app/admin/addbicycles/addbicycles';
import { Register } from 'src/app/register/registerdata';
import { ServicesService } from 'src/app/services.service';
import { Userdisplay } from './userdisplay';
import { Payment } from './userpayment';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.css']
})
export class UserpaymentComponent implements OnInit {


  userdisplay!:Userdisplay;
  bicycledetails:any;
  payment!:Payment;
  name!:string;
  count!:any;
  modelname!:  string;
  emailofuser!: string;
  userdetails!: Register;
  constructor(private helper:ServicesService,private route: ActivatedRoute,private router:Router) {
   }
  carddetails!:FormGroup;
  ngOnInit(): void {
 
this.bicycledetails =this. route.snapshot.params['bicycle'];
this.name=this.helper.getname();
this.modelname=this.helper.getmodelname();
this.count=this.helper.getcount();
this.helper.getbicyclebymodelname(this.modelname).subscribe((data)=>
{
  this.bicycledetails=data;
 
  
  
})

 this. carddetails= new FormGroup({
  fromdate: new FormControl(''),
  todate: new FormControl(''),
  modelname: new FormControl(this.modelname),
  count: new FormControl(''),
   bookingmoney: new FormControl(''),
  cardno: new FormControl(''),
  nameoncard: new FormControl(this.name),
  cvv: new FormControl(''),
  expirydate:new FormControl('')
})


  
  }


  onsubmit()
  {
    
    console.log(this.carddetails.value);
    console.log(this.carddetails.controls['count'].value);
    if(Number(this.bicycledetails.count)<Number(this.carddetails.controls['count'].value))
    {
      alert(`The available bicycles are ${this.bicycledetails.count} `);
      return;
    }
    if(this.carddetails.controls['count'].value=="")
    {
      alert(`Give the count of bicycles`);
      return ;
    }
    
    if(this.carddetails.controls['fromdate'].value=="")
    {
      alert(`Invalid Fromdate `);
      return ;
    }
    if(this.carddetails.controls['todate'].value=="")
    {
      alert(`Invalid Todate `);
      return ;
    }
    if(this.carddetails.controls['cvv'].value=="")
    {
      alert(`Invalid Cvv `);
      return ;
    }
    if(this.carddetails.controls['expirydate'].value=="")
    {
      alert(`Invalid expiryadate `);
      return ;
    }
    if(this.carddetails.controls['cardno'].value=="")
    {
      alert(`Invalid Cvv `);
      return ;
    }

    this.helper.postdetailsofpayment(this.carddetails.value).subscribe((data)=>
    {

        console.log(data);
      
      this.helper.setuserpayment(this.carddetails.value);
      this.router.navigate([`/userbookingdetails/${this.carddetails.value}`]);
    }
    
    )
  }


}
