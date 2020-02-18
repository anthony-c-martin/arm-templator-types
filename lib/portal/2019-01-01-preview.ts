import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface DashboardLens {
  metadata?: Expressionable<any>;
  order: Expressionable<number>;
  parts: Expressionable<any>;
}

export interface DashboardParts {
  metadata?: Expressionable<any>;
  position: Expressionable<DashboardPartsPosition>;
}

export interface DashboardPartsPosition {
  colSpan: Expressionable<number>;
  metadata?: Expressionable<any>;
  rowSpan: Expressionable<number>;
  x: Expressionable<number>;
  y: Expressionable<number>;
}

export interface DashboardProperties {
  lenses?: Expressionable<any>;
  metadata?: Expressionable<any>;
}

export namespace dashboards {
  export function create(name: Expressionable<string>, properties: DashboardProperties, location: Expressionable<string>): ResourceDefinition<DashboardProperties> {
    return {
      type: 'Microsoft.Portal/dashboards',
      apiVersion: '2019-01-01-preview',
      name: name,
      location,
      properties,
    };
  }
}