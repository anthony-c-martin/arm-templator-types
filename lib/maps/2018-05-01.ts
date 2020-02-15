// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-05-01/Microsoft.Maps.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Sku {
  name: Expressionable<string>;
}

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Maps/accounts',
      apiVersion: '2018-05-01',
      name: name,
      location,
      properties,
    };
  }
}
