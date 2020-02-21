import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
    export type SavedSearchesResource = ResourceDefinition<SavedSearchProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SavedSearchProperties): SavedSearchesResource {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/savedSearches',
        apiVersion: '2015-03-20',
        name: name,
        properties,
      };
    }
  }
}
export namespace workspaces {
  export namespace storageInsightConfigs {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type StorageInsightConfigsResource = ResourceDefinition<StorageInsightProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageInsightProperties, tags?: Expressionable<any>): StorageInsightConfigsResource {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs',
        apiVersion: '2015-03-20',
        name: name,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}