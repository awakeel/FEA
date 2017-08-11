import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { Router } from '@angular/router';
import { WidgetsModule } from './widgets';
import { DynamicPageComponent } from './widgets/dynamic-page';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  /**
   * constructor
   */
  constructor(private translate: TranslateService /*public router: Router*/) {
    // router.resetConfig([
    //   {
    //     path: '', component: AppComponent, children: [
    //       { path: 'org', component: DynamicPageComponent },
    //       { path: 'page1', component: DynamicPageComponent },
    //       { path: 'page2', component: DynamicPageComponent }
    //     ]
    //   }
    // ]);
    translate.addLangs(['en', 'da', 'sv']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|da|sv|es/) ? browserLang : 'en');

  }

  ngOnInit() {

  }
}
