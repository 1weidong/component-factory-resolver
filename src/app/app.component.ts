import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { DynamicComponentService } from './dynamic-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DynamicComponentService]
})
export class AppComponent {
  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;
  constructor(private dynamicComponentService: DynamicComponentService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }
  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName)
    );
    const viewContainerRef = this.componentHost.viewcontainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
