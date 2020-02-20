import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace alertrules {
  export type AlertrulesResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): AlertrulesResource {
    return {
      type: 'Microsoft.Insights/alertrules',
      apiVersion: '2014-04-01',
      name: [name],
      properties,
    };
  }
}
export namespace components {
  export type ComponentsResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): ComponentsResource {
    return {
      type: 'Microsoft.Insights/components',
      apiVersion: '2014-04-01',
      name: [name],
      properties,
    };
  }
}
export namespace webtests {
  export type WebtestsResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): WebtestsResource {
    return {
      type: 'Microsoft.Insights/webtests',
      apiVersion: '2014-04-01',
      name: [name],
      properties,
    };
  }
}
export namespace autoscalesettings {
  export type AutoscalesettingsResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): AutoscalesettingsResource {
    return {
      type: 'Microsoft.Insights/autoscalesettings',
      apiVersion: '2014-04-01',
      name: [name],
      properties,
    };
  }
}