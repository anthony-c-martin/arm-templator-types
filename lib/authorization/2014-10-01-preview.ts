import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace roleAssignments {
  export type RoleAssignmentsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): RoleAssignmentsResource {
    return {
      type: 'Microsoft.Authorization/roleAssignments',
      apiVersion: '2014-10-01-preview',
      name: [name],
      properties,
    };
  }
}