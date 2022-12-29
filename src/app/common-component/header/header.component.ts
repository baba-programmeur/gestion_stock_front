import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
activePath=''
  constructor(private Router: Router) {
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath=data.url.split('/')[2]
      }
    });
  }

  ngOnInit(): void {
    this.LoadScript("assets/js/header.js")
  }

  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

}
