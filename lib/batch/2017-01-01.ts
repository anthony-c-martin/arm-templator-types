import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AutoStorageBaseProperties {
  storageAccountId: Expressionable<string>;
}

export interface BatchAccountBaseProperties {
  autoStorage?: Expressionable<AutoStorageBaseProperties>;
  keyVaultReference?: Expressionable<KeyVaultReference>;
  poolAllocationMode?: Expressionable<('BatchService' | 'UserSubscription')>;
}

export interface KeyVaultReference {
  id: Expressionable<string>;
  url: Expressionable<string>;
}

export namespace batchAccounts {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type BatchAccountsResource = ResourceDefinition<BatchAccountBaseProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: BatchAccountBaseProperties, location: Expressionable<string>, tags?: Expressionable<any>): BatchAccountsResource {
    return {
      type: 'Microsoft.Batch/batchAccounts',
      apiVersion: '2017-01-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace batchAccounts {
  export namespace applications {
    export type ApplicationsResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ApplicationsResource {
      return {
        type: 'Microsoft.Batch/batchAccounts/applications',
        apiVersion: '2017-01-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace batchAccounts {
  export namespace applications {
    export namespace versions {
      export type VersionsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): VersionsResource {
        return {
          type: 'Microsoft.Batch/batchAccounts/applications/versions',
          apiVersion: '2017-01-01',
          name: name,
          properties,
        };
      }
    }
  }
}