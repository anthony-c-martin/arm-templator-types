import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace locks {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Authorization/locks',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
    };
  }
}