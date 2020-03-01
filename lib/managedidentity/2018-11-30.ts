import { Expressionable, ResourceDefinition } from 'arm-templator';

export namespace userAssignedIdentities {
  export type UserAssignedIdentitiesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): UserAssignedIdentitiesResource {
    return {
      type: 'Microsoft.ManagedIdentity/userAssignedIdentities',
      apiVersion: '2018-11-30',
      name: [name],
      location,
      properties,
    };
  }
}