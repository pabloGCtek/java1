import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { claseDetPedido } from '../model/caseDetPedido';
import { SPedidoService } from '../s-pedido.service';
import { SDetalleprodService } from '../s-detalleprod.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent {
  form: FormGroup
  producto:claseDetPedido
  ngOnInit(){
    this.form = new FormGroup({
      idPed: new FormControl(this.activateRutas.snapshot.params['id']),
      idProd: new FormControl(),
      Cantidad: new FormControl(),
  })
  }
  constructor(private rutas:Router, private activateRutas:ActivatedRoute, public sProd:SDetalleprodService){} 
  @Output() messageEvent = new EventEmitter<claseDetPedido>()
  
  submit(){
    this.producto = new claseDetPedido(this.form.get("idProd")?.value ,this.form.get("idPed")?.value ,this.form.get("cant")?.value )
    this.sProd.listaAux.push(this.producto)
    this.rutas.navigate([""])
  }
}
