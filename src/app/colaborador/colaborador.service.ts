import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColaboradorResumo, Colaborador } from './colaborador';
import { map, tap } from 'rxjs/operators';

const URL = 'http://localhost:8080/api/v1/colaboradores';
@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  constructor(private http: HttpClient) { }

  listaTodos(page: number, size: number): Observable<any> {
    return this.http
      .get<ColaboradorResumo[]>(`${URL}?page=${page}&size=${size}`);
  }

  busca(id: number) {
    return this.http
      .get<Colaborador>(`${URL}/${id}`)
      .pipe(map((response: any) => response.content));
  }

  deleta(id: number) {
    return this.http.delete(`${URL}/${id}`);
  }
}
