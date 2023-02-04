import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css']
})
export class FormBComponent implements OnInit {
  emailVal=false;
  phoneVal=false;
  constructor() { }

  ngOnInit(): void {
  }


  selectOption(optin: any){
if(optin=='Email'){
  this.emailVal=true
  this.phoneVal=false
}else if(optin=='Phone'){
  this.phoneVal=true
  this.emailVal=false
  }
  }
}
