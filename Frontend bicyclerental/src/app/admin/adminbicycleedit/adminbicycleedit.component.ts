import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminbicycleedit',
  templateUrl: './adminbicycleedit.component.html',
  styleUrls: ['./adminbicycleedit.component.css']
})
export class AdminbicycleeditComponent implements OnInit {

  constructor() { }

  myform!:FormGroup;
  ngOnInit(): void {
    this. myform = new FormGroup({
      modelname: new FormControl(''),
     
      count: new FormControl(''),
      status: new FormControl('')
  }
  )
  }

}
