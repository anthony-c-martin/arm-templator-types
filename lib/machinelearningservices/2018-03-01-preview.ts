import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface WorkspaceProperties {
  description?: Expressionable<string>;
  friendlyName?: Expressionable<string>;
  keyVault?: Expressionable<string>;
  applicationInsights?: Expressionable<string>;
  containerRegistry: Expressionable<string>;
  storageAccount: Expressionable<string>;
}

export namespace workspaces {
  export type WorkspacesResource = ResourceDefinition<WorkspaceProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: WorkspaceProperties, location?: Expressionable<string>): WorkspacesResource {
    return {
      type: 'Microsoft.MachineLearningServices/workspaces',
      apiVersion: '2018-03-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}