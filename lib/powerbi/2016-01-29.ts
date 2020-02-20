import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace workspaceCollections {
  export interface AddedResourceProps {
    sku: Expressionable<any>;
  }
  
  export type WorkspaceCollectionsResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, sku: Expressionable<any>): WorkspaceCollectionsResource {
    return {
      type: 'Microsoft.PowerBI/workspaceCollections',
      apiVersion: '2016-01-29',
      name: [name],
      sku,
      properties,
    };
  }
}