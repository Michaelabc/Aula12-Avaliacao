import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Servico } from '../domain/servico';

@Injectable()
export class ServicoService {

  constructor(private http: HttpClient) { }

getServicos() : Observable<Servico[]>{
  return this.http.get<Servico[]>(`https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes`)
}

}
