import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { ComponentCatalogService, WebpartComponent } from '../common';
import { DropdownMenuComponent } from '../common/dropdown-menu';
import { DLCMSView } from '../models'
import { environment } from '../../environments/environment';

const baseUrl: string = environment.dataAPI;


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements WebpartComponent, OnInit {
  @ViewChild(DropdownMenuComponent) public dd: DropdownMenuComponent;
  @Input() data: any
  private apiUrl;
  entityData: any = [];


  private menuData: any[] = [];
  private isDataLoaded: boolean;
  private isMenuLoaded: boolean;
  private textStr: string;
  private mydate: Date;
  private userName: string;

  urlParams: URLSearchParams;

  constructor(private http: Http) {
    this.isDataLoaded = false;
    this.isMenuLoaded = false;
    this.textStr = 'a quick brown fox jumps over a lazy dog ago tex ten deedar';
    this.mydate = new Date();
    this.userName = 'omer';

  }
  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    const where = this.data.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
    this.apiUrl = '../../assets/organisation.json';
    if (environment.local) {
      this.apiUrl = `${baseUrl}${this.data.DL_View}/?where=${where}&OrderBy=${this.data.DL_OrderBy}`;
    }

    this.getData();

  }
  getData() {

    this.http.get(this.apiUrl)
      .map(res => res.json())
      .map(d => d.DL_ENTITYDATA)
      .subscribe(d => {
        if (d['DL_OrganisationView'] !== undefined) {
          this.entityData = d['DL_OrganisationView'];
          // console.log(this.entityData);
          this.isDataLoaded = true;
        }
      })
  }

  onMenuClick(event) {
    console.log(event);
    if (event) {
      const fn = new Function(event);
      // return fn();
      console.log(fn());
    }
  }

}
