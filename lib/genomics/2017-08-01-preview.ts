// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-08-01-preview/Microsoft.Genomics.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Genomics/accounts',
      apiVersion: '2017-08-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
