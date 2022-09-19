import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() trocaPagina: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  trocarPagina(pag: number){
    this.trocaPagina.emit(pag);  }
}
