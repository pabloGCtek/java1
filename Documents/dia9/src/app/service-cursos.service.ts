import { Injectable } from '@angular/core';
import { claseCurso, niveles } from './model/claseCurso';

@Injectable({
  providedIn: 'root'
})
export class ServiceCursosService {
  listaCursos:claseCurso[]= [new claseCurso(1,"SQL",80,niveles.intermedio),
              new claseCurso(2,"git",50,niveles.iniciacion),new claseCurso(3,"angular",100,niveles.avanzado)]
  constructor() { }
  ngOnInit():void{
    this.listaCursos.push(new claseCurso(1,"SQL",80,2))
    this.listaCursos.push(new claseCurso(2,"git",50,1))
    this.listaCursos.push(new claseCurso(3,"angular",100,3))
  }

  update(curso:claseCurso){
   
    let f = this.listaCursos.find(f => f.id === curso.id)
    if (f != undefined){
      this.listaCursos.splice(this.listaCursos.indexOf(f),1, curso)
    }else{
    }
  }
  create(curso:claseCurso){
    let f = this.listaCursos.find(f => f.id === curso.id)
    if (f == undefined){
      this.listaCursos.push(curso)
    }else{
      alert("ya existe")
    }
  }
}
