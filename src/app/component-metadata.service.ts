import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import './rxjs-extensions';
import { CMS, DynamicPage, EntityBase, DLENTITYDATA, DLCMSView } from './model';
import { environment } from '../environments/environment';

const baseUrl: string = environment.baseUrl;
@Injectable()
export class ComponentMetadataService {

    constructor(private http: Http) {

        // this.http.get('../assets/dataNEW.json')
        //   .map((res) => <EntityBase>res.json())
        //   .map((res) => res.DL_ENTITYDATA)
        //   .flatMap((res) => res.DL_CMSView)
        //   .subscribe(d => {
        //     console.log(d);
        //   })

    }

    getComponentMetaData() {
        const params = new URLSearchParams(window.location.search);
        const where = params.get('page');
        return <Observable<DLENTITYDATA>>this.http.get(baseUrl+"/DL_CMSView.json/?&where=DL_PageTitle='"+ where +"'")
            .map((res) => <EntityBase>res.json())
            .map((res) => res.DL_ENTITYDATA)
            .catch(this.handleError);

    }

    private handleError(error: any) {
        console.log(error);
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        return Observable.throw(errMsg);
    }
}
