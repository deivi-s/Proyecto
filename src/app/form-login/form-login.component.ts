import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: [ './form-login.component.css' ]
})
export class FormLoginComponent implements OnInit {


  public objUsuario: LoginModel = new LoginModel();

  model: any = {};

  constructor() { }

  ngOnInit(): void {
    this.inicioFormGroup();
  }

  inicioFormGroup() {
    this.model = new FormGroup({
      usuario: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      clave: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    });
  }

  get f() {
    return this.model.controls;
  }

  onSubmit() {
  }

}
