import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace roleAssignments {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Authorization/roleAssignments',
      apiVersion: '2014-10-01-preview',
      name: [name],
      properties,
    };
  }
}