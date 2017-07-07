import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './shared';
import { AppComponent } from './app.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { DynamicDetailComponent } from './dynamic-detail/dynamic-detail.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ComponentCatalogService } from './component-catalog.service';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { WebpartDdMenuComponent } from './shared/webpart-dd-menu/webpart-dd-menu.component';

export const routes: Route[] = [
  {
    path: '',
    component: AppComponent, children: [
      { path: 'organisation', component: DynamicPageComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceholderDirective,
    DynamicLoaderComponent,
    DynamicListComponent,
    DynamicDetailComponent,
    DynamicFormComponent,
    DynamicPageComponent,
    WebpartDdMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule,
   NgbDropdownModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  entryComponents: [DynamicLoaderComponent,
    DynamicListComponent,
    DynamicDetailComponent,
    DynamicFormComponent],
  providers: [ComponentCatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
