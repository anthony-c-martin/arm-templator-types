import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace workspaceCollections {
  interface AdditionalProps {
    sku: Expressionable<any>;
  }
  
  export function create(name: Expressionable<string>, properties: any, sku: Expressionable<any>): ResourceDefinition<any> & AdditionalProps {
    return {
      type: 'Microsoft.PowerBI/workspaceCollections',
      apiVersion: '2016-01-29',
      name: name,
      sku,
      properties,
    };
  }
}