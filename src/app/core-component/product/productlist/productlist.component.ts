import { Component,OnInit } from '@angular/core';
import { QueryService} from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {MatDialog} from "@angular/material/dialog";
import {AddproductComponent} from "../addproduct/addproduct.component";
import {ProduitService} from "../../../services/produit.service";
import {Produit} from "../../../modele/produit";
import {PageEvent} from "@angular/material/paginator";
import {error} from "jquery";
import {EditproductComponent} from "../editproduct/editproduct.component";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {

  dtOptions:DataTables.Settings = {};

  initChecked:boolean=false ;

  public tableData:any =[] ;

  produits:Produit[]=[];

  totalItems:number=0 ;

  entities:any[];

  constructor(private dialog:MatDialog,private QueryService:QueryService,private produitService:ProduitService) {
    this.QueryService.filterToggle()
    this.tableData=this.QueryService.productList
  }

  ngOnInit(): void {

    this.getAllArticles({page:"0",size:"5"});

    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers',
      language: {
        search: ' ',
        searchPlaceholder: 'Search...',
        info: '_START_ - _END_ of _TOTAL_ items',
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.none');
        $('.dataTables_filter').appendTo('.search-input');
      },
    };
  }

  private  getAllArticles(request){

 let  exporter= false ;
    this.produitService.getAllProducts(request).subscribe(( produits:any )=> {

      console.log("***",produits);
      if(produits){
        this.produits=produits['content'] ;
        this.totalItems=produits['totalItems'];

        for(const item of this.produits){

          this.entities.push({
            object:item ,
            values:[
                item.nomProduit ,
                item.prixUnitaire,
                item.quantite,
                item.designation,
                item.date_creation
            ]
          });
          }
       }
      if(exporter){

        this.produitService.exporter(this.entities)

      }

    });
  }


  getAllArticle(){


  firstValueFrom(this.produitService.getAllArticle()).then(

    //root5261? mdp ==> moodle

  )  ;

  }

  nextPage(event:PageEvent){

 const request={};

 request['page']=event.pageIndex.toString();

 request['size']=event.pageSize.toString();

 this.getAllArticles(request);

  }

  openProductToUpdate(produit: Produit){

    this.dialog.open(EditproductComponent,{
      width:'400px',
      data:{
       produits:[
         {libelle:'nom', valeur:produit.nomProduit,name:'nom'},
         {libelle:'quantite',valeur:produit.quantite,name:'quantite'},
         {libelle:'prixUnitaire', valeur:produit.prixUnitaire,name:'prix'},
         {libelle:'designation',valeur:produit.designation,name:'designation'}
       ]
      }
    }
  );
  }

  openDialogToAddProduct(){
    this.dialog.open(AddproductComponent,{
      width:'400px'
    })
  }
  deleteProduct(id:number){
    Swal.fire({
      // title: 'Are you sure?',
      text: "Etes vous sure de supprimer ce produit ? ",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      cancelButtonText:"annule",
      confirmButtonText: 'Supprime!',
      buttonsStyling: true,
      customClass: {
        cancelButton: 'btn btn-danger ',
        confirmButton: 'btn btn-primary',
      },

    }).then(resulat =>{

      if(resulat.isConfirmed){
        this.produitService.deleteProductById(id).subscribe(response=> {
          if(response){
            console.log("delete with succes", response);
          }
        });

      }
    })

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
