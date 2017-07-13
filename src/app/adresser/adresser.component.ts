﻿import { Component, OnInit, Input ,Output, EventEmitter, ViewChild} from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { ComponentCatalogService, WebpartComponent } from '../common';
import { DLCMSView } from '../models'
import { environment } from '../../environments/environment';
import { DropdownMenuComponent } from '../common/dropdown-menu';
const baseUrl: string = environment.dataAPI;
const actionAPI: string = environment.actionsAPI;

@Component({
    selector: 'app-adresser',
    templateUrl: './adresser.component.html',
    styleUrls: ['./adresser.component.css']
})
export class AdresserComponent implements WebpartComponent, OnInit {
    @ViewChild(DropdownMenuComponent) public dd: DropdownMenuComponent;
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
        this.http.get(actionAPI)// + "?&where=DL_EntityNameForeign='" + this.data.DL_Menu + "'")
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

    gotoObjectWrapper(func: string, item) {
        console.log(func);
        let p: any[] = [];
        if (func.indexOf(',') > -1) {
            p = func.split(',');
            p.forEach((e, i) => {
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
            window.event.stopPropagation();
        }
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
    onMenuClick(event) {
        console.log(event);
        if (event) {
            const fn = new Function(event);
            return fn();
        }
    }
      setPrimary(id) {
          new Function("LOSetOrganisationAddressPrimary(" + id + ")")();
          if (window.event) {
              window.event.preventDefault();
              window.event.stopPropagation();
          }
          return false;
    }
      deleteAddress(address) {
          new Function("FEADeleteAddress(" + this.data.DL_View + ", " + address + ")")(); 
          if (window.event) {
              window.event.preventDefault();
              window.event.stopPropagation();
          }
          return false;
      }
      createDoc(id) {
          new Function("EXCreateDoc('DL_OrganisationAddress', "+id+",'http://sagssystem/Administration/Skabeloner/FEA/OrganisationLabel.dot', '', 'DL_OrganisationAddressLabelView', '', '', 1)")(); 
          if (window.event) { 
            window.event.preventDefault();
            window.event.stopPropagation();
          }
          return false;
      }
      
    public isArray = (data) => {
        return (Object.prototype.toString.call(data) === '[object Array]');
    }
}
