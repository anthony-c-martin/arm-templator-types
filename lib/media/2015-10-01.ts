import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface storageAccounts {
  storageAccounts?: Expressionable<storageAccount[]>;
}

export interface storageAccount {
}

export namespace mediaServices {
  export type MediaServicesResource = ResourceDefinition<storageAccounts, undefined>;
  
  export function create(name: Expressionable<string>, properties: storageAccounts): MediaServicesResource {
    return {
      type: 'Microsoft.Media/mediaServices',
      apiVersion: '2015-10-01',
      name: [name],
      properties,
    };
  }
}