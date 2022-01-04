import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class UserService {
	private url = 'https://61d496078df81200178a8d90.mockapi.io/movies/user/register/Usuarios';

	constructor(private http: HttpClient) { }

	registrar(obj: any): Observable<any> {
		return this.http.post<any>(this.url, {
			 usuario : obj.usuario,
			 correo : obj.correo,
			 nombres : obj.nombres,
			 apellidos : obj.apellidos,
			 clave : obj.clave,
		});
	}
	
	lista(): Observable<any> {
	
	return this.http.get(this.url);
	}
	  
}
