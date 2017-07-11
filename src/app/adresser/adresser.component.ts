import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { WebpartComponent } from '../common';
import { DLCMSView } from '../models';
import { environment } from '../../environments/environment';

const baseUrl: string = environment.dataAPI;

@Component({
  selector: 'app-adresser',
  templateUrl: './adresser.component.html',
  styleUrls: ['./adresser.component.css']
})
export class AdresserComponent implements WebpartComponent, OnInit {

  private apiUrl: string;
  entityData: any = [];
  @Input() data: any;
  constructor(private http: Http) {

  }

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    const where = this.data.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
    this.apiUrl = `${baseUrl}${this.data.DL_View}/?where=${where}&OrderBy=${this.data.DL_OrderBy}`;
    this.getOrganization();

  }
  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }
  getOrganization() {
    console.log(this.apiUrl);
    this.getData().subscribe(data => {
      if (data.DL_ENTITYDATA) {
        this.data = data.DL_ENTITYDATA['DL_OrganisationAddressView'];
      } else {
        this.data = [];
      }
    })
  }

}
