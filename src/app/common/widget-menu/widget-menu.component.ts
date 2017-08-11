import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

export interface IDictionary<TValue> {
    [id: string]: TValue;
}
@Component({
    selector: 'app-widget-menu',
    templateUrl: './widget-menu.component.html',
    styleUrls: ['./widget-menu.component.css'],
    providers: []
})
export class WidgetMenuComponent implements AfterViewInit {
    @Input() page: any;
    @Input() dataRow: any;
    @Input() menuData: any[] = [];
    @Input() menuType: string = 'row';
    @Input() menuDataLoaded = false;
    @Input() view: any;
    @Output() buttonClick = new EventEmitter<any>();
   
    constructor() {


    }
    ngAfterViewInit(): void {

        

    }
    IsString(obj) {
        return obj !== undefined && obj != null && obj.toLowerCase !== undefined;
    }
    getArgs(str) {
        if (!str) return [];
        return /\(\s*([^)]+?)\s*\)/.exec(str)[1].split(/\s*,\s*/);


    }
    checkWildCards(event,item,value) {
      
        
    }
    onItemClick(event: string, item: any) { 
        //let that = this;
        let DL_Id = '0';
        if (this.page)
          DL_Id = this.getParameterByName(this.page);
        let params = this.getArgs(event);
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
                event = event.replace(keep, "'" + item[v] + "'");
                console.log(event);
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
                console.log(DL_Id + 'dl id');
                if (!DL_Id) DL_Id = '0';
                event = event.replace(keep, DL_Id);
                console.log(event);
            } 
        });


       // localStorage.setItem('view', this.view); 

        this.buttonClick.emit(event);
        return false;
    }
    
    getQueryString() {
        const p = window.location.href.split('?');
        const keyvalues = p[1].split('=');

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
    sanitizeAndUpdate = (s: string) => {
        let urlParamV = '';
        const p = window.location.href.split('?');
        if (p.length > 1) {
            const p1 = p[1].split('=');
            urlParamV = p1[1];

        }
        console.log(urlParamV + 'sanitized widget Menu');
        if (s && s !== '') {
            let ret = '';
            if (/%/.test(s)) {
                ret = s.match(/%(.*?)%/)[1];
            };
            // this.urlParams.get(ret)
            return ret !== '' ? s.replace(`%${ret}%`, urlParamV) : '';
        }
    }
}
