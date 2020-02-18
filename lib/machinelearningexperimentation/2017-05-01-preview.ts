import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AccountProperties {
  vsoAccountId?: Expressionable<string>;
  description?: Expressionable<string>;
  friendlyName?: Expressionable<string>;
  keyVaultId?: Expressionable<string>;
  seats?: Expressionable<string>;
  storageAccount: Expressionable<StorageAccountProperties>;
}

export interface ProjectProperties {
  description?: Expressionable<string>;
  gitrepo?: Expressionable<string>;
  friendlyName: Expressionable<string>;
}

export interface StorageAccountProperties {
  storageAccountId: Expressionable<string>;
  accessKey: Expressionable<string>;
}

export interface WorkspaceProperties {
  description?: Expressionable<string>;
  friendlyName: Expressionable<string>;
}

export namespace accounts {
  export function create(name: Expressionable<string>, properties: AccountProperties, location: Expressionable<string>): ResourceDefinition<AccountProperties> {
    return {
      type: 'Microsoft.MachineLearningExperimentation/accounts',
      apiVersion: '2017-05-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace accounts {
  export namespace workspaces {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WorkspaceProperties, location: Expressionable<string>): ResourceDefinition<WorkspaceProperties> {
      return {
        type: 'Microsoft.MachineLearningExperimentation/accounts/workspaces',
        apiVersion: '2017-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace workspaces {
    export namespace projects {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ProjectProperties, location: Expressionable<string>): ResourceDefinition<ProjectProperties> {
        return {
          type: 'Microsoft.MachineLearningExperimentation/accounts/workspaces/projects',
          apiVersion: '2017-05-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}