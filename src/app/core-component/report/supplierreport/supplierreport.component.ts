import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/shared/query.service';

@Component({
  selector: 'app-supplierreport',
  templateUrl: './supplierreport.component.html',
  styleUrls: ['./supplierreport.component.scss']
})
export class SupplierreportComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public purchaseData:any=[]
  public paymentData:any=[]
  public returnData:any=[]
  purchaseInitChecked:boolean=false
  paymentInitChecked:boolean=false
  returnInitChecked:boolean=false

  constructor(private QueryService:QueryService) {
    this.QueryService.filterToggle()
    this.purchaseData=this.QueryService.supplierReport1
    this.paymentData=this.QueryService.supplierReport2
    this.returnData=this.QueryService.supplierReport3
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
  purchaseSelectAll(initChecked:boolean){
    if(!initChecked){
      this.purchaseData.forEach((f:any)=>{
        f.isSelected=true
      })
    }else{
      this.purchaseData.forEach((f:any)=>{
        f.isSelected=false
      })
    }
  }
  paymentSelectAll(initChecked:boolean){
    if(!initChecked){
      this.paymentData.forEach((f:any)=>{
        f.isSelected=true
      })
    }else{
      this.paymentData.forEach((f:any)=>{
        f.isSelected=false
      })
    }
  }
  returnSelectAll(initChecked:boolean){
    if(!initChecked){
      this.returnData.forEach((f:any)=>{
        f.isSelected=true
      })
    }else{
      this.returnData.forEach((f:any)=>{
        f.isSelected=false
      })
    }
  }
}
