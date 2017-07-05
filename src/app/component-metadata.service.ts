import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import './rxjs-extensions';
import { CMS, DynamicPage, EntityBase, DLENTITYDATA, DLCMSView } from './model';

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

        return <Observable<DLENTITYDATA>>this.http.get('http://sagssystem/ex_sqlSvc/REST/Service.svc/Entity/DL_CMSView')
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
