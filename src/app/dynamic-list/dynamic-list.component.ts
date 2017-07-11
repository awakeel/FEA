import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import '../common/rxjs-extensions';
import { WebpartComponent } from '../common';
import { DynamicIframeComponent } from '../dynamic-iframe';
import { DropdownMenuComponent } from '../common/dropdown-menu';

import { DLCMSView } from '../models';
import { environment } from '../../environments/environment';
const baseDataAPI: string = environment.dataAPI;
@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements WebpartComponent, OnInit {
  @ViewChild(DropdownMenuComponent) public dd: DropdownMenuComponent;
  @Input() data: any;
  private apiUrl: string;

  private entityData: any[] = [];

  public isDataLoaded: boolean;


  urlParams: URLSearchParams;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef, private http: Http) {
    this.isDataLoaded = false;

  }

  ngOnInit() {
    this.urlParams = new URLSearchParams(window.location.search);
    const where = this.data.DL_Where.replace('%DL_Id%', this.urlParams.get('DL_Id'));

    this.apiUrl = '../../assets/organisation.json';
    if (!environment.local) {
      this.apiUrl = `${baseDataAPI}${this.data.DL_View}/?where=${where}&OrderBy=${this.data.DL_OrderBy}`;
    }

    this.getData();

  }
  getData() {
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .map(d => d.DL_ENTITYDATA)
      .subscribe(d => {
        if (d[this.data.DL_View] !== undefined) {
          this.entityData = d[this.data.DL_View];
          this.isDataLoaded = true;
        }
      })
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
    // fn();
    // const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicIframeComponent);
    // const ref = this.viewContainerRef.createComponent(factory);
    // // const r = this.viewContainerRef.get()
    // (<WebpartComponent>ref.instance).data = this.data;
    // (<WebpartComponent>ref.instance).iframeSource = fn;
    // ref.changeDetectorRef.detectChanges();
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

