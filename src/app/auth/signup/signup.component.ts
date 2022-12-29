import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  password= 'password'
  show = false;

  public subscription: Subscription;
  public CustomControler: any;

  form = new FormGroup({
    name: new FormControl("",),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebstorgeService) {
    this.subscription = this.storage.Createaccountvalue.subscribe((data) => {
      this.CustomControler = data;
    });
  }

  ngOnInit() {}

  submit() {
    debugger
      this.storage.Createaccount(this.form.value);
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
