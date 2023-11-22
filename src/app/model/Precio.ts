export class Precio{
  id: number;
  id_producto: number;
  fecha: string;
  precio: number;


  constructor(id: number, id_producto: number, fecha: string, precio: number) {
    this.id = id;
    this.id_producto = id_producto;
    this.fecha = fecha;
    this.precio = precio;
  }
}
