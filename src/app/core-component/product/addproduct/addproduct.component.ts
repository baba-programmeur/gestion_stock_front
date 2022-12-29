import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {data} from "jquery";
import {Produit} from "../../../modele/produit";
import {ProduitService} from "../../../services/produit.service";
import {firstValueFrom} from "rxjs";
import {Router} from "@angular/router";
import {Dialog} from "@angular/cdk/dialog";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private produitService:ProduitService,
              private router:Router,private dialog:Dialog) { }

  produit:Produit=new Produit();

  ngOnInit(): void {

    console.log("data**",data);

  }

  addProduct()
  {
  this.produitService.addProduct(this.produit).subscribe((response) =>{

      if(response){
        console.log("reponse",response);
        this.rafraichir();
        // this.router.navigateByUrl('/',{skipLocationChange:true}).then(this.router.navigate['/'])
      }

  });
  }

  rafraichir(){
    this.produit.nomProduit='';
     this.produit.designation='';
     this.produit.quantite=null;
     this.produit.prixUnitaire=null ;
  }

  close(){
    this.dialog.closeAll();
  }

}
