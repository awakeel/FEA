import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { DynamicPageComponent } from './dynamic-page';



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
  constructor(/*public router: Router*/) {
    // router.resetConfig([
    //   {
    //     path: '', component: AppComponent, children: [
    //       { path: 'org', component: DynamicPageComponent },
    //       { path: 'page1', component: DynamicPageComponent },
    //       { path: 'page2', component: DynamicPageComponent }
    //     ]
    //   }
    // ]);
  }

  ngOnInit() {

  }
}
