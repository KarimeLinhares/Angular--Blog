import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input()
  PhotoCover: string = '';
  @Input()
  Title: string = '';
  @Input()
  Id: string = '0';
}
