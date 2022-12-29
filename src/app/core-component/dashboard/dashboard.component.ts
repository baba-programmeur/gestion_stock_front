import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  public tableData = [
    {
      Sno: '1',
      img:'assets/img/product/product22.jpg',
      Products: 'Apple Earpods',
      Price: '$891.2',
    },
    {
      Sno: '2',
      img:'assets/img/product/product23.jpg',
      Products: 'iPhone 11',
      Price: '$668.51',
    },
    {
      Sno: '3',
      img:'assets/img/product/product24.jpg',
      Products: 'samsung',
      Price: '$522.29',
    },
    {
      Sno: '4',
      img:'assets/img/product/product6.jpg',
      Products: 'Macbook Pro',
      Price: '$291.01',
    }
  ]

    public dataTable = [
    {
      SNo:'1',
      ProductCode: 'IT0001',
      ProductName:'Orange',
      img:'assets/img/product/product2.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate:'12-12-2022'
    },
    {
      SNo:'2',
      ProductCode: 'IT0002',
      ProductName:'Pineapple',
      img:'assets/img/product/product3.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate:'25-11-2022'
    },
    {
      SNo:'3',
      ProductCode: 'IT0003',
      ProductName:'Stawberry',
      img:'assets/img/product/product4.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate:'19-11-2022'
    },
    {
      SNo:'4',
      ProductCode: 'IT0004',
      ProductName:'Avocat',
      img:'assets/img/product/product5.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate:'20-11-2022'
    }
  ]


  constructor() { }

  ngOnInit(): void {
    
  }


  ngAfterViewInit() {
    this.jquery("assets/plugins/apexchart/apexcharts.min.js")
    this.LoadScript("assets/plugins/apexchart/chart-data.js")
    this.LoadScript3("assets/plugins/countup/dash-script.js")
  }
  jquery(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript3(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
