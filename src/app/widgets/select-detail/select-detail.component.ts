import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { DropdownMenuComponent } from '../../common/dropdown-menu';
import { ComponentCatalogService, WebpartComponent } from '../../common';
import { DLCMSView } from '../../models'
import { DataEntityService } from '../../common';
import { WidgetMenuComponent } from '../../common/widget-menu'


@Component({
    selector: 'app-select-detail',
    templateUrl: './select-detail.component.html',
    styleUrls: ['./select-detail.component.css']
})
export class SelectDetailComponent implements WebpartComponent, OnInit {
    @ViewChild(WidgetMenuComponent) hm: WidgetMenuComponent;
    @Input() data: any
    private apiUrl;
    entityData: any = [];

    menuData: any[] = [];
    menuDataLoaded: boolean;

    public isDataLoaded: boolean;
    private dataEntityService: DataEntityService;

    constructor() {
        this.isDataLoaded = false;
        this.menuDataLoaded = false;
    }
    ngOnInit() {
        this.loadData();
        this.loadMenuData();

        
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
    loadData() {
        this.isDataLoaded = true;
        this.dataEntityService.getEntityData(this.data)
            .subscribe(d => {
                this.entityData.push(d);
                this.isDataLoaded = true;
            },
            err => console.log(`${this.data.DL_WebPart} => ${err}`)),
            () => { this.isDataLoaded = true; }
    }
    loadFunction(title, id) {
        new Function(`loadentity('${title}', ${id})`)();
        if (window.event) {
            window.event.stopPropagation();
        }
        return false;
    }
    navigateFunction(title, id) {
        new Function(`EXGotoObject('${title}', ${id})`)();

        return false;
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
