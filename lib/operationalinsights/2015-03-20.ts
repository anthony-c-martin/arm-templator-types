import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface SavedSearchProperties {
  category: Expressionable<string>;
  displayName: Expressionable<string>;
  query: Expressionable<string>;
  tags?: Expressionable<Tag[]>;
  version?: Expressionable<number>;
}

export interface StorageAccount {
  id: Expressionable<string>;
  key: Expressionable<string>;
}

export interface StorageInsightProperties {
  containers?: Expressionable<string[]>;
  storageAccount: Expressionable<StorageAccount>;
  tables?: Expressionable<string[]>;
}

export interface Tag {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export namespace workspaces {
  export namespace savedSearches {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SavedSearchProperties): ResourceDefinition<SavedSearchProperties> {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/savedSearches',
        apiVersion: '2015-03-20',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace workspaces {
  export namespace storageInsightConfigs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageInsightProperties): ResourceDefinition<StorageInsightProperties> {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs',
        apiVersion: '2015-03-20',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}