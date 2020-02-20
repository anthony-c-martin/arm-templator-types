import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface WorkspaceProperties {
  userStorageAccountId: Expressionable<string>;
  ownerEmail?: Expressionable<string>;
  keyVaultIdentifierId?: Expressionable<string>;
}

export namespace workspaces {
  export type WorkspacesResource = ResourceDefinition<WorkspaceProperties>;
  
  export function create(name: Expressionable<string>, properties: WorkspaceProperties): WorkspacesResource {
    return {
      type: 'Microsoft.MachineLearning/workspaces',
      apiVersion: '2016-04-01',
      name: [name],
      properties,
    };
  }
}