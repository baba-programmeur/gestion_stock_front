import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createexpense',
  templateUrl: './createexpense.component.html',
  styleUrls: ['./createexpense.component.scss']
})
export class CreateexpenseComponent implements OnInit {

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }

}
