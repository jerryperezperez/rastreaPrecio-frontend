import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {Articulo} from "./model/Articulo";
import {Precio} from "./model/Precio";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl = 'http://127.0.0.1:5000';
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

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.apiUrl}/articulo`)
  }
}
