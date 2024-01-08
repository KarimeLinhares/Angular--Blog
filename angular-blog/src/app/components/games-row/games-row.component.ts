import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games-row',
  templateUrl: './games-row.component.html',
  styleUrls: ['./games-row.component.css'],
})
export class GamesRowComponent {
  @Input()
  Title: string = '';
  @Input()
  More: string = '';
  @Input()
  Id: string = '0';
}
