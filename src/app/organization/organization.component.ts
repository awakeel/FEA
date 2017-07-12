import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { DropdownMenuComponent } from '../common/dropdown-menu';
import { ComponentCatalogService, WebpartComponent } from '../common';
import { DLCMSView } from '../models'
import { environment } from '../../environments/environment';

const baseUrl: string = environment.dataAPI;
const actionAPI: string = environment.actionsAPI;

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
     
   private textStr: string;
  private mydate: Date;
   private userName: string;
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
          console.log(this.entityData);
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
        if (m['DL_Title']) {
          m['DL_Action'] = this.sanitizeAndUpdate(m['DL_Action']);
          this.menuData.push(m);
          this.isMenuLoaded = true;
        }
      });
  }

  onMenuClick(event) {
      console.log(event);
      if (event) {
          const fn = new Function(event);
          return fn();
      }
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
}
