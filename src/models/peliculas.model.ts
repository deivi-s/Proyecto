export class PeliculasModel {

  id_pelicula: number;
  titulo: string;
  descripcion: string;
  precio: number;

  constructor(params?: Partial<PeliculasModel>) {
    this.id_pelicula = params?.id_pelicula || 0;
    this.titulo = params?.titulo || '';
    this.descripcion = params?.descripcion || '';
    this.precio = params?.precio || 0;
  }
}
