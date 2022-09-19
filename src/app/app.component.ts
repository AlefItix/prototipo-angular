import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prototipo-front';

  pagina : number = 0;

  trocarPagina( pag: number){
    this.pagina = pag;
  }

}
