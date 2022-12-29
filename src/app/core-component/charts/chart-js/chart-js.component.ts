import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss'],
})
export class ChartJsComponent implements OnInit {
  
  
 // below the configuration are used for sample integration

  public barChartLegend = true;
  public barChartPlugins = [];


  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [24, 10, 32, 24, 26, 20], label: 'Sales' }],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public transparencyChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [14, 12, 34, 25, 24, 20], label: 'Sales' }],
  };

  public transparencyChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public gradientChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [14, 12, 34, 25, 24, 20], label: 'Sales' }],
  };

  public gradientChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public verticalBarChartLegend = true;
  public  verticalBarChartPlugins = [];

  public  verticalBarChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
    datasets: [
      { data: [ 14, 12, 34, 25, 24, 20 ], label: 'undefined' },
      { data: [ 14, 12, 34, 25, 24, 20 ], label: 'undefined' }
    ]
  };

  public  verticalBarChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


  public doughnutChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [35, 20, 8, 15, 24], label: 'Series A' }];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };



  
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  public pieChartDatasets = [
    {
      data: [35, 20, 8, 15, 24],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}


  ngAfterViewInit() {
    this.LoadScript("assets/plugins/chartjs/chart.min.js")
    this.LoadScript1("assets/plugins/chartjs/chart-data.js")
  }

  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript1(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}