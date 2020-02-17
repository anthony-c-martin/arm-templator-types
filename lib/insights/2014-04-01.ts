// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2014-04-01/Microsoft.Insights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace alertrules {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Insights/alertrules',
      apiVersion: '2014-04-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace components {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Insights/components',
      apiVersion: '2014-04-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace webtests {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Insights/webtests',
      apiVersion: '2014-04-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace autoscalesettings {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Insights/autoscalesettings',
      apiVersion: '2014-04-01',
      name: name,
      location,
      properties,
    };
  }
}
