import {Precio} from "./Precio";

export class Articulo {
  id: number;
  name: string = "";
  url: string;
  store: string;
  precios: Precio[];


  constructor(id: number, name: string, url: string, store: string, precios: Precio[]) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.store = store;
    this.precios = precios;
  }
}
