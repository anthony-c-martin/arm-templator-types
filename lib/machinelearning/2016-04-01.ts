import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface WorkspaceProperties {
  userStorageAccountId: Expressionable<string>;
  ownerEmail?: Expressionable<string>;
  keyVaultIdentifierId?: Expressionable<string>;
}

export namespace workspaces {
  export function create(name: Expressionable<string>, properties: WorkspaceProperties): ResourceDefinition<WorkspaceProperties> {
    return {
      type: 'Microsoft.MachineLearning/workspaces',
      apiVersion: '2016-04-01',
      name: name,
      properties,
    };
  }
}