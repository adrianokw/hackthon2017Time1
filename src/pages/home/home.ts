import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrocaApi } from '../../app/api/troca.api';
import { DetalhesDaTroca } from '../detalhesDaTroca/detalhesDaTroca';
import { Searchbar } from 'ionic-angular';
import { Serializer } from '@angular/compiler/src/i18n/serializers/serializer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trocas: any;
  public mostrarBarraDePesquisa: boolean = false;
  public searchbarElRef: Searchbar;

  constructor(public navCtrl: NavController) {
    this.trocas = new TrocaApi().obter();
  }

  pesquisar(ev: any) {
    let val = ev.target.value;
  }

  obterFoto(fotos: any[]) {
    if(fotos) {
      let fotoPrincipal = fotos.find(foto => foto.principal)
      return fotoPrincipal.url
    }
    return '';
  }

  itemSelected(item: string) {
    this.navCtrl.push(DetalhesDaTroca,{
      item: item
    });
  }

  public togglePesquisa(): void {
    this.mostrarBarraDePesquisa = !this.mostrarBarraDePesquisa;
  }
}
