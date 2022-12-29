import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/shared/query.service';

@Component({
  selector: 'app-invoicereport',
  templateUrl: './invoicereport.component.html',
  styleUrls: ['./invoicereport.component.scss']
})
export class InvoicereportComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked:boolean=false
  public tableData:any =[]
  
  constructor(private QueryService:QueryService) {
    this.QueryService.filterToggle()
    this.tableData=this.QueryService.invoiceReport
  }
  date = new Date();
  ngOnInit(): void {
    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers', 
			language: {
				search: ' ',
				searchPlaceholder: "Search...",
				info: "_START_ - _END_ of _TOTAL_ items",
			 },
			initComplete: (settings, json)=>{
				$('.dt-buttons').appendTo('.wordset');
				$('.dataTables_filter').appendTo('.search-input');
			},	
      
    };
  }
  selectAll(initChecked:boolean){
    if(!initChecked){
      this.tableData.forEach((f:any)=>{
        f.isSelected=true
      })
    }else{
      this.tableData.forEach((f:any)=>{
        f.isSelected=false
      })
    }
  }
}
