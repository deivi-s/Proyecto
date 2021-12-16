export class RegistroModel {

  id_usuario: number;
  usuario: string;
  correo: string;
  nombres: string;
  apellidos: string;
  clave: string;
  clave_confirmada: string;

  constructor(params?: Partial<RegistroModel>) {
    this.id_usuario = params?.id_usuario || o;
    this.usuario = params?.usuario || '';
    this.correo = params?.correo || '';
    this.nombres = params?.nombres || '';
    this.apellidos = params?.apellidos || '';
    this.clave = params?.clave || '';
    this.clave_confirmada = params?.clave_confirmada || '';
  }
}
