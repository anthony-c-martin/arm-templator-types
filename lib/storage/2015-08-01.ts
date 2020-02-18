import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace storageAccounts {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2015-05-01-preview',
      name: name,
      properties,
    };
  }
}