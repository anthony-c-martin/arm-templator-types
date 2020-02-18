import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface user {
  upn: Expressionable<string>;
  objectId: Expressionable<string>;
}

export namespace catalogs {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.DataCatalog/catalogs',
      apiVersion: '2016-03-30',
      name: name,
      properties,
    };
  }
}