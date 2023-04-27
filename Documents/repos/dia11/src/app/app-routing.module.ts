import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

const routes: Routes = [
  {path: '', component: FormPedidoComponent,
  children: [
    { path: 'detalle/:id', component: DetallePedidoComponent },
 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
