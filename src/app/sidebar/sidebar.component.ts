import {Component, OnInit} from '@angular/core';
import {Articulo} from "../model/Articulo";
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {ServicioService} from "../servicio.service";
import {Precio} from "../model/Precio";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  indiceSeleccionado: number | any;


  constructor(protected servicio: ServicioService) {

  }

  protected readonly faTrash = faTrash;
  protected readonly faPenToSquare = faPenToSquare;

  onSave(nombre: string) {
    alert(nombre)
  }

  seleccionar(i: number) {
    this.indiceSeleccionado = i;
    this.servicio.articuloActual = this.servicio.articulos[i];
    let lista: string[] = [];
      this.servicio.articuloActual.precios.forEach(function (objeto_precio: Precio) {
      lista.push(objeto_precio.fecha)
    })
  }
}
