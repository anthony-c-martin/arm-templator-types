import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Genomics/accounts',
      apiVersion: '2017-08-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}