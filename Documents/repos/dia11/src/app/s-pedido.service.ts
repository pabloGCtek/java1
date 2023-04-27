import { Injectable } from '@angular/core';
import { clasePedido } from './model/clasePedido';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SPedidoService {
 public listaPedidos:clasePedido[]=[]

  constructor() { }
  lista(){
    return of(this.listaPedidos)
  }
  insert(p:clasePedido){
    this.listaPedidos.push(p)
    alert(this.listaPedidos.length)
  }
}
