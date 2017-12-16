import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TrocaApi {
  private API_URL = 'http://localhost:3000/'
  
  constructor(public http: Http) { 
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

  obter() {
    return this.ObterPropostas();
  }
}