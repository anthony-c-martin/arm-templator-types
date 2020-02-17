// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-01-29/Microsoft.PowerBI.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace workspaceCollections {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.PowerBI/workspaceCollections',
      apiVersion: '2016-01-29',
      name: name,
      location,
      properties,
    };
  }
}
