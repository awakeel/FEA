import { Component, OnInit, Type } from '@angular/core';
// import { ActivatedRoute, Route } from '@angular/router'
import { ComponentCatalogService } from '../../common';
import { Widget } from '../../common';
import { DLPage } from '../../models';
import { Observable } from 'rxjs/Rx';
import '../../common/rxjs-extensions';
import { DynamicListComponent } from '../dynamic-list';
import { DynamicFormComponent } from '../dynamic-form';
import { DynamicDetailComponent } from '../dynamic-detail';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

  public widgets: Widget[] = [];
  public isDataAvailable: boolean
  public pages: DLPage[] = [];
  private currentPage: string; 
  private obs: Observable<Widget>;
  public PageTemplate: string;
  constructor( /* private route: ActivatedRoute,*/ private componentCatalogService: ComponentCatalogService) {
    this.currentPage = 'default';
    this.isDataAvailable = false;
     
    // setTimeout(() => {
    //   this.route.params.subscribe(p => {
    //     this.currentPage = p['page'];
    //   });
    // }, 0);
    this.obs = this.componentCatalogService.getWidgetsByPage('');
  }

  getPages() {
    if (this.currentPage === undefined || this.currentPage === '' || this.currentPage == null) {
      throw Error('pageName must be provided');
    }
    this.obs
      // .filter(p => p.data.DL_Page === this.currentPage)
        .map(d => {
           
        return new DLPage(d.data.DL_Page, d.data.DL_PageTitle, d.data.DL_PageTemplate);
      })
      .subscribe(page => {
        this.pages.push(page);
      })
  }

  getWidgetsByColumn(column: string) {
    if (column === undefined || column === '' || column == null) {
      throw Error('column must be provided');
    }
    this.obs.subscribe(widget => {
      this.widgets.push(widget);
    });
  }

  filterByZone(zone: string) {
    return this.widgets.filter(w => w.data.DL_Zone.toLowerCase() === zone);
  }

  filterByCurrentPage(): DLPage {
    return this.widgets.map(
      p => new DLPage(p.data.DL_Page, p.data.DL_PageTitle, p.data.DL_PageTemplate)
    )[0];
  }

  ngOnInit() {
       
      this.obs.subscribe(widget => {
          this.widgets.push(widget);
          if (!this.PageTemplate)
            this.PageTemplate = widget.data.DL_PageTemplate; 
           this.isDataAvailable = true;
      }); 
      
    if (this.isDataAvailable) {
      const page: DLPage = this.filterByCurrentPage();

    }
  }

}
