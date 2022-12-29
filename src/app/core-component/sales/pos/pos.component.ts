import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { QueryService } from 'src/app/shared/query.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public delete:any=[]
  public posPurchase:any=[]
  public posPayment:any=[]
  public posReturn:any=[]
  public cartValue:any=[0,0,0,0]


  constructor(private QueryService:QueryService) {
    this.QueryService.filterToggle()
    this.delete=this.QueryService.pos1
    this.posPurchase=this.QueryService.pos1
    this.posPayment=this.QueryService.pos2
    this.posReturn=this.QueryService.pos3
  }

  public addPos(i:number):void{    
    this.cartValue[i]++; 
  }
  public reducePos(i:number):void{    
    this.cartValue[i]--; 
  }

  confirmText() {
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
      }
    });
  }
  confirmTextPurchase(index:any) {
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
        this.posPurchase.splice(index, 1);
      }
    });
  }
  confirmTextPayment(index:any) {
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
        this.posPayment.splice(index, 1);
      }
    });
  }
  confirmTextReturn(index:any) {
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
        this.posReturn.splice(index, 1);
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
      
      ngAfterViewInit() {
        this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js")
        this.LoadScript("assets/js/carousel_script.js")
      }
      jquery(js: string) {
        var script = document.createElement('script');
        script.src = js;
        script.async = false;
        document.body.appendChild(script);
      }
      LoadScript(js: string) {
        var script = document.createElement('script');
        script.src = js;
        script.async = false;
        document.body.appendChild(script);
      }
}
