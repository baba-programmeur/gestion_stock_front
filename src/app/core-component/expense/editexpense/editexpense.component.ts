import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.component.html',
  styleUrls: ['./editexpense.component.scss']
})
export class EditexpenseComponent implements OnInit {

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }

}
