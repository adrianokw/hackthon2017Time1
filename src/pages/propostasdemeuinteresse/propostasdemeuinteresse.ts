import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrocaApi } from '../../app/api/troca.api';
import { Usuario } from '../../app/api/usuario';
import { Http } from '@angular/http'
import { Helper } from '../../app/api/helper'

@Component({
    selector: 'page-propostas-de-meu-interesse',
    templateUrl: 'propostasdemeuinteresse.html',
    providers: [Helper]

  })

export class PropostasDoMeuInteressePage {
    public interesses: any;
    public usuario: any;
    private API_URL = 'http://localhost:3000/'

    constructor(public navCtrl: NavController, public http: Http, public helper: Helper) {
      this.helper = helper;
      this.usuario = new Usuario();
      console.log(this.usuario);
      console.log(window.localStorage.getItem("usuario.id"));
      this.usuario.id = window.localStorage.getItem("usuario.id");
      this.usuario.nome = window.localStorage.getItem("usuario.nome");

      new TrocaApi(this.http).ObterInteresses(this.usuario).then(interesses => {
        this.interesses = interesses;
      });
    }
}