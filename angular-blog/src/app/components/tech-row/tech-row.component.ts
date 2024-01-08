import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-row',
  templateUrl: './tech-row.component.html',
  styleUrls: ['./tech-row.component.css'],
})
export class TechRowComponent {
  @Input()
  Title: string = '';
  @Input()
  More: string = '';
  @Input()
  Id: string = '0';
}
