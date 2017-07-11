import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ComponentCatalogService } from './common';
import { DynamicPageComponent } from './dynamic-page';
import { DynamicIframeComponent } from './dynamic-iframe/dynamic-iframe.component';
import { SafeUrlPipe, ExtractNameFromADUserNamePipe } from './shared';
import { TruncateModule } from './shared/truncate';
import { DropdownMenuComponent } from './common/dropdown-menu/dropdown-menu.component';


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
    OrganizationComponent,
    DynamicIframeComponent,
    SafeUrlPipe,
    ExtractNameFromADUserNamePipe,
    DropdownMenuComponent,

  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    NgbModule,
    NgbDropdownModule.forRoot(),
    TruncateModule
    // RouterModule.forRoot(routes)
  ],
  entryComponents: [DynamicLoaderComponent,
    DynamicListComponent,
    DynamicDetailComponent,
    DynamicFormComponent, OrganizationComponent, DynamicIframeComponent],
  providers: [ComponentCatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
