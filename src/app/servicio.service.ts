import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable} from "rxjs";
import {Articulo} from "./model/Articulo";
import {Precio} from "./model/Precio";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  private apiUrl = 'http://localhost:5000';
  public articulos: Articulo[] = [];
  public articuloActual: Articulo | any;

  constructor(private http: HttpClient) {

    this.getArticulos().subscribe({
      next: (articulos) => this.articulos = articulos,
      error: (e) => console.error('Error retrieving tasks:', e),
      complete: () => console.info('complete')
    })
  }

  getPrecios() {
    if (this.articuloActual) {
      return [{
        data: this.articuloActual.precios.map((objeto_precio: Precio) => objeto_precio.precio),
        label: "Historial de precios"
      }]
    } else {
      return [{
        data: [1, 2],
        label: "Historial de precios"
      }]
    }

  }

  getFechas() {
    if (this.articuloActual) {
      return this.articuloActual.precios.map((objeto_precio: Precio) => objeto_precio.fecha)
    } else {
      return ["1", "2"]
    }

  }

  deleteArticulo(id: number): Observable<number> {
    console.log(`${this.apiUrl}/articulos/` + id)
    return this.http.delete<number>(`${this.apiUrl}/articulos/` + id)
  }

  updateArticulo(id: number): Observable<Articulo> {
    console.log(`${this.apiUrl}/articulos/` + id)
    return this.http.put<Articulo>(`${this.apiUrl}/articulos/` + id, this.articuloActual)
  }

  // updateArticulo(nuevoArticulo: Articulo) {
  //   throw new Error('Method not implemented.');
  // }
  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.apiUrl}/articulos`)
  }

  //TODO Validar que el objeto haya sido creado para poder agregarlo en la vista directamente
  addArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(`${this.apiUrl}/articulos`, articulo)
  }

  // testWebScrapping(articulo: Articulo){
  //    this.http.get<number>(`${this.apiUrl}/articulos`, articulo)
  // }

}
