import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Sku {
  name: Expressionable<string>;
}

export namespace accounts {
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<any> & AdditionalProps {
    return {
      type: 'Microsoft.Maps/accounts',
      apiVersion: '2018-05-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}