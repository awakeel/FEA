import { Component, Input } from '@angular/core';
import { WebpartComponent, Widget } from '../common'

@Component({
  selector: 'app-dynamic-detail',
  templateUrl: './dynamic-detail.component.html',
  styleUrls: ['./dynamic-detail.component.css']
})
export class DynamicDetailComponent implements WebpartComponent {

  @Input() data: any;

}
