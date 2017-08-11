import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import './rxjs-extensions';
import { environment } from '../../environments/environment';
import { DLCMSView } from '../models'

const baseDataAPI: string = environment.dataAPI;
const baseDataAPIProcedure: string = environment.dataAPIProcedure;

@Injectable()
export class DataEntityService {
    _actions: Observable<any> = null;

    constructor(private http: Http) { }

    public getEntityData(data, page?: number, records?: number): Observable<any> {
        const apiUrl = this.buildDataUri(data);
      
        return this.http.get(apiUrl)
            .map(res => res.json())
            .map(d => d.DL_ENTITYDATA)
            .flatMap(d => {
                if ( d && d[data.DL_View]) {
                    return this.isArray(d[data.DL_View.trim()])
                        ? d[data.DL_View.trim()] : [d[data.DL_View.trim()]];
                } else {
                    return [];
                }
            });
        // .take(count)
        // .distinctUntilChanged();
    }
    buildDataUri = (config) => {
        let DL_Id = this.getParameterByName(config.DL_Page);
        if (!DL_Id)
            DL_Id = '0';
        const where = config.DL_Where.replace('%' + config.DL_Page + '%', DL_Id);
        let orderBy = config.DL_OrderBy;
        if (!config.DL_OrderBy)
            orderBy = '';
        let apiUrl = '../../assets/organisation.json';

        if (!environment.local) {
            
            if (!config.DL_EntityType) {   
                apiUrl = `${baseDataAPI}${config.DL_View}/?where=${where}&OrderBy=${orderBy}&date=` + new Date().getTime();
            } else if (config.DL_EntityType && config.DL_EntityType.trim().toLowerCase() == "procedure") { 
                apiUrl = `${baseDataAPIProcedure}${config.DL_View}  ${where}`;
            }
        }
        return apiUrl;
    }


    // DL_WidgetMenu
    buildActionUri = (config) => {

        let apiUrl = '../../assets/actionMenu.json';
        const where = ` DL_PageWidgetId=${config.DL_PageWidgetId}`;
        if (!environment.local) {
            apiUrl = `${baseDataAPI}DL_WidgetMenu/?where=${where}&OrderBy=DL_SequenceNo&date=` + new Date().getTime();
        }
        return apiUrl;
    }

    public getMenuData(data) { 
        const apiUrl = this.buildActionUri(data);
        let DL_Id = this.getParameterByName(data.DL_Page); 
       // if (!this._actions) {
        [{ "nodata": "true" }]
            return  this.http.get(apiUrl)
                .map(res => res.json())
                .map(d => d.DL_ENTITYDATA)
                .flatMap(d => {
                    if (d && d['DL_WidgetMenu'] !== undefined) {
                        return this.isArray(d['DL_WidgetMenu'])
                            ? d['DL_WidgetMenu'] : [d['DL_WidgetMenu']];
                    } else {
                        return [{"nodata":"true"}];
                    }
                })
                
        //}
        //return this._actions;

    }
    clearCache() {
        this._actions = null;
    }

    public isArray = (data) => {
        return (Object.prototype.toString.call(data) === '[object Array]');
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

}
