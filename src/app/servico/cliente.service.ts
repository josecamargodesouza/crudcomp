import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: string;
  nome: string;
  genero: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  //ciração da variável para alocação do endereço da aplicação
  private url = 'http://127.0.0.1/php/cliente';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url + '/' + id);
  }

  create(cliente: Cliente){
    return this.http.post(this.url, cliente);
  }

  update(cliente: Cliente, id: any){
    return this.http.put(this.url + '/' + id, cliente);
  }
}
