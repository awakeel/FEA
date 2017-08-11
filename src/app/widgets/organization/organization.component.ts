import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { DropdownMenuComponent } from '../../common/dropdown-menu';
import { ComponentCatalogService, WebpartComponent } from '../../common';
import { DLCMSView } from '../../models'
import { DataEntityService } from '../../common';
import { WidgetMenuComponent } from '../../common/widget-menu';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements WebpartComponent, OnInit {
    @ViewChild(WidgetMenuComponent) hm: WidgetMenuComponent;
  @Input() data: any
  private apiUrl;
  entityData: any = [];


  public isDataLoaded: boolean;
  private dataEntityService: DataEntityService;
  menuData: any[] = [];
  menuDataLoaded: boolean;
  constructor() {
    this.isDataLoaded = false;
    this.menuDataLoaded = false;
  }
  ngOnInit() {
      console.log('Organisation is loaded');
      this.loadData();
      this.loadMenuData();
       
  }

  loadData() {
      this.isDataLoaded = true;
      this.entityData = [];
      this.dataEntityService.getEntityData(this.data)
          .subscribe(d => {
              this.entityData.push(d); 
          },
          err => { console.log(`${this.data.DL_WebPart} => ${err}`); }),
          () => {  }
  }
  
  getParameterByName(name: any) {
      let url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  loadFunction(id) {
      new Function("loadentity('DL_Organisation', "+id+")")();
  }
  setFunction(id, type, modified) {
      console.log(id);
      new Function("SetEntityItemValue('DL_Organisation', " + id + ",'" + modified +"', 'DL_Add'," + type + ")")();
      let that = this;
      setTimeout(function () {
          that.loadData();
      }, 300);
  } 
  onMenuClick(event) {
 
    if (event) {
      const fn = new Function(event);
      return fn();
    }
  }
  onButtonClick(event) {
      console.log(event + ' in dynamic list');
      new Function(event)();
  }
  onActionClick(event, id) {
      //const k = event.replace('DL_Id', id); 
      //if (k) {
      //    const fn = new Function(k);
      //    return fn();
      //}
      new Function(event)();
  }

  isArray = (data) => {
      return (Object.prototype.toString.call(data) === '[object Array]');
  }

  filterByMenuType = (type) => {
      //console.log(type);
      if (type !== undefined && type) {
          if (this.menuData)
              return this.menuData.filter(t => t.DL_Type == type);
      }
  }


  loadMenuData() {

      this.dataEntityService.getMenuData(this.data)
          //.filter(d => /* d['DL_PageWidgetId'] === this.config.DL_PageWidgetId  && */ d['DL_Type'] === 'row')
          .subscribe(d => {
              if (d && d['DL_PageWidgetId'] === this.data.DL_PageWidgetId) {
                  this.menuData.push(d);
                  this.menuDataLoaded = true;
              }
          },
          err => console.log(`${this.data.DL_WebPart} => ${err}`));
  }
}
