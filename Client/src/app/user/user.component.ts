import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _Router:Router, private location:Location) { }
  ngOnInit(): void {
    const userData = localStorage.getItem('UserData');
    if(userData){
      this.userForm.setValue(JSON.parse(userData))
    }
  }

  userForm:FormGroup = new FormGroup({
    'name': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'phone': new FormControl(null,[Validators.required,Validators.pattern(/^\+20(1|0)\d{9}$/)]),
    'email': new FormControl(null,[Validators.required,Validators.pattern(/^[\w.-]+@[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)+$/)]),
    'address': new FormControl(null,[Validators.required])
  });

  goBack(){
    this.location.back();
  }

  submitForm()
  {
    const data = this.userForm.value;
    localStorage.setItem('UserData',JSON.stringify(data));
    this._Router.navigateByUrl('/baskett')

  }
}
