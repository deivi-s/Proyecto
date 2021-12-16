import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: [ './carrito.component.css' ]
})
export class CarritoComponent implements OnInit {

  peliculas: any[] = [
    {
      nombre: 'pelicula 1',
      precio: 100.5,
      cantidad: 1,
      subTotal: 100.5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
