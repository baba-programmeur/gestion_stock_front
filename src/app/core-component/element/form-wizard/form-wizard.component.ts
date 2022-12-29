import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadformwizardbootstrap("assets/plugins/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js")
    this.loadformwizardprettify("assets/plugins/twitter-bootstrap-wizard/prettify.js")
    this.loadformwizard("assets/plugins/twitter-bootstrap-wizard/form-wizard.js")
  }
  loadformwizardbootstrap(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadformwizardprettify(js: string) {
    var script = document.createElement('script'); 
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadformwizard(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadformwizardcss(js: string) {
    var script = document.createElement('link');
    script.href = js;
    script.rel = "stylesheet"
    // script.async = false;
    document.head.appendChild(script);
  }
}
