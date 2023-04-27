import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { clasePedido } from '../model/clasePedido';
import { SPedidoService } from '../s-pedido.service';
import { SDetalleprodService } from '../s-detalleprod.service';
import { claseDetPedido } from '../model/caseDetPedido';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent {
  form: FormGroup
  pedido:clasePedido
  listaProductos:claseDetPedido[]=[]
  ngOnInit(){
    this.recarga()
  }
  recarga(){
    this.sPed.lista().subscribe(v =>
      this.form = new FormGroup({
        idPed: new FormControl(v.length),
        idCliente: new FormControl(),
        nombreCliente: new FormControl(),
        fPago: new FormControl(),
        direccion: new FormControl()
    })
      )
  }
  constructor(private rutas:Router, private activateRutas:ActivatedRoute, public sPed:SPedidoService, public sProd: SDetalleprodService){} 

  aProduc(){
    this.rutas.navigate(["detalle",this.form.get("idPed")?.value ]);
  }
  
  submit(){
    this.pedido= new clasePedido(this.form.get("idPed")?.value ,this.form.get("idCliente")?.value ,this.form.get("nombreCliente")?.value,
    this.form.get("fPago")?.value,this.form.get("direccion")?.value)
    this.sPed.insert(this.pedido)
    this.sProd.insert()
    this.recarga()
  }

  receiveMessage(producto:claseDetPedido) {
    this.listaProductos.push(producto)
  }
}
