import { Card } from './../../model/card.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input() card: Card = { urlImagem: '', tituloCard: '', descricaoCard: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
