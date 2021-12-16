export class CarritoModel {

  id_pelicula: number;
  precio: number;
  cantidad: number;
  sub_total: number;

  constructor(params?: Partial<CarritoModel>) {

    this.id_pelicula = params?.id_pelicula || 0;
    this.precio = params?.precio || 0;
    this.cantidad = params?.cantidad || 0;
    this.sub_total = params?.sub_total || 0;
  }
}

