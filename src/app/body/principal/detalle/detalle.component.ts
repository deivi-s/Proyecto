import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id_pelicula: any = 0;
  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_pelicula = this.activateRoute.snapshot.paramMap.get('id');
    console.log(`Inicio Detalle`, this.id_pelicula);
  }

}
