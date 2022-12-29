import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public activePath:string=''
  public sideBarControls: any = [
    { value: false, key: 'product' },
    { value: false, key: 'sales' },
    { value: false, key: 'purchase' },
    { value: false, key: 'expense' },
    { value: false, key: 'quotation' },
    { value: false, key: 'transfer' },
    { value: false, key: 'return' },
    { value: false, key: 'people' },
    { value: false, key: 'places' },
    { value: false, key: 'errorpages' },
    { value: false, key: 'element' },
    { value: false, key: 'charts' },
    { value: false, key: 'icons' },
    { value: false, key: 'forms' },
    { value: false, key: 'table' },
    { value: false, key: 'application' },
    { value: false, key: 'report' },
    { value: false, key: 'users' },
    { value: false, key: 'settings' },
  ];
  constructor(private Router: Router) {
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath=data.url.split('/')[1]
      }
    });
  }

  ngOnInit(): void {
    this.LoadScript("assets/js/sidebar.js")
  }


  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

  // openSideBar(uiControl:string){
  //   this.sideBarControls.forEach((control: any)=>{
  //     if(uiControl===control.key){
  //       control.value=true
  //     }else{
  //       control.value=false
  //     }
  //   })
  // }

  // sideBarToggle(uiControl:string): void {
  //   this.sideBarControls.forEach((control: any)=>{
  //     if(uiControl===control.key){
  //       control.value=!control.value
  //     }else{
  //       control.value=false
  //     }
  //   })
  // }
}
