import { Component, Input } from '@angular/core';
import {WebpartComponent} from '../webpart'

@Component({
  selector: 'app-dynamic-detail',
  templateUrl: './dynamic-detail.component.html',
  styleUrls: ['./dynamic-detail.component.css']
})
export class DynamicDetailComponent implements WebpartComponent {

  @Input() data: any;

}
