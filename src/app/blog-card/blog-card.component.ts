import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/model/card.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() card: Card = {urlImagem: '', tituloCard: '', descricaoCard: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
