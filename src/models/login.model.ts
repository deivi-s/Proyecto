
export class LoginModel{

  usuario: string;
  clave:string;

  constructor(params?: Partial<LoginModel>) {
      this.usuario = params?.usuario || '';
      this.clave = params?.clave || '';
  }

}
