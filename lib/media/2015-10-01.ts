import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface storageAccounts {
  storageAccounts?: Expressionable<storageAccount[]>;
}

export interface storageAccount {
}

export namespace mediaServices {
  export type MediaServicesResource = ResourceDefinition<storageAccounts>;
  
  export function create(name: Expressionable<string>, properties: storageAccounts): MediaServicesResource {
    return {
      type: 'Microsoft.Media/mediaServices',
      apiVersion: '2015-10-01',
      name: [name],
      properties,
    };
  }
}