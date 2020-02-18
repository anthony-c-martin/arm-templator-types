import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface storageAccounts {
  storageAccounts?: Expressionable<storageAccount[]>;
}

export interface storageAccount {
}

export namespace mediaServices {
  export function create(name: Expressionable<string>, properties: storageAccounts): ResourceDefinition<storageAccounts> {
    return {
      type: 'Microsoft.Media/mediaServices',
      apiVersion: '2015-10-01',
      name: name,
      properties,
    };
  }
}