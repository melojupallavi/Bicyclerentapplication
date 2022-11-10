import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = [ 'Name', 'Email','Gender', 'Mobile','Address','License'];
  dataSource:any;
  constructor(private helper:ServicesService) { }

  ngOnInit(): void {

  this.helper.getallcustomersregisterd().subscribe((data)=>
  {
    this.dataSource=data;
  })
  }

}
