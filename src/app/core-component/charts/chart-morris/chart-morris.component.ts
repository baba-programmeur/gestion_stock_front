import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-morris',
  templateUrl: './chart-morris.component.html',
  styleUrls: ['./chart-morris.component.scss']
})
export class ChartMorrisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.loadc3script("assets/plugins/morris/raphael-min.js")
    this.Loadminjs("assets/plugins/morris/morris.min.js")
    this.loadscript("assets/plugins/morris/chart-data.js")
  }
  loadscript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  Loadminjs(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadc3script(js: string){
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
