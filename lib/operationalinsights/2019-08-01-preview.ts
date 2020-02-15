// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-08-01-preview/Microsoft.OperationalInsights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ClusterProperties {
  encryptionKeyUri?: Expressionable<string>;
  nextLink?: Expressionable<string>;
}

export interface DataExportProperties {
  allTables?: Expressionable<boolean>;
  createdDate?: Expressionable<string>;
  dataExportId?: Expressionable<string>;
  destination?: Expressionable<Destination>;
  enable?: Expressionable<boolean>;
  lastModifiedDate?: Expressionable<string>;
  tableNames?: Expressionable<string[]>;
}

export interface Destination {
  metaData?: Expressionable<DestinationMetaData>;
  resourceId: Expressionable<string>;
}

export interface DestinationMetaData {
  eventHubName?: Expressionable<string>;
}

export interface Identity {
  type: Expressionable<('SystemAssigned' | 'None')>;
}

export namespace clusters {
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>): ResourceDefinition<ClusterProperties> {
    return {
      type: 'Microsoft.OperationalInsights/clusters',
      apiVersion: '2019-08-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace workspaces {
  export namespace dataExports {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DataExportProperties, location: Expressionable<string>): ResourceDefinition<DataExportProperties> {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/dataExports',
        apiVersion: '2019-08-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
