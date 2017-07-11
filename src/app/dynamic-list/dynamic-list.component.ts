import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicIframeComponent } from '../dynamic-iframe';
import { DropdownMenuComponent } from '../common/dropdown-menu';
import { Observable } from 'rxjs/Rx';
import '../common/rxjs-extensions';
import { WebpartComponent } from '../common';

import { DLCMSView } from '../models';
import { environment } from '../../environments/environment';
const baseDataAPI: string = environment.dataAPI;
const actionAPI: string = environment.actionsAPI;
@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css'],

})
export class DynamicListComponent implements WebpartComponent, OnInit {
    @ViewChild(DropdownMenuComponent) public dd: DropdownMenuComponent;
  @Input() data: any;
  private apiUrl: string;

  private entityData: any[] = [];
  private menuData: any[] = [];
  public isDataLoaded: boolean;
  public isMenuLoaded: boolean;

  urlParams: URLSearchParams;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
   private viewContainerRef: ViewContainerRef, private http: Http) {
    this.isDataLoaded = false;
    this.isMenuLoaded = false;
    // this.listService.getData();
  }

  ngOnInit() {
    this.urlParams = new URLSearchParams(window.location.search);
    const where = this.data.DL_Where.replace('%DL_Id%', this.urlParams.get('DL_Id'));
    if (environment.local) {
      // console.log(this.data.DL_View);
      this.apiUrl = '../../assets/organisation.json';
    } else {
      this.apiUrl = `${baseDataAPI}${this.data.DL_View}/?where=${where}&OrderBy=${this.data.DL_OrderBy}`;
    }

     this.getData();
 

    this.getActionData();

  }
  getData() {
      return this.http.get(this.apiUrl)
      .map(res => res.json())
      .map(d => d.DL_ENTITYDATA)
      .subscribe(d => {
        if (d[this.data.DL_View] !== undefined) {
            this.entityData = d[this.data.DL_View];
            console.log(this.entityData);
          this.isDataLoaded = true;
        }
      })
  }

  getActionData() {
      this.menuData = [];
      this.http.get(actionAPI + "?&where=DL_EntityNameForeign='" + this.data.DL_Menu + "'")
      .map(res => res.json())
      .map(d => d.DL_ENTITYDATA)
          .flatMap(m => m['DL_Action']) 
      .filter(m => m['DL_EntityNameForeign'] === this.data['DL_Menu'])
      .subscribe(m => {
        // console.log(m['DL_EntityNameForeign']);
        if (m['DL_Title'] !== undefined && m['DL_Title'] !== null && m['DL_Title'] !== '') {
          m['DL_Action'] = this.sanitizeAndUpdate(m['DL_Action']);
          this.menuData.push(m); 
          this.isMenuLoaded = true;
        }
      });
  }

  sanitizeAndUpdate = (s: string) => {
    if (s && s !== '') {
      let ret = '';
      if (/%/.test(s)) {
        ret = s.match(/%(.*?)%/)[1];
      };
      return ret !== '' ? s.replace(`%${ret}%`, this.urlParams.get(ret)) : '';
    }
  }

  getVisibleColumns = (s) => {
    if (s && s !== '') {
      return s.split(',');
    }
    console.log(s);
  }
  gotoObjectWrapper(func: string, id) {
       const i = func.indexOf(',');
      const s = func.substr(i + 1, func.length - i - 2)
      const fn = new Function(func.replace(s, id));
      
      if (window.event)
          window.event.preventDefault();
      fn();
     
      return false;
  }
  onMenuClick(event) {
           console.log(event);
         if (event) {
             const fn = new Function(event);
           return fn();
            }
  }
  public isArray = (data) => {
      return (Object.prototype.toString.call(data) === '[object Array]');
  }
}

