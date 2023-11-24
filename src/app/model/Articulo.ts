import {Precio} from "./Precio";

export class Articulo {
  id?: number;
  name: string = "";
  url: string;
  store: string;
  precios?: Precio[];


  constructor(name: string, url: string, store: string) {
    this.name = name;
    this.url = url;
    this.store = store;
  }
}
