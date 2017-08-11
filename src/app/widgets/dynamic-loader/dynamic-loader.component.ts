import { Component, OnInit, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { PlaceholderDirective } from '../../common';
import { WebpartComponent, Widget } from '../../common';
import { DataEntityService } from '../../common'

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css'],
  providers: [DataEntityService]
})
export class DynamicLoaderComponent implements AfterViewInit {

  @Input() _widgets: Widget[];
  currentAddIndex: number = -1;
  @ViewChild(PlaceholderDirective) placeholderHost: PlaceholderDirective;


  constructor(private dataService: DataEntityService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    if (this._widgets.length) {
      setTimeout(_ => this.loadComponent());
    }
  }


  loadComponent() {

    this.currentAddIndex = (this.currentAddIndex + 1) % this._widgets.length;
    this._widgets.forEach(widget => {
      // const widget = this._widgets[this.currentAddIndex];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);

      const viewContainerRef = this.placeholderHost.viewContainerRef;
      // viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);

      // componentRef.instance.dataEntityService = this.dataService;
      if (componentRef.instance.dataEntityService === undefined) {
        componentRef.instance.dataEntityService = this.dataService;
      }
      (<WebpartComponent>componentRef.instance).data = widget.data;
      componentRef.changeDetectorRef.detectChanges();
      componentRef.onDestroy(() => {
        componentRef.changeDetectorRef.detach();
      });
    });

  }

}
