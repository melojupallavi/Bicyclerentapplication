import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Payment } from 'src/app/user/userpayment/userpayment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['Username','Model','Count','Price'];
  dataSource:any;
  constructor(private helper:ServicesService) { }

  ngOnInit(): void {
    this.helper.getpaymentdetails().subscribe((data)=>
    {
      this.dataSource=data;
    })
  } 

}
