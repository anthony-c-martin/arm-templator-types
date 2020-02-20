import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface user {
  upn: Expressionable<string>;
  objectId: Expressionable<string>;
}

export namespace catalogs {
  export type CatalogsResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): CatalogsResource {
    return {
      type: 'Microsoft.DataCatalog/catalogs',
      apiVersion: '2016-03-30',
      name: [name],
      properties,
    };
  }
}