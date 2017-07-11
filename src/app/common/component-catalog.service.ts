import { Injectable } from '@angular/core';

import { DynamicListComponent } from '../dynamic-list/';
import { DynamicFormComponent } from '../dynamic-form';
import { DynamicDetailComponent } from '../dynamic-detail';
import { OrganizationComponent } from '../organization';
import { AdresserComponent } from '../adresser';
import { Widget } from './webpart.item';
import { Http ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import './rxjs-extensions';
import { EntityBase, DLCMSView } from '../models';
import { environment } from '../../environments/environment';

const metaDataAPI: string = environment.metaDataAPI;
const local: boolean = environment.local;

@Injectable()
export class ComponentCatalogService {
    private metaDataAPI: string;
    urlParams: URLSearchParams;
  constructor(private http: Http) {
    if (local) {
      this.metaDataAPI = '../../assets/dataNEW.json'
    } else {
        this.urlParams = new URLSearchParams(window.location.search);
        const page = this.urlParams.get('page');
        this.metaDataAPI = metaDataAPI + "/?&Where=DL_PageTitle='" + page+"'";
    }
  }

  getWidgetsByPage(page: string) {

    return <Observable<Widget>>this.http.get(this.metaDataAPI)
      .map(d => <EntityBase>d.json())
      .map(data => data.DL_ENTITYDATA)
      .flatMap(data => data.DL_CMSView)
      .map(d => {
        return this.widgetFactory(d);
      })
      .catch(this.handleError);

  }

  widgetFactory = (d: any) => {
    switch (d.DL_WebPartType.toLowerCase()) {
      case 'list':
        return new Widget(DynamicListComponent, d);
      case 'detail':
            if (d.DL_ComponentName === 'app-organization') {
                return new Widget(OrganizationComponent, d);
            } else if (d.DL_ComponentName == "app-adresser") {
                return new Widget(AdresserComponent, d);  
            } else {
            return new Widget(DynamicDetailComponent, d);
           }

      case 'form':
        return new Widget(DynamicFormComponent, d);
      default:
        return new Widget(DynamicListComponent, d);
    }
  };

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
