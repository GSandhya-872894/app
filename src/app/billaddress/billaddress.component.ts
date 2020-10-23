import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-billaddress',
  templateUrl: './billaddress.component.html',
  styleUrls: ['./billaddress.component.css']
})
export class BilladdressComponent implements OnInit {
  billForm: FormGroup;
  constructor( private formBuilder : FormBuilder ) { }
  
  ngOnInit(): void {
    this.billForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      buildingNo : ['', Validators.required],
      streetName : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      zipCode : ['', Validators.required],
      landmark : ['', Validators.required],
      phoneNo : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  get f() {
    return this.billForm.controls;
  }
  
  onSubmit(){
    console.log(this.billForm.value)
  }

}
