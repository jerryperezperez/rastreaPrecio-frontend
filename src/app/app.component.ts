import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Articulo} from "./model/Articulo";
import {ServicioService} from "./servicio.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rastreaPrecio-frontend';
  parentMessage: string | undefined;
  articulos: Observable<Articulo[]> | undefined;
  // servicio: ServicioService;

  constructor(private servicio: ServicioService) {

  }

  ngOnInit() {
    // this.parentMessage = "mensaje del padre"
  }
}
