import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';
  public sideBaractivePath: boolean = false;
  public headeractivePath: boolean = false;

  constructor(private Router: Router) {
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        $("div").removeClass("slide-nav");
        $("div").removeClass("opened");
        if (
          data.url.split('/')[1] === 'errorpages' ||
          data.url.split('/')[2] === 'pos' ||
          data.url.split('/')[1] === 'auth'
        ) {
          this.sideBaractivePath = true;
          this.headeractivePath = true;
        } else {
          this.sideBaractivePath = false;
          this.headeractivePath = false;
        }
        if(data.url.split('/')[2] === 'pos'){
          this.sideBaractivePath = true;
          this.headeractivePath = false;
        }
      }
    });
  }
  ngAfterViewInit() {
    this.LoadScript("assets/js/script.js")
    this.LoadScript("assets/js/togglescript.js")
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}

