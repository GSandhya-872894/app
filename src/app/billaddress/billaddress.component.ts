import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-billaddress',
  templateUrl: './billaddress.component.html',
  styleUrls: ['./billaddress.component.css'],
  animations: [
    trigger('buttonTextStateTrigger', [
      state('shown', style({
        opacity: 1
      })),
      state('transitioning', style({
        opacity: 0.5
      })),
      transition('shown => transitioning', animate('600ms ease-out')),
      transition('transitioning => shown', animate('600ms ease-in'))
    ])
  ]
})
export class BilladdressComponent implements OnInit {
  billForm: FormGroup;
       // The current state of text
       buttonTextState = 'shown';
       // The text currently being show
       buttonText = 'Check Out';
       // The text shown when the transition is finished
       transitionButtonText = 'Check Out';
       
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

  
   buttonTextTransitioned(event) {
    this.buttonText = this.transitionButtonText;
    this.buttonTextState = this.buttonTextState = 'shown';
  }

  onCheckOut() {
    // Removing the First transition
    this.buttonTextState = 'transitioning';
    this.transitionButtonText = 'Checking Out...';

  
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText = 'Successfully Checked out';
    }, 1800);

    // Reset button text
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText = 'Check Out';
    }, 3600);
  }
 

  get f() {
    return this.billForm.controls;
  }
  
  onSubmit(){
    console.log(this.billForm.value)
  }



}
