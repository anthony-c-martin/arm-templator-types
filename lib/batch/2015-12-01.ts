import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AutoStorageBaseProperties {
  storageAccountId: Expressionable<string>;
}

export interface BatchAccountBaseProperties {
  autoStorage?: Expressionable<AutoStorageBaseProperties>;
}

export namespace batchAccounts {
  export function create(name: Expressionable<string>, properties: BatchAccountBaseProperties, location: Expressionable<string>): ResourceDefinition<BatchAccountBaseProperties> {
    return {
      type: 'Microsoft.Batch/batchAccounts',
      apiVersion: '2015-12-01',
      name: name,
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
        apiVersion: '2015-12-01',
        name: concatResourceName(...name),
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
          apiVersion: '2015-12-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}