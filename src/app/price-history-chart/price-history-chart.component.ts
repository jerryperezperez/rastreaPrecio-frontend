import {Component, Input, NgZone, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";
import {ChartType} from "chart.js";
@Component({
    selector: 'app-price-history-chart',
    templateUrl: './price-history-chart.component.html',
    styleUrls: ['./price-history-chart.component.css']
})
export class PriceHistoryChartComponent implements OnInit{

  public lineChartType: ChartType = 'line';
    public barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
    };
    public barChartLegend: boolean = true;


    constructor(protected servicio: ServicioService) {

    }

    ngOnInit(): void {
    }





}
