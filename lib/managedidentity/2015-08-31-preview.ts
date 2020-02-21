import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace userAssignedIdentities {
  export type UserAssignedIdentitiesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): UserAssignedIdentitiesResource {
    return {
      type: 'Microsoft.ManagedIdentity/userAssignedIdentities',
      apiVersion: '2015-08-31-preview',
      name: [name],
      location,
      properties,
    };
  }
}