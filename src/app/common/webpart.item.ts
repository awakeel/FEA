import { Type } from '@angular/core';
import { DLCMSView} from '../models';

export class Widget {
  constructor(public component: Type<any>, public data: DLCMSView) {}
}
