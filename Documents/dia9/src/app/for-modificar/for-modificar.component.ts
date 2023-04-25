import { Component } from '@angular/core';
import { claseCurso, niveles } from '../model/claseCurso';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceCursosService } from '../service-cursos.service';
@Component({
  selector: 'app-for-modificar',
  templateUrl: './for-modificar.component.html',
  styleUrls: ['./for-modificar.component.css']
})
export class ForModificarComponent {
  nombre:string=""
  horas:number=0
  nivel:string=""
  id:number | undefined;
  idAux:any
  constructor(private rutas:Router, private activarRutas:ActivatedRoute, public curservice:ServiceCursosService){}
  ngOnInit():void{
    this.id=this.activarRutas.snapshot.params['id']
    this.idAux = this.id
  }
  modificar():void{
    this.curservice.update(new claseCurso(Number(this.id),this.nombre,this.horas,this.nivel))
    this.rutas.navigate([""])
  }
  crear():void{
    if( typeof this.id === undefined){}
    else{    this.curservice.create(new claseCurso(Number(this.id),this.nombre,this.horas,this.nivel))
      this.rutas.navigate([""])
    }

  }
}
