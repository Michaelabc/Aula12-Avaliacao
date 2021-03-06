import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicoService } from './services/servico.service';
import { ServicoComponent } from './servico/servico.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ServicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ClienteService, ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }