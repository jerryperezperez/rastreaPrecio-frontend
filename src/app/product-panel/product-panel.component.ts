import {Component} from '@angular/core';
import {ServicioService} from "../servicio.service";
import _default from "chart.js/dist/plugins/plugin.decimation";
import algorithm = _default.defaults.algorithm;

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})

export class ProductPanelComponent {

  public title: string = "Panel";

  constructor(protected servicio: ServicioService) {
// this.servicio.articulos.
  }

  addProduct(): void {
    // Logic to execute when the button is clicked
    console.log('Button clicked!');
    console.log()

    // this.servicio.updateData()
    }


}
