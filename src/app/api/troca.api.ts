import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Usuario } from '../../app/api/usuario'
@Injectable()
export class TrocaApi {
  private API_URL = 'http://localhost:3000/'
  
  constructor(public http: Http) { 
      this.http = http;
  }

  ObterPropostas(){
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'obter';
      this.http.get(url).subscribe((result: any) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json());
      });
    });
  }

  ObterInteresses(usuario: Usuario){
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'interesses?id=' + usuario.id;
      console.log(url);
      this.http.get(url).subscribe((result: any) => {
          resolve(result.json());
      }, (error) => {
        reject(error.json());
      });
    });
  }

  obter() {
    return this.ObterPropostas();
  }
}