import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {
emailVal=false;
phoneVal=false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.emailVal,this.phoneVal)
  }

  selectOption(optin: any){
if(optin.target.value=='Email'){
  this.emailVal=true
  this.phoneVal=false
}else if(optin.target.value=='Phone'){
  this.phoneVal=true
  this.emailVal=false
  }
  }

}
