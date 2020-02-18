import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.DataLakeStore/accounts',
      apiVersion: '2015-10-01-preview',
      name: name,
      properties,
    };
  }
}