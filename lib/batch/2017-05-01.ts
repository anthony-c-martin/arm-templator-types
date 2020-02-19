import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AutoStorageBaseProperties {
  storageAccountId: Expressionable<string>;
}

export interface BatchAccountCreateProperties {
  autoStorage?: Expressionable<AutoStorageBaseProperties>;
  keyVaultReference?: Expressionable<KeyVaultReference>;
  poolAllocationMode?: Expressionable<('BatchService' | 'UserSubscription')>;
}

export interface KeyVaultReference {
  id: Expressionable<string>;
  url: Expressionable<string>;
}

export namespace batchAccounts {
  export function create(name: Expressionable<string>, properties: BatchAccountCreateProperties, location: Expressionable<string>): ResourceDefinition<BatchAccountCreateProperties> {
    return {
      type: 'Microsoft.Batch/batchAccounts',
      apiVersion: '2017-05-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace batchAccounts {
  export namespace applications {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Batch/batchAccounts/applications',
        apiVersion: '2017-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace batchAccounts {
  export namespace applications {
    export namespace versions {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
        return {
          type: 'Microsoft.Batch/batchAccounts/applications/versions',
          apiVersion: '2017-05-01',
          name: name,
          properties,
        };
      }
    }
  }
}