import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './body/principal/detalle/detalle.component';
import { PrincipalComponent } from './body/principal/principal.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';


const routes: Routes = [
  { path: 'login', component: FormLoginComponent },
  { path: 'registro', component: FormRegistroComponent },
  { path: 'peliculas', component: PrincipalComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: FormLoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
