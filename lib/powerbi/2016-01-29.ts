import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace workspaceCollections {
  export interface AdditionalProps {
    sku: Expressionable<any>;
  }
  
  export type WorkspaceCollectionsResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, sku: Expressionable<any>): WorkspaceCollectionsResource {
    return {
      type: 'Microsoft.PowerBI/workspaceCollections',
      apiVersion: '2016-01-29',
      name: [name],
      properties,
      additional: {
        sku,
      },
    };
  }
}