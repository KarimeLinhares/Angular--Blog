import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input()
  Title: string = '';
  @Input()
  More: string = '';
  @Input()
  PhotoCover1: string = '';
  @Input()
  PhotoCover2: string = '';
  @Input()
  PhotoCover3: string = '';
  @Input()
  PhotoCover4: string = '';
  @Input()
  CardTitle1: string = '';
  @Input()
  CardTitle2: string = '';
  @Input()
  CardTitle3: string = '';
  @Input()
  CardTitle4: string = '';
  @Input()
  Id: string = '0';
}
