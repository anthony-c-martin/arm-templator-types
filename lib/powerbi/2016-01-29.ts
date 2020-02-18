import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace workspaceCollections {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.PowerBI/workspaceCollections',
      apiVersion: '2016-01-29',
      name: name,
      properties,
    };
  }
}