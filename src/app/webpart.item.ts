import { Type } from '@angular/core';
import { DLCMSView} from './model';

export class Widget {
  constructor(public component: Type<any>, public data: DLCMSView) {}
}
