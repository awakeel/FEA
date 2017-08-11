import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WebpartComponent, Widget } from '../../common';
import { DataEntityService } from '../../common';
@Component({
    selector: 'app-dynamic-iframe',
    templateUrl: './dynamic-iframe.component.html',
    styleUrls: ['./dynamic-iframe.component.css']
})
export class DynamicIframeComponent implements WebpartComponent, OnInit {

    @Input() data: any;
        

    private dataEntityService: DataEntityService;

    constructor(private domSanitizer: DomSanitizer) {
        
    }

    getParameterByName(name: any) {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    ngOnInit() {  
        let id = this.getParameterByName(this.data.DL_Page);
        let that = this;
        if (!id) {
            setTimeout(function () { new Function("EXLoadQuickSearch('" + that.data.DL_Page + "',false, null, null, null, true)")() }, 500);
        } else {
            setTimeout(function () { new Function("displayentity('" + that.data.DL_Page + "'," + id + ")")() }, 500);
        }
        console.log('Iframe NG init'); 
    }

    getSafeUrl = (sr) => {
        
        return this.domSanitizer.bypassSecurityTrustResourceUrl(sr);
    }
}