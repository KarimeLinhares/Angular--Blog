import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.css'],
})
export class ArticleRowComponent {
  @Input()
  Title: string = '';
  @Input()
  More: string = '';
  @Input()
  Id: string = '0';
}
