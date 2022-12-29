import {Component, Inject, OnInit} from '@angular/core';
import {ProduitService} from "../../../services/produit.service";
import {Produit} from "../../../modele/produit";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {data} from "jquery";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditproductComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
              private productService:ProduitService,private activatedRoute:ActivatedRoute) { }

  produitCourant=new Produit();
  produits:any

  produit:Produit
  ngOnInit(): void {

  this.produits =this.data.produits ;

  //  console.log("pr***",this.produits);

   }

  editProduct()
  {
    console.log("produits**",this.produit);
    this.productService.editProduct(this.produit);

  }

  close() {
    this.dialogRef.close();
  }
}
