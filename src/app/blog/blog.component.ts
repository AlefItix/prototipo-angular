import { Component, OnInit } from '@angular/core';
import { Card } from 'src/model/card.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  cards: Card[] = [{ urlImagem: '../../assets/img/card-blog-1.png', tituloCard: 'Um título aleatório', descricaoCard: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusantium, dolorem et quae sed ullam, voluptates illum quam obcaecati necessitatibus quod animi delectus incidunt impedit est ut voluptate quaerat fugit.' },
  { urlImagem: '../../assets/img/card-blog-2.png', tituloCard: 'Outro título aleatório', descricaoCard: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusantium, dolorem et quae sed ullam, voluptates illum quam obcaecati necessitatibus quod animi delectus incidunt impedit est ut voluptate quaerat fugit.' },
  { urlImagem: '../../assets/img/card-blog-3.png', tituloCard: 'Mais um título aleatório', descricaoCard: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusantium, dolorem et quae sed ullam, voluptates illum quam obcaecati necessitatibus quod animi delectus incidunt impedit est ut voluptate quaerat fugit.' }];

  constructor() { }

  ngOnInit(): void {
  }

}
