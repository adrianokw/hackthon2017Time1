import { Injectable } from '@angular/core'

@Injectable()
export class Helper {
    obterFoto(fotos: any[]) {
        if(fotos) {
          let fotoPrincipal = fotos.find(foto => foto.principal);
          return fotoPrincipal.url;
        }
        return '';
    }
}