import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicLoaderComponent } from './dynamic-loader';
import { DynamicListComponent } from './dynamic-list';
import { DynamicDetailComponent } from './dynamic-detail';
import { DynamicFormComponent } from './dynamic-form';
import { OrganizationComponent } from './organization';

import { DynamicIframeComponent } from './dynamic-iframe';
import { DynamicPageComponent } from './dynamic-page';

import { PersonorganisationComponent } from './personorganisation';
import { PlaceholderDirective, ComponentCatalogService } from '../common';
import { DropdownMenuComponent } from '../common/dropdown-menu';
// import { WebpartDdMenuComponent } from './shared/webpart-dd-menu/webpart-dd-menu.component';
import { SafeUrlPipe, ExtractNameFromADUserNamePipe } from '../shared';
import { TruncateModule } from '../shared/truncate';
import { WidgetMenuComponent } from '../common/widget-menu';
import { NameListComponent } from './name-list';
import { SelectDetailComponent } from './select-detail';



@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        NgbModule,
        NgbDropdownModule.forRoot(),
        TruncateModule
    ],
    declarations: [
        PlaceholderDirective,
        DynamicPageComponent,
        DynamicLoaderComponent,
        DynamicListComponent,
        DynamicDetailComponent,
        DynamicFormComponent,
        OrganizationComponent,

        DynamicIframeComponent, PersonorganisationComponent,
        SafeUrlPipe,
        ExtractNameFromADUserNamePipe,
     
        DropdownMenuComponent,
        WidgetMenuComponent,
        NameListComponent,
        SelectDetailComponent
    ],

    providers: [ComponentCatalogService],
    exports: [
        DynamicPageComponent,
        DynamicLoaderComponent,
        DynamicListComponent,
        DynamicDetailComponent,
        DynamicFormComponent,
        OrganizationComponent, 
        DynamicIframeComponent,
        PersonorganisationComponent,
        NameListComponent,
        SelectDetailComponent
    ],
    entryComponents: [
        DynamicPageComponent,
        DynamicLoaderComponent,
        DynamicListComponent,
        DynamicDetailComponent,
        DynamicFormComponent,
        OrganizationComponent,
        DynamicIframeComponent,
        PersonorganisationComponent,
        NameListComponent,
        SelectDetailComponent
    ]
})
export class WidgetsModule { }