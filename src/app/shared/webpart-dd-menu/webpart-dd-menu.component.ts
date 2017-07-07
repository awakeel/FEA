import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import '../../rxjs-extensions';

@Component({
  selector: 'app-webpart-dd-menu',
  templateUrl: './webpart-dd-menu.component.html',
  styleUrls: ['./webpart-dd-menu.component.css']
})
export class WebpartDdMenuComponent implements OnInit {
  private entityData: any[] = [];
  private isDataLoaded: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
