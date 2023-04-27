import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPedidoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
