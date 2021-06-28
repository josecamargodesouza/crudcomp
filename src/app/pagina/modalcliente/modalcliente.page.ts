import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {
@Input() c: Cliente;
atualizar = false;
dados = {
  nome: '',
  genero: '',
  email: '',
};
  constructor(
    private modalCtrl: ModalController,
    private service: ClienteService
    ) { }

  ngOnInit() {
    if(this.c){
      this.atualizar = true;
      this.dados = this.c;
    }
  }

  //fecha a tela de cadastro e retorna a tela inicial
  fecharModal(){
    this.modalCtrl.dismiss();
  }

  //envia os dados de cadastro para o Banco de Dados
  enviando(form: NgForm){
    const cliente = form.value;
    if(this.atualizar){
      this.service.update(cliente, this.c.id).subscribe(response =>{
      this.modalCtrl.dismiss(response);
      });
    } else {
        this.service.create(cliente).subscribe(response => {
        this.modalCtrl.dismiss(response);
      });
    }
  }
}
