// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-10-01-preview/Microsoft.DataLakeStore.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.DataLakeStore/accounts',
      apiVersion: '2015-10-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
