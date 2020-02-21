import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export type AccountsResource = ResourceDefinition<AccountProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: AccountProperties, location: Expressionable<string>): AccountsResource {
    return {
      type: 'Microsoft.MachineLearningExperimentation/accounts',
      apiVersion: '2017-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace accounts {
  export namespace workspaces {
    export type WorkspacesResource = ResourceDefinition<WorkspaceProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WorkspaceProperties, location: Expressionable<string>): WorkspacesResource {
      return {
        type: 'Microsoft.MachineLearningExperimentation/accounts/workspaces',
        apiVersion: '2017-05-01-preview',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace workspaces {
    export namespace projects {
      export type ProjectsResource = ResourceDefinition<ProjectProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ProjectProperties, location: Expressionable<string>): ProjectsResource {
        return {
          type: 'Microsoft.MachineLearningExperimentation/accounts/workspaces/projects',
          apiVersion: '2017-05-01-preview',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}