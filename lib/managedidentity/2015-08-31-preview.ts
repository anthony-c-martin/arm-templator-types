// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-08-31-preview/Microsoft.ManagedIdentity.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace userAssignedIdentities {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ManagedIdentity/userAssignedIdentities',
      apiVersion: '2015-08-31-preview',
      name: name,
      location,
      properties,
    };
  }
}
