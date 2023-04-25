import { Component } from '@angular/core';
import { ServiceCursosService } from '../service-cursos.service';
import { niveles } from '../model/claseCurso';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  constructor(public serviceCursos: ServiceCursosService,private route: ActivatedRoute,
    private router: Router  ) { }
  enum: typeof niveles = niveles;

  modificar(event: { srcElement: any; }):void{
    var target =event.srcElement;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    
    this.router.navigate(["modificar", value]);
  }
}
