import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ForModificarComponent } from './for-modificar/for-modificar.component';

const routes: Routes = [
  {path: '', component: ListaComponent,
  children: [
    { path: 'formulario/:id', component: ForModificarComponent },
    { path: 'formulario', component: ForModificarComponent }
 ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
