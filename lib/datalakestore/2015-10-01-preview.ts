import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace accounts {
  export type AccountsResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): AccountsResource {
    return {
      type: 'Microsoft.DataLakeStore/accounts',
      apiVersion: '2015-10-01-preview',
      name: [name],
      properties,
    };
  }
}