import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked:boolean=false
  public tableData :any=[]
  
  constructor(private QueryService:QueryService) {
    this.QueryService.filterToggle()
    this.tableData=this.QueryService.customerList
  }
  confirmText(index:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: true,
      customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1',
      },
    }).then( (t) => {
      if(t.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
        this.tableData.splice(index, 1);
      }
    });
  }

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
