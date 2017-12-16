import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrocaApi } from '../../app/api/troca.api';
import { Usuario } from '../../app/api/usuario';
import { Http } from '@angular/http'

@Component({
    selector: 'page-propostas-de-meu-interesse',
    templateUrl: 'propostasdemeuinteresse.html',
  })

export class PropostasDoMeuInteressePage {
    public trocas: any;
    public usuario: any;
    private API_URL = 'http://localhost:3000/'

    constructor(public navCtrl: NavController, public http: Http) {
      let usuario = new Usuario();
      usuario.id = window.localStorage.getItem("usuario.id");
      usuario.nome = window.localStorage.getItem("usuario.nome");

      new TrocaApi(this.http).ObterInteresses(usuario).then(trocas => {
        console.log(trocas);
        this.trocas = trocas;
      });
    }
}