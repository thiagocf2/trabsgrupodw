import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController){}

  showTelaCadastro(){
    this.navCtrl.navigateForward('cadastro');
  }
  verificar(){
    //valida informações de login e senha

    this.showlistaCompras();
  }
  showlistaCompras(){
    this.navCtrl.navigateForward('lista-compras');
  }

}
