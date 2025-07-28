import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Colaborador {
idcolaborador: number;
nombre: string;
apellido: string;
direccion: string;
edad: number;
profesion: string;
estado_civil: string;
}

@Injectable({
providedIn: 'root'
})
export class ColaboradorService {
private baseUrl = 'http://localhost:3000'; // Cambia si usas otro puerto

constructor(private http: HttpClient) {}

getColaboradores(): Observable<Colaborador[]> {
return this.http.get<Colaborador[]>('http://localhost:3000/colaboradores');
}

createColaborador(data: Colaborador): Observable<Colaborador> {
return this.http.post<Colaborador>('http://localhost:3000/api/colaboradores', data);
}
}