import { Component, AfterViewInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Http, Response, URLSearchParams } from '@angular/http';
import { DataEntityService } from '../data-entity.service';

export interface IDictionary<TValue> {
  [id: string]: TValue;
}
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  providers: [DataEntityService]
})
export class DropdownMenuComponent implements AfterViewInit {

  @Input() config: any;

  @Output() menuClick = new EventEmitter<any>();
  menuDataLoaded: boolean;
  menuData: any[] = [];
  constructor(private dataEntityService: DataEntityService) {

  }
  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData() {

    this.dataEntityService.getMenuData(this.config)
      // .filter(d => /* d['DL_PageWidgetId'] === this.config.DL_PageWidgetId  && */ d['DL_Type'] === 'header')
      .subscribe(d => {
          if (d && d['DL_PageWidgetId'] === this.config.DL_PageWidgetId && d['DL_Type'] === 'header') {
              this.menuData.push(d);
              this.menuDataLoaded = true;
          }
      },
      err => console.log(`${this.config.DL_WebPart} => ${err}`));
  }
  onClick(event: string) {

    //let scriptScr: any;

    //let params: IDictionary<any>;
    //let p: any[] = [];

    //if (event.indexOf(';') > -1) {
    //  scriptScr = event.split(';')[0];
    //}
    //if (scriptScr && scriptScr.indexOf(':') > -1) {
    //  scriptScr = scriptScr.split(':')[1];
    //}
    //if (scriptScr && scriptScr.indexOf(',') > -1) {

    //  p = scriptScr.split(',');
    //}
    //p.forEach(e => {
    //  if (e.indexOf('%') > -1) {
    //    let s: string = e;
    //    s = s.substr(1, s.length - 2);
    //    params = {};
    //    // console.log(this.urlParams.get(s));
    //    // params[s] = this.urlParams.get(s);
      
    //  }
    //}); 

    this.menuClick.emit(event);
  }

}
