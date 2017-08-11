import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// import { DomSanitizer } from '@angular/platform-browser';
import { DynamicIframeComponent } from '../dynamic-iframe';
import { DropdownMenuComponent } from '../../common/dropdown-menu';
import { WidgetMenuComponent } from '../../common/widget-menu'
import { DataEntityService } from '../../common';
import { Observable } from 'rxjs/Rx';
import '../../common/rxjs-extensions';
import { WebpartComponent } from '../../common';

import { DLCMSView } from '../../models';

export interface IDictionary<TValue> {
    [id: string]: TValue;
}

@Component({
    selector: 'app-dynamic-list',
    host: { '[id]': 'id' },
    templateUrl: './dynamic-list.component.html',
    styleUrls: ['./dynamic-list.component.css'],
})
export class DynamicListComponent implements WebpartComponent, OnInit {
    //@ViewChild(DropdownMenuComponent) dd: DropdownMenuComponent;
    @ViewChild(WidgetMenuComponent) hm: WidgetMenuComponent;
    @ViewChild(WidgetMenuComponent) lm: WidgetMenuComponent;
    @Input() data: any;
    private apiUrl: string;
    id: string;
    private entityData: any[] = [];
    private widgetActions: any[] = [];
    private hasWidgetMenu: boolean;
    public isDataLoaded: boolean;

    menuData: any[] = [];
    menuDataLoaded: boolean;
    private dataEntityService: DataEntityService
    randomText: string;
    public nodata: string;
    constructor() {
        this.isDataLoaded = false;
        this.hasWidgetMenu = false;
        this.randomText = Math.random().toString(3);
        this.nodata = '';
        this.menuDataLoaded = false;
       
    } 
    ngOnInit() {
        this.entityData = []; 
        this.loadData();
        this.loadMenuData();
        this.id = this.data.DL_View;
        // this.hasWidgetMenu = this.data['DL_RelatedActions'] !== undefined
    }

    public loadData() {
        this.entityData = [];
        this.isDataLoaded = true;
        this.dataEntityService.getEntityData(this.data)
            .subscribe(d => {
                if (d) {
                    this.isDataLoaded = true;
                    this.entityData.push(d);
                }
            },
            err => { console.log(`${this.data.DL_WebPart} => ${err}`); },
            () => { if (!this.entityData.length) { this.nodata = `Der er ingen ${this.data.DL_WebPart}`;} });
          
    }

    getTitle = (s) => {
        return s.split("_")[1];
    }
    getColumns = (s) => {
        if (s && s !== '') {
            if (s.indexOf(',') > -1) {
                return s.split(',');
            }
            return [s];
        }
       
    }
    gotoObjectWrapper(func: string, item) {

        // EXGotoObject('DL_Organisation',DL_Organisation)
        // EXLoadSearch(DL_Id, DL_Title)
         
        let params = this.getArgs(func);
        params.forEach((v) => { 
            const percentEx = /\%(.*?)\%/;
            let d = v.match(percentEx);
            let keep = '';
            let found = false
            if (d !== null) { 
                v = d.pop();
                found = true;
                keep = `%${v}%`;
            }
            console.log(keep + v);
            if (found) { 
                func = func.replace(keep, "'"+item[v]+"'");
                console.log(func);
            }
            const hash = /\#(.*?)\#/;
            d = v.match(hash);
            keep = '';
            found = false
            if (d !== null) {
                v = d.pop();
                found = true;
                keep = `#${v}#`;
            }
            console.log(keep + v);
            if (found) {
                console.log(keep);
                console.log(this.getParameterByName(this.data.DL_Page));
                func = func.replace(keep, this.getParameterByName(this.data.DL_Page));
                console.log(event);
            } 
        });
        console.log(func);
        const fn = new Function(func);

        fn();

        return false;
    }
    getParameterByName(name: any) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) { return null };
        if (!results[2]) { return '' };
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    IsString(obj) {
        return obj !== undefined && obj != null && obj.toLowerCase !== undefined;
    }
    getArgs(str) {
        if (!str) return [];
        return /\(\s*([^)]+?)\s*\)/.exec(str)[1].split(/\s*,\s*/);
       
          
    }
    onActionClick(event, id) {
        //const k = event.replace('DL_Id', id); 
        //if (k) {
        //    const fn = new Function(k);
        //    return fn();
        //}
        new Function(event)();
    }
    onMenuClick(event) {
        new Function(event)();
    }
    refresh() {
      
        this.loadData();
    }
    onButtonClick(event) {
      
        new Function(event)();
    }

    isArray = (data) => {
        return (Object.prototype.toString.call(data) === '[object Array]');
    }

    filterByMenuType = (type) => {
        
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
    checkPrimary(row) {
        if (row.DL_IsPrimaryAddress && row.DL_IsPrimaryAddress == '1') return true;
        else if (row.DL_IsPrimaryOrganisation && row.DL_IsPrimaryOrganisation == '1') return true;
        else if (row.DL_SpecificAddress && row.DL_SpecificAddress == '1') return true;
        else return false;
    }

}

