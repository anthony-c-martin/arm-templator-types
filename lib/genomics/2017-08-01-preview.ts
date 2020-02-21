import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace accounts {
  export type AccountsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): AccountsResource {
    return {
      type: 'Microsoft.Genomics/accounts',
      apiVersion: '2017-08-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}