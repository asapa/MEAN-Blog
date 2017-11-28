import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm()
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.email
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25)
      ])],
      confirm: ['', Validators.required]
    }, { validator: this.matchingPasswords('password', 'confirm')})
  }

  matchingPasswords(password, confirm){
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm].value) {
          return null;
      } else {
        return {'matchingPasswords': true}
      }
    }
  }

  onRegisterSubmit() {
    console.log(this.form);
  }

  ngOnInit() {
  }

}
