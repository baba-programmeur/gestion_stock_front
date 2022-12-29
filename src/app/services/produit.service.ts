import { Injectable } from '@angular/core';
import {Produit} from "../modele/produit";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {log10} from "chart.js/types/helpers";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  private url:string =environment.url ;

  addProduct(produit:Produit){

    return this.http.post(this.url + 'addArticle',produit);

  }

  getAllProducts(request){

    const  params= request;

    return this.http.get(this.url +'AllArticles',{params});
  }

  deleteProductById(id:number){

    return  this.http.delete(this.url +'deleteArticle/'+ id);
  }

  editProduct(produit :Produit){

    return this.http.put(this.url +'updateArticle',produit);
  }

  getProduitById(id:number):Observable<Produit>{

    return this.http.get<Produit>(this.url +'searchArticle/' +id);
  }

}
