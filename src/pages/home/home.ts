import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrocaApi } from '../../app/api/troca.api';
import { DetalhesDaTroca } from '../detalhesDaTroca/detalhesDaTroca';
import { Serializer } from '@angular/compiler/src/i18n/serializers/serializer';
import { Http } from '@angular/http'
import { Helper } from '../../app/api/helper'
import { Usuario } from '../../app/api/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Helper]
})

export class HomePage {
  trocas: any;
  public mostrarBarraDePesquisa: boolean = false;
  usuario: any;

  constructor(public navCtrl: NavController, public http: Http, public helper: Helper) {
    this.usuario = new Usuario();
    new TrocaApi(http).obter().then(trocas => {
      window.localStorage.setItem("usuario.id", this.usuario.id);
      window.localStorage.setItem("usuario.nome", this.usuario.nome);
      this.trocas = trocas;
      this.helper = helper;
    });
  }

  pesquisar(ev: any) {
    // let val = ev.target.value;
  }

  itemSelected(troca: string, usuario: Usuario) {
    this.navCtrl.push(DetalhesDaTroca,{
      item: troca,
    });
  }

  public togglePesquisa(): void {
    this.mostrarBarraDePesquisa = !this.mostrarBarraDePesquisa;
  }
}
