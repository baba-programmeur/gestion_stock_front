import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-flot',
  templateUrl: './chart-flot.component.html',
  styleUrls: ['./chart-flot.component.scss']
})
export class ChartFlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.loadc3script("assets/plugins/flot/jquery.flot.js")
    this.Loadminjs("assets/plugins/flot/jquery.flot.fillbetween.js")
    this.loadscript("assets/plugins/flot/jquery.flot.pie.js")
    this.loadscriptFlot("assets/plugins/flot/chart-data.js")

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
  loadscriptFlot(js: string){
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
