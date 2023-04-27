import { Injectable } from '@angular/core';
import { claseDetPedido } from './model/caseDetPedido';

@Injectable({
  providedIn: 'root'
})
export class SDetalleprodService {

  listaProductos:claseDetPedido[]=[]
  listaAux:claseDetPedido[]=[]
  constructor() { }

  insert(){
    this.listaAux.forEach(prod => {
      this.listaProductos.push(prod)
      console.log("Producto con Id: "+prod.id)
    });
    this.listaAux=[]
  }
}
