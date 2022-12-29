import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  password: any;
  show = false;
  public CustomControler: any;
  public subscription: Subscription;
  form = new FormGroup({
    email: new FormControl("Enter your email address", [Validators.required]),
    password: new FormControl('12345', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebstorgeService) {
    this.subscription = this.storage.Loginvalue.subscribe((data:any) => { 
      if(data != 0){
        this.CustomControler = data;
      }
    });
  }

  ngOnInit() {
    this.storage.Checkuser();
    this.password = 'password';
  }

  submit() {
    this.storage.Login(this.form.value);
  } 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
