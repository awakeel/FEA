import { Component, AfterViewInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { DropdownMenuService } from './dropdown-menu.service'


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
  private isMenuLoaded: boolean;
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

          m['DL_Action'] = this.sanitizeAndUpdate(m['DL_Action']);
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
    this.menuClick.emit(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
