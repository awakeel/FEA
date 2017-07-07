import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import '../rxjs-extensions';
import { W, DLCMSView } from '../model';

import { ComponentBaseDataService } from '../component-base-data.service'

@Injectable()
export class DynamicListService extends ComponentBaseDataService<W> {
  private widgetData: DLCMSView;
  constructor(private http: Http) {
    super();
  }

  getData() {
    return <Observable<W>>this.http.get(this.getServiceEndPoint(this.widgetData))
      .map((res) => <W>res.json());
  }

}
