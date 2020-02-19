import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace userAssignedIdentities {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ManagedIdentity/userAssignedIdentities',
      apiVersion: '2018-11-30',
      name: [name],
      location,
      properties,
    };
  }
}