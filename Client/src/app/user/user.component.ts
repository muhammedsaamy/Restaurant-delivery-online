import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private _Router:Router) { }

  userForm:FormGroup = new FormGroup({
    'name': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'phone': new FormControl(null,[Validators.required,Validators.pattern(/^\+20(1|0)\d{9}$/)]),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'address': new FormControl(null,[Validators.required])
  });

  submitForm()
  {
    const data = this.userForm.value;
    localStorage.setItem('UserData',JSON.stringify(data));
    this._Router.navigateByUrl('/baskett')

  }




}
