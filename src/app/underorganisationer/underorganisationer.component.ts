import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { DynamicPage } from '../model';
import { environment } from '../../environments/environment';

const baseUrl: string = environment.baseUrl;
@Component({
    selector: 'app-underorganisationer',
    templateUrl: './underorganisationer.component.html',
    styleUrls: ['./underorganisationer.component.css']
})
export class UnderorganisationerComponent implements OnInit {

    apiUrl: string;
    data: any = [];
    @Input() webPart: DynamicPage;
    loading: boolean;
    constructor(private http: Http) {

    }

    ngOnInit() {
        const params = new URLSearchParams(window.location.search);
        const where = this.webPart.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
        this.apiUrl = `${baseUrl}${this.webPart.DL_View}/?where=${where}&OrderBy=${this.webPart.DL_OrderBy}`;

        this.getUnderOrganization();
    }
    getData() {
        return this.http.get(this.apiUrl).map((res: Response) => res.json());
    }
    getUnderOrganization() {
        this.loading = false;
        this.getData().subscribe(data => {
            if (data.DL_ENTITYDATA) {
                this.data = data.DL_ENTITYDATA[this.webPart.DL_View];
            } else {
                this.data = [];
            }
        })
    }

}
