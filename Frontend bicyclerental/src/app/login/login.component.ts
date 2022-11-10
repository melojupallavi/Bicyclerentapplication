import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register/registerdata';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  user!:Register;
  constructor(private router: Router,private helper:ServicesService) {

    // console.log(this.router.getCurrentNavigation().extras.state.name);
   }

  ngOnInit(): void {
    this. myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  }
  )
  }
  onform()
  {
     console.log(this.myForm.value);
     this.helper.getuserdetailsbyemail(this.myForm.controls['email'].value).subscribe((data)=>
     {
         if(data==null)
         {  
            if(this.myForm.controls['email'].value=="admin@gmail.com" && 
            (this.myForm.controls['password'].value)=="admin")
            {
              this.router.navigate(['/admin']);
            }
            else{
            confirm("Invalid credentials or please register");
            this.router.navigate(['/register']);
            }
         }
         else{
            if(data.password==this.myForm.controls['password'].value)
            {
              this.helper.setmailofuser(data.email);
              localStorage.setItem("token","pallavi");
              this.helper.setname(data.name);
              this.helper.loggin();
              this.router.navigate(['/users',data.name]);
            }
            else
            {
              alert("enter the correct password");
            }
         }
     })
    
  }
}
