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

    this.loadData();


  }
  getData() {

      const count = 5;
      return this.http.get(this.apiUrl)
          .map(res => res.json())
          .map(d => d.DL_ENTITYDATA)
          .flatMap(d => {
              if (d[this.data.DL_View] !== undefined) {
                  console.log(d[this.data.DL_View.trim()]);
                  return this.isArray(d[this.data.DL_View.trim()])
                      ? d[this.data.DL_View.trim()] : [d[this.data.DL_View.trim()]];
              }
          })
      // .take(count)
      // .distinctUntilChanged();
  }

  loadData() {
      this.getData()
          .subscribe(d => {
              this.entityData.push(d);
              this.isDataLoaded = true;
          })
  }


  getVisibleColumns = (s) => {
      if (s && s !== '') {
          return s.split(',');
      }
      console.log(s);
  }
  gotoObjectWrapper(func: string, item) {
      console.log(func);

      if (func.indexOf(',') > -1) {

          func.split(',').forEach((e, i) => {
              if (i > 0) {
                  if (e.indexOf(')') > -1) {
                      const s = e.replace(')', '').trim();
                      func = func.replace(s, item[s]);
                  } else {
                      func = func.replace(e, item[e]);
                  }
              }
          })
      }

      console.log(func);
      const fn = new Function(func);

      if (window.event) {
          window.event.preventDefault();
      }
      fn();

      return false;
  }
  onMenuClick(event) {
      console.clear();
      console.log(event);
      if (event) {
          const fn = new Function(event);
          return fn();
      }
  }
  refresh() {
      console.clear();
      this.getData();

  }
  isArray = (data) => {
      return (Object.prototype.toString.call(data) === '[object Array]');
  }
}