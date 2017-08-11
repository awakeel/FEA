import { Injectable } from '@angular/core';

import { DynamicListComponent } from '../widgets/dynamic-list';
import { DynamicFormComponent } from '../widgets/dynamic-form';
import { DynamicDetailComponent } from '../widgets/dynamic-detail';
import { DynamicIframeComponent } from '../widgets/dynamic-iframe';
import { OrganizationComponent } from '../widgets/organization';
import { PersonorganisationComponent } from '../widgets/personorganisation';
import { NameListComponent } from '../widgets/name-list';
import { SelectDetailComponent } from '../widgets/select-detail'; 
import { Widget } from './webpart.item';
import { Http, URLSearchParams } from '@angular/http';
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
    this.metaDataAPI = '../../assets/metadata.json'
    if (!local) {
       // this.urlParams = new URLSearchParams(window.location.search); 
        let page:any  = window.location.href.split('?')[0].split("/");
      //const page = this.urlParams.get('page');
        if (page.indexOf("#")>-1) {
            page = page[page.length - 1].replace("#", '');
        } else {
            page = page[page.length - 1];
        }


        this.metaDataAPI = metaDataAPI + "/?&Where=DL_PageTitle='" + page + "'&OrderBy=DL_Sequence&date=" + new Date().getTime();
      //this.metaDataAPI = `${metaDataAPI}/?&Where=DL_PageTitle=${this.urlParams.get('page')}`;
    }
  }

  getWidgetsByPage(page: string) {
    let that = this;
    return <Observable<Widget>>this.http.get(this.metaDataAPI)
      .map(d => <EntityBase>d.json())
      .map(data => data.DL_ENTITYDATA)
        .flatMap(data => { 
            if (that.isArray(data.DL_CMSView)) {
                return data.DL_CMSView;
            } else {
                return <any>[data.DL_CMSView];
            } 
           })
     // .take(5)
      .map(d => {
        return this.widgetFactory(d);
      })
      .catch(this.handleError);

  }
  isArray = (data) => {
      return (Object.prototype.toString.call(data) === '[object Array]');
  }
  widgetFactory = (d: any) => {
      let widget: any = null;
      if (d.DL_WebPartType) {
          switch (d.DL_WebPartType.trim().toLowerCase()) {
              case 'list':
                  widget = new Widget(DynamicListComponent, d);
                  break;
              case 'detail':
                  let componentName = '';

                  if (d.DL_ComponentName) {
                      componentName = d.DL_ComponentName.trim().toLowerCase();
                  }
                  console.log(componentName);
                  if (componentName === 'app-organization') {
                      widget = new Widget(OrganizationComponent, d);
                  }  else if (componentName === 'dynamiciframewidget') {
                      widget = new Widget(DynamicIframeComponent, d);

                  } else if (componentName === 'app-personorganisation') {
                      widget = new Widget(PersonorganisationComponent, d);
                  } else if (componentName === 'app-name-list') {
                      widget = new Widget(NameListComponent, d);
                  } else if (componentName === 'app-select-list') {
                      widget = new Widget(SelectDetailComponent, d);
                  } else {
                      widget = new Widget(DynamicDetailComponent, d);
                  };
                  break;
              case 'form':
                  widget = new Widget(DynamicFormComponent, d);
                  break;
              default:
                  widget = new Widget(DynamicListComponent, d);
          }
          return widget;
      }
  };

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
