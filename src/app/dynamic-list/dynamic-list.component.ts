import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import '../rxjs-extensions';
import { WebpartComponent } from '../webpart';
import { DynamicListService } from './dynamic-list.service';
import { DLCMSView } from '../model';
import { environment } from '../../environments/environment';
const baseDataAPI: string = environment.dataAPI;
@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css'],
  providers: [DynamicListService]
})
export class DynamicListComponent implements WebpartComponent, OnInit {

  @Input() data: any;
  private apiUrl: string;

  private entityData: any[] = [];
  private menuData: any[] = [];
  private isDataLoaded: boolean;
  private isMenuLoaded: boolean;

  constructor(private http: Http, private listService: DynamicListService) {
    this.isDataLoaded = false;
    this.isMenuLoaded = false;
    // this.listService.getData();
  }

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    const where = this.data.DL_Where.replace('%DL_Id%', params.get('DL_Id'));
    if (environment.local) {
      // console.log(this.data.DL_View);
      this.apiUrl = '../../assets/organisation.json';
    } else {
      this.apiUrl = `${baseDataAPI}${this.data.DL_View}/?where=${where}&OrderBy=${this.data.DL_OrderBy}`;
    }

    this.getUnderOrganization();
    this.getActionData();

  }
  getData() {
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .map(d => d.DL_ENTITYDATA);
      // .filter(d => d['DL_Title'] !== undefined);
  }

  getActionData() {
    this.http.get('../../assets/actions.json')
      .map(res => res.json())
      .map(d => d.DL_ENTITYDATA)
      .flatMap(m => m['DL_Action'])
      .filter(m => m['DL_EntityNameForeign'] === this.data['DL_View'])
      .subscribe(m => {
        console.log(m['DL_EntityNameForeign']);
        if (m['DL_Title'] !== undefined && m['DL_Title'] !== null && m['DL_Title'] !== '') {
          this.menuData.push(m);
          this.isMenuLoaded = true;
        }
      });
  }
  getUnderOrganization() {


      this.getData()
        .subscribe(d => {
          console.log(d[this.data.DL_View]);
          if (d[this.data.DL_View] !== undefined) {
            this.entityData = d[this.data.DL_View];

            if (this.entityData && this.entityData.length) {
              console.assert(this.entityData !== undefined, 'passed')
              // console.log(this.entityData);
            }

            this.isDataLoaded = true;
          }
        })

  }
  doActionOpen() {
    console.log('menu opened');
  }
  doActionClose() {
    console.log('menu closed');
  }
}
