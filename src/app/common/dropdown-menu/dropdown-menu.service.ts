import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';

import { environment } from '../../../environments/environment';
const baseActionsAPI: string = environment.actionsAPI;

@Injectable()
export class DropdownMenuService {

  _actions: Observable<any> = null;
  apiUrl: string;


  constructor(private http: Http) {
    this.apiUrl = '../../assets/actions.json';
    if (!environment.local) {
      this.apiUrl = baseActionsAPI
    }

  }

  getDropDownMenuData() {
    if (!this._actions) {

      this._actions = this.http.get(this.apiUrl)
        .map(res => res.json())
        .map(d => d.DL_ENTITYDATA)
        .flatMap(m => m['DL_Action'])
        .publishReplay(1)
        .refCount();
    }
    return this._actions;

  }
  clearCache() {
    this._actions = null;
  }
}

