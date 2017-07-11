import { Component, OnInit, Input } from '@angular/core';
import { WebpartComponent, Widget } from '../common';

@Component({
  selector: 'app-dynamic-iframe',
  templateUrl: './dynamic-iframe.component.html',
  styleUrls: ['./dynamic-iframe.component.css']
})
export class DynamicIframeComponent implements WebpartComponent, OnInit {

  @Input() data: any;


  @Input() iframeSource: any;
  constructor() {

  }

  ngOnInit() {
  }

}
