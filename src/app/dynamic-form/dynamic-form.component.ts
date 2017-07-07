import { Component, Input } from '@angular/core';
import { WebpartComponent } from '../webpart';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements WebpartComponent {

  @Input() data: any;
}
