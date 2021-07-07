import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  verificar(){
    //verificar se email é disponível
    //verificar se senha estão iguais
    //chamar funcao de ir pra pagina inicial do usuario(pagina de carrinhos)
    this.showlistaCompras();

  }
  showlistaCompras(){
    this.navCtrl.navigateForward('lista-compras')
  }
}

