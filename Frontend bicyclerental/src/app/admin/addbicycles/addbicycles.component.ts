import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Addcompanies } from '../addcompanies/addcompanies';
import { Addbicycles } from './addbicycles';

@Component({
  selector: 'app-addbicycles',
  templateUrl: './addbicycles.component.html',
  styleUrls: ['./addbicycles.component.css']
})
export class AddbicyclesComponent implements OnInit {

  
  company: any;
  
  count:any=0;
  a!:Addbicycles;
  allbicycledata!:Addbicycles;
  displayedColumns: string[] = ['CompanyName','Model','Image','Count', 'Action'];
  dataSource:any;
    myform!:FormGroup;
  constructor(private helper :ServicesService) { }

  ngOnInit(): void {
    this. myform = new FormGroup({
      modelname: new FormControl(''),
      companyname: new FormControl(''),
      count: new FormControl(''),
   
      url:new FormControl('')
      
  }
  )
  this.helper.getcompanies().subscribe((data)=>
  {
    this.company=data;

  })
   this.helper.getallbicycles().subscribe((data)=>
   {
      this.dataSource=data;
   })


  }
  onedit(element:Addbicycles)
  {
    element.isedit=!element.isedit;
  
    if( this.count!=null)
    {
      if(Number(this.count)<0)
      {
        alert("Count can't be less than 0");
        return;
      }
    
    element.count=this.count;
    this.helper.putbicycles(element.modelname,element).subscribe((data)=>
    {
      console.log(data);
      
    })
  }

  }
  onsubmit()
  {
    if(this.myform.controls['modelname'].value.trim()=="")
    {
      alert("Enter valid Modelname");
      return;
    }
    if(this.myform.controls['count'].value.trim()=="")
    {
      alert("Enter valid count");
      return;
    }
 
    this.a=this.myform.value;
    this.a.isedit=false;
    
    this.helper.postbicycles(this.a).subscribe((data)=>
    {
      this.helper.getallbicycles().subscribe((data)=>
      {
        this.dataSource=data;
      })
    })
  }

  ondelete(modelname:string)
  {
    this.helper.deletebicyclemodelname(modelname).subscribe((data)=>
    {
      console.log(data);
      this.helper.getallbicycles().subscribe((data)=>
      {
         this.dataSource=data;
      })
    });
    console.log(modelname);
  }

}
