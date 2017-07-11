import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './shared';
import { AppComponent } from './app.component';
import { PlaceholderDirective } from './common';
import { DynamicLoaderComponent } from './dynamic-loader';
import { DynamicListComponent } from './dynamic-list';
import { DynamicDetailComponent } from './dynamic-detail';
import { DynamicFormComponent } from './dynamic-form';
import { OrganizationComponent } from './organization';
import { AdresserComponent } from './adresser';
import { ComponentCatalogService } from './common';
import { DynamicPageComponent } from './dynamic-page';
import { WebpartDdMenuComponent } from './shared/webpart-dd-menu/webpart-dd-menu.component';

// export const routes: Route[] = [
//   {
//     path: '',
//     component: AppComponent
//     // , children: [
//     //   { path: 'organisation', component: DynamicPageComponent }
//     // ]
//   }
// ];

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
      OrganizationComponent, AdresserComponent,
      WebpartDdMenuComponent
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule,
    NgbDropdownModule.forRoot(),
    // RouterModule.forRoot(routes)
  ],
  entryComponents: [DynamicLoaderComponent,
    DynamicListComponent,
    DynamicDetailComponent,
      DynamicFormComponent, OrganizationComponent, AdresserComponent],
  providers: [ComponentCatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
