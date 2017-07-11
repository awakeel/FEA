﻿import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { ComponentCatalogService, WebpartComponent } from '../common';
import { DLCMSView } from '../models'
import { environment } from '../../environments/environment';

const baseUrl: string = environment.dataAPI;
const actionAPI: string = environment.actionAPI;

@Component({
    selector: 'app-adresser',
    templateUrl: './adresser.component.html',
    styleUrls: ['./adresser.component.css']
})
export class AdresserComponent implements WebpartComponent, OnInit {
    @Input() data: any
    private apiUrl;
    entityData: any = [];


    private menuData: any[] = [];
    public isDataLoaded: boolean;
    public isMenuLoaded: boolean;
    urlParams: URLSearchParams;

    constructor(private http: Http) {
        this.isDataLoaded = false;
        this.isMenuLoaded = false;
    }
    ngOnInit() {
        const params = new URLSearchParams(window.location.search);
        const where = this.data.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
        this.apiUrl = `${baseUrl}${this.data.DL_View}/?where=${where}&OrderBy=${this.data.DL_OrderBy}`;

        this.getData();

    }
    getData() {
        this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(data => {
            if (data.DL_ENTITYDATA) {
                this.entityData = data.DL_ENTITYDATA[this.data.DL_View];
            } else {
                this.entityData = [];
            }
        });
    }

    getActionData() {
        this.http.get(actionAPI)
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

    gotoObjectWrapper(func: string, id) {
        const i = func.indexOf(',');
        const s = func.substr(i + 1, func.length - i - 2)
        const fn = new Function(func.replace(s, id));

        if (window.event)
            window.event.preventDefault();
        fn();

        return false;
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
    public isArray = (data) => {
        return (Object.prototype.toString.call(data) === '[object Array]');
    }
}
