import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-fileupload',
  templateUrl: './form-fileupload.component.html',
  styleUrls: ['./form-fileupload.component.scss']
})
export class FormFileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.LoadScript("assets/plugins/fileupload/fileupload.min.js")
    this.LoadScript1("assets/plugins/fileupload/fileuploadcustom.js")
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
