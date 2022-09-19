import { Component, OnInit } from '@angular/core';
import { Card } from 'src/model/card.model';

@Component({
  selector: 'app-home-vagas',
  templateUrl: './home-vagas.component.html',
  styleUrls: ['./home-vagas.component.scss']
})
export class HomeVagasComponent implements OnInit {

  cardsHome: Card[] = [{ urlImagem: '../../assets/img/card.png', tituloCard: 'Desenvolvedor Java', descricaoCard: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusantium, dolorem et quae sed ullam, voluptates illum quam obcaecati necessitatibus quod animi delectus incidunt impedit est ut voluptate quaerat fugit.' },
  { urlImagem: '../../assets/img/card.png', tituloCard: 'Desenvolvedor Python', descricaoCard: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusantium, dolorem et quae sed ullam, voluptates illum quam obcaecati necessitatibus quod animi delectus incidunt impedit est ut voluptate quaerat fugit.' },
  { urlImagem: '../../assets/img/card.png', tituloCard: 'Desenvolvedor React', descricaoCard: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusantium, dolorem et quae sed ullam, voluptates illum quam obcaecati necessitatibus quod animi delectus incidunt impedit est ut voluptate quaerat fugit.' }];

  constructor() { }

  ngOnInit(): void {
  }

}
