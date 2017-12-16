import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrocaApi } from '../../app/api/troca.api';
import { Usuario } from '../../app/api/usuario';
import { Http } from '@angular/http'

@Component({
    selector: 'page-detalhes-da-troca',
    templateUrl: 'detalhesDaTroca.html',
  })

export class DetalhesDaTroca {
    public troca: any;
    public usuario: any;
    private API_URL = 'http://localhost:3000/'

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.troca = navParams.get('item');
        this.usuario = navParams.get('usuario');
    }

    MarcarInteresse(proposta: any){
        let id = window.localStorage.getItem("usuario.id");
        let nome = window.localStorage.getItem("usuario.nome");
  
        
        return new Promise((resolve, reject) => {
            let url = this.API_URL + 'MarcarInteresse';
            let parametros = { id: proposta.Id, usuario: {id: id, nome: nome} };

            this.http.post(url, parametros).subscribe((result: any) => {
            }, (error) => {
              reject(error);
            });
          });
    }
}