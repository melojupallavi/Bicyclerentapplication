import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { Userdisplay } from '../userpayment/userdisplay';
import { Payment } from '../userpayment/userpayment';

@Component({
  selector: 'app-userbookingdisplay',
  templateUrl: './userbookingdisplay.component.html',
  styleUrls: ['./userbookingdisplay.component.css']
})
export class UserbookingdisplayComponent implements OnInit {
  

  
  displayedColumns: string[] = ['Username','Model','Fromdate','Todate','Count','Price'];
  myform!:FormGroup;
  nameoncard!:string;
   dataSource:any;
  constructor(private helper :ServicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
        
     
        // this.dataSource=(this.route.snapshot.params['card']);
        // console.log(this.dataSource);
       this.nameoncard= this.helper.getuserpaymentnameoncard();
       
       console.log(this.nameoncard);
        this.helper.getpaymentdeatailsbynameoncard(this.nameoncard).subscribe((data)=>
        {
          console.log(data);
          this.dataSource=data;
        })
  }

  
  }


