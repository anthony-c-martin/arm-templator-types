// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-11-30/Microsoft.ManagedIdentity.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace userAssignedIdentities {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ManagedIdentity/userAssignedIdentities',
      apiVersion: '2018-11-30',
      name: name,
      location,
      properties,
    };
  }
}
