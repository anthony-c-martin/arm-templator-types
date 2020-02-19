import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace userAssignedIdentities {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ManagedIdentity/userAssignedIdentities',
      apiVersion: '2015-08-31-preview',
      name: [name],
      location,
      properties,
    };
  }
}