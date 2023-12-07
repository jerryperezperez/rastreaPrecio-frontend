import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from 'src/app/servicio.service';
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { Articulo } from 'src/app/model/Articulo';

@Component({
  selector: 'app-modal-edit-product',
  templateUrl: './modal-edit-product.component.html',
  styleUrls: ['./modal-edit-product.component.css']
})
export class ModalEditProductComponent {
  closeResult = '';

  nuevoArticulo: Articulo = {
    name: "",
    store: "",
    url: ""
  };

  constructor(private modalService: NgbModal, protected servicio: ServicioService) {
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.validarArticulo()
      console.log(this.servicio.articuloActual)
      this.servicio.updateArticulo(this.servicio.articuloActual.id).subscribe(response => {
          alert("exitoso")
          //TODO Limpiar el objeto para volver usar al registrar nuevo articulo
        },
        error => {
        alert("no se pudo actualizar, pide ayuda")
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


  protected readonly faPenToSquare = faPenToSquare;

}
