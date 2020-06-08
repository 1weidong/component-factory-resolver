import { Injectable } from '@angular/core';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private components = {
    componentA: ComponentAComponent,
    componentB: ComponentBComponent,
    componentC: ComponentCComponent
  };
  constructor() { }

  getComponent(componentName: string) {
    return this.components[componentName];
  }
}
