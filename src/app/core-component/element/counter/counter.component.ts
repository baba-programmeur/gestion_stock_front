import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
      
  ngAfterViewInit() {
    this.jquery("assets/plugins/countup/jquery.counterup.min.js")
    this.LoadScript("assets/plugins/countup/jquery.waypoints.min.js")
    this.LoadScript2("assets/plugins/countup/jquery.missofis-countdown.js")
    this.LoadScript3("assets/plugins/countup/custom-counter.js")
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
  LoadScript2(js: string) {
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
