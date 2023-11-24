import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ProductPanelComponent} from './product-panel/product-panel.component';
import {PriceHistoryChartComponent} from './price-history-chart/price-history-chart.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FooterComponent} from './footer/footer.component';
import {NgbButtonsModule, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from './header/header.component';
import {FormsModule} from "@angular/forms";
import {ModalAddProductComponent} from './modal/modal-add-product/modal-add-product.component';
import {ModalEditProductComponent} from './modal/modal-edit-product/modal-edit-product.component';
import {ServicioService} from "./servicio.service";
import {HttpClientModule} from "@angular/common/http";
import {NgChartsModule} from "ng2-charts";
import { ModalDeleteProductComponent } from './modal/modal-delete-product/modal-delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductPanelComponent,
    PriceHistoryChartComponent,
    FooterComponent,
    HeaderComponent,
    ModalAddProductComponent,
    ModalEditProductComponent,
    ModalDeleteProductComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbDropdownModule,
    NgbButtonsModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
