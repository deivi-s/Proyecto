import { Component, OnInit } from '@angular/core';
import { RegistroModel } from 'src/models/registro.model';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  objRegistro: RegistroModel = new RegistroModel();

  model:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.model = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
      correo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      clave: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get f() {
    return this.model.controls;
  }

  registrar() {
    if (this.model.valid) {
        this.objRegistro = this.model.value;
        this.userService.registrar(this.objRegistro)
          .subscribe(data => {
            Swal.fire('Registro exitoso...', '', 'success');
          })
    }else{
            Swal.fire('Complete los campos', '', 'warning');
    }
  }

}
