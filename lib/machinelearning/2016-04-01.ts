// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-04-01/Microsoft.MachineLearning.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface WorkspaceProperties {
  userStorageAccountId: Expressionable<string>;
  ownerEmail?: Expressionable<string>;
  keyVaultIdentifierId?: Expressionable<string>;
}

export namespace workspaces {
  export function create(name: Expressionable<string>, properties: WorkspaceProperties, location: Expressionable<string>): ResourceDefinition<WorkspaceProperties> {
    return {
      type: 'Microsoft.MachineLearning/workspaces',
      apiVersion: '2016-04-01',
      name: name,
      location,
      properties,
    };
  }
}
