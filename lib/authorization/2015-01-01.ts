import { Expressionable, ResourceDefinition } from 'arm-templator';

export namespace locks {
  export type LocksResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): LocksResource {
    return {
      type: 'Microsoft.Authorization/locks',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
    };
  }
}