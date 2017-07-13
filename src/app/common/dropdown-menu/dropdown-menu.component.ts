import { Component, AfterViewInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { DropdownMenuService } from './dropdown-menu.service'
import { Http, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
const menuIconURL: string = environment.menuIconURL;

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  providers: [DropdownMenuService]
})
export class DropdownMenuComponent implements AfterViewInit, OnDestroy {

  @Input() dataEntityName = '';

  @Output() menuClick = new EventEmitter<any>();

  private menuData: any[] = [];
  public isMenuLoaded: boolean;
  urlParams: URLSearchParams;

  subscription;


  constructor(private dropDownMenuService: DropdownMenuService) {
    this.urlParams = new URLSearchParams(window.location.search);
  }
  ngAfterViewInit(): void {
    this.loadData();
  }


  loadData() {
    this.subscription = this.dropDownMenuService.getDropDownMenuData()
      .filter(m => m['DL_EntityNameForeign'] === this.dataEntityName)
      .subscribe(m => {

        if (m['DL_Title']) {

            m['DL_Action'] = m['DL_Action']; //this.sanitizeAndUpdate(m['DL_Action']);
          this.menuData.push(m);
          this.isMenuLoaded = true;
        }
      }, error => console.log(error));
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
  onClick(event) {  
      let res = event;
      console.log(res);
      if (event.indexOf(";") > -1) {
          res = event.split(";")[0];
      }
      if (res.indexOf(":") > -1) {
          res = res.split(":")[1];
      }
      console.log(res);
      this.menuClick.emit(res);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
