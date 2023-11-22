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
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLegend: boolean = true;

    @Input() variable: string = "";

    constructor(protected servicio: ServicioService) {

    }

    ngOnInit(): void {
        // this.servicio.data$.subscribe((newValue)=>{
        //     this.barChartData = [
        //         {data: [65, 59, 80, 81, 56, 55, 100], label: newValue},
        //         {data: [28, 48, 40, 19, 86, 27, 90], label: newValue}
        //     ];
        // })
    }





}
