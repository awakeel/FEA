import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import './rxjs-extensions';
import { environment } from '../environments/environment';
import { DLCMSView } from './model'

const baseDataAPI: string = environment.dataAPI;

@Injectable()
export abstract class ComponentBaseDataService<T> {

  protected getServiceEndPoint(metaDataSource: any) {
    const params = new URLSearchParams(window.location.search);
    const where = metaDataSource.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
    return `${baseDataAPI}${metaDataSource.DL_View}/?where=${where}&OrderBy=${metaDataSource.DL_OrderBy}`;
  }
  abstract getData(): Observable<T>;

}
