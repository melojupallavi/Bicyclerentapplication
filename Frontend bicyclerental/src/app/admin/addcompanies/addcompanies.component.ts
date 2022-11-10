import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Addcompanies } from './addcompanies';

@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements OnInit {
  displayedColumns: string[] = [ 'Name', 'Action'];
  dataSource:any;
  constructor(private helper:ServicesService) { }
  myform!:FormGroup;
  ngOnInit(): void {
    this. myform = new FormGroup({
      companyname: new FormControl('')
      
  }
  )
  this.helper.getcompanies().subscribe((data)=>
  {
    console.log(data);
    this.dataSource=data;
  })
  }

onsubmit()
{
  this.helper.getcompanypresent(this.myform.controls['companyname'].value).subscribe((data)=>
  {
    if(!data)
    {
      this.helper.postcompanies(this.myform.value).subscribe((data)=>
    {
     
      this.helper.getcompanies().subscribe((data)=>
    {
      console.log(data);
      this.dataSource=data;
    })
      
    })
    }
    else
    {
      confirm("Please enter a new company name");
    }
    
  
    
  })
  

}

deletecompanyname(companyname:string)
{
  this.helper.deletecompanyname(companyname).subscribe((data)=>
  {
    console.log(data);
    this.helper.getcompanies().subscribe((data)=>
    {
      console.log(data);
      this.dataSource=data;
    })
  })
}

}
