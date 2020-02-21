import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace storageAccounts {
  export type StorageAccountsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): StorageAccountsResource {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2015-05-01-preview',
      name: [name],
      properties,
    };
  }
}