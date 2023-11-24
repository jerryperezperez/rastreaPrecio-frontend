import {Component} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {ServicioService} from "../../servicio.service";

@Component({
  selector: 'app-modal-delete-product',
  templateUrl: './modal-delete-product.component.html',
  styleUrls: ['./modal-delete-product.component.css']
})
export class ModalDeleteProductComponent {
  closeResult = '';

  constructor(private modalService: NgbModal, protected servicio: ServicioService) {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // alert(this.servicio.articuloActual.id)
      console.log(this.servicio.articulos.indexOf(this.servicio.articuloActual))
      //TODO Averiguar cómo eliminar un elemento del arreglo de articulos al realizar el delete

      this.servicio.deleteArticulo(this.servicio.articuloActual.id).subscribe(() => {
          alert("Borrado exitosamente")
          this.servicio.articulos = this.servicio.articulos.filter(e => e !== this.servicio.articuloActual);
        },
        error => {
          alert("no se pudo borrar, pide ayuda")
        })
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  protected readonly faTrash = faTrash;
}
