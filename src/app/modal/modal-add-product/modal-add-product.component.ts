import {Component} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Articulo} from "../../model/Articulo";
import {Precio} from "../../model/Precio";
import {ServicioService} from "../../servicio.service";

@Component({
  selector: 'app-modal-add-product',
  templateUrl: './modal-add-product.component.html',
  styleUrls: ['./modal-add-product.component.css']
})
export class ModalAddProductComponent {
  closeResult = '';

  nuevoArticulo: Articulo = {
    name: "",
    store: "",
    url: "",
    website: "",
  };

  constructor(private modalService: NgbModal, private servicio:ServicioService) {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.validarArticulo()
      console.log(this.nuevoArticulo)
      this.servicio.addArticulo(this.nuevoArticulo).subscribe(response => {
          alert("exitoso")
        this.servicio.articulos.push({...this.nuevoArticulo})
          //TODO Limpiar el objeto para volver usar al registrar nuevo articulo
        },
        error => {
        alert("no se pudo registrar, pide ayuda")
        })
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log("cierra")

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private validarArticulo() {
    return
  }

  abrir() {
    alert("probando el resultado")
  }
}
