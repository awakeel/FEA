﻿import { Component, OnInit } from '@angular/core';
import { ComponentMetadataService } from './component-metadata.service';
import './rxjs-extensions';
import { Observable } from 'rxjs/Rx';
import { CMS, DynamicPage, DLENTITYDATA, DLCMSView } from './model';
import { URLSearchParams } from '@angular/http'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ComponentMetadataService]

})
export class AppComponent implements OnInit {
    title = 'app';
    public cmsData: DLCMSView[] = [];


    private obs: Observable<DLENTITYDATA>;

    public isDataLoaded: boolean;
    constructor(private componentMetaService: ComponentMetadataService) {
        this.isDataLoaded = false;
        this.obs = this.componentMetaService.getComponentMetaData();
    }


    ngOnInit() {
        const params = new URLSearchParams(window.location.search);

        this.obs
            .flatMap((res) => res.DL_CMSView)
            .subscribe(
            (d) => {
                console.log(d);
                this.cmsData.push(d);
                this.isDataLoaded = true;
            }
            );

    }

    filterByZone(zone: string) {
        console.log(zone + 'zone called');
        if (this.cmsData) {
            console.log(zone + 'zone called');
            
            return this.cmsData.filter(z => z.DL_Zone.toLowerCase() === zone);
        }
    }
}
