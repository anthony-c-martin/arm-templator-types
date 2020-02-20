import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Sku {
  name: Expressionable<string>;
}

export namespace accounts {
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
  }
  
  export type AccountsResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, sku: Expressionable<Sku>): AccountsResource {
    return {
      type: 'Microsoft.Maps/accounts',
      apiVersion: '2018-05-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}