import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PaisNuevo } from '../interfaces/nuevoPais.interface';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl2: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    /**
     * of es una funcion de genera Observable
     */
    return this.http.get<Country[]>(url); //.pipe(catchError((err) => of(['Hola mundo'])));
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<PaisNuevo> {
    const url = `${this.apiUrl2}/alpha/${id}`;
    return this.http.get<PaisNuevo>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`; //?fields=name,capital,alpha2code,flag,population
    return this.http.get<Country[]>(url)
    .pipe(
      tap(console.log)
    );
  }
}
