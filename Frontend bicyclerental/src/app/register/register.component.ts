import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Register } from './registerdata';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name1:any;
  myForm!: FormGroup;
  body!: Register;
  constructor(private router: Router,private helper:ServicesService) { }
  ngOnInit(): void {
    
  
   this. myForm = new FormGroup({
    
    name: new FormControl('',[
      Validators.required]),
    email: new FormControl(''),
    mobile: new FormControl('',[
      Validators.required,
      Validators.minLength(10)]),
    gender: new FormControl(''),
    license: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl('')
}
)

}

onform()
{
  if(this.myForm.controls['name'].value.trim()=="")
  {
    alert("Enter valid name");
    return;
  }
  if(this.myForm.controls['mobile'].value.trim()===""||this.myForm.controls['mobile'].value.length!=10)
  {
    alert("Enter valid number");
    return;
  }
  if(this.myForm.controls['email'].value.trim()==="")
  {
    alert("Enter valid email");
    return;
  }
  
  if(this.myForm.controls['license'].value.trim()==="")
  {
    alert("Enter valid license");
    return;
  }
  if(this.myForm.controls['address'].value.trim()==="")
  {
    alert("Enter valid address");
    return;
  }
  if(this.myForm.controls['password'].value.trim()==="")
  {
    alert("Enter valid password");
    return;
  }
  
   
    this.body=(this.myForm.value);
    console.log(this.body);
    // this.router.navigate(['/users',{queryParams:{name:this.body.name}}]);
    
    this.helper.postregistration(this.body).subscribe((data)=>
    {
      // console.log(data.name);
      this.helper.setmailofuser(this.body.email);
      this.helper.setname(data.name);
      localStorage.setItem("token","pallavi");
      this.helper.loggin();
      this.router.navigate(['/users',data.name])
      
    });
   
}


}
