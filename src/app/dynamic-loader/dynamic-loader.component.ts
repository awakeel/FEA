import { Component, OnInit, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { PlaceholderDirective } from '../common';
import { WebpartComponent, Widget } from '../common';


@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css']
})
export class DynamicLoaderComponent implements AfterViewInit, OnDestroy {

  @Input() _widgets: Widget[];
  currentAddIndex: number = -1;
  @ViewChild(PlaceholderDirective) placeholderHost: PlaceholderDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    if (this._widgets.length) {
      setTimeout(_ => this.loadComponent());
    }
    // this.loadComponent();
    // this.getCatelog();
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {
    // console.log(this._widgets);
    this.currentAddIndex = (this.currentAddIndex + 1) % this._widgets.length;
    this._widgets.forEach(widget => {
      // const widget = this._widgets[this.currentAddIndex];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);

      const viewContainerRef = this.placeholderHost.viewContainerRef;
      // viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<WebpartComponent>componentRef.instance).data = widget.data;
    });

  }

  getCatelog() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
