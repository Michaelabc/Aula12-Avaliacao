import { Component, OnInit } from '@angular/core';
import { Servico } from '../domain/servico';
import { ServicoService } from '../services/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos : Servico[];

  constructor(private servicoService: ServicoService ) { 
    this.getServicos();
  }

  ngOnInit() {
  }

getServicos(){
  this.servicoService.getServicos()
  .subscribe(response => {
    this.servicos = response;
    console.log(response)
  })
}

}
