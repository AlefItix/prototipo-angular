import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/model/card.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  cards: Card[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.buscarCards();
  }

  buscarCards() {
    this.blogService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    })
  }
}
