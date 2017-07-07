import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { ComponentMetadataService } from '../component-metadata.service';
import { DynamicPage } from '../model'
import { environment } from '../../environments/environment';

const baseUrl: string = environment.baseUrl;
@Component({
    selector: 'app-recent',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
    data: any = [];
    @Input() webPart: DynamicPage;
    private apiUrl;
    loading: boolean;
    constructor(private http: Http) {
        this.loading = true;
    }
    ngOnInit() {
        const params = new URLSearchParams(window.location.search);
        const where = this.webPart.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
        this.apiUrl = `${baseUrl}${this.webPart.DL_View}/?where=${where}&OrderBy=${this.webPart.DL_OrderBy}`;
        console.log(this.apiUrl);
        this.getRecent();
    }
    getData() {
        return this.http.get(this.apiUrl).map((res: Response) => res.json());
    }
    getRecent() {
        this.loading = false;
        this.getData().subscribe(data => {
             
            if (data.DL_ENTITYDATA)
                this.data = data.DL_ENTITYDATA['_DL_Organisation'];
            else
                this.data = []; 
          
        })
    }
}
