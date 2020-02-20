import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export interface AddedResourceProps {
    identity?: Expressionable<Identity>;
    tags?: Expressionable<any>;
  }
  
  export type ClustersResource = ResourceDefinition<ClusterProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location?: Expressionable<string>, identity?: Expressionable<Identity>, tags?: Expressionable<any>): ClustersResource {
    return {
      type: 'Microsoft.OperationalInsights/clusters',
      apiVersion: '2019-08-01-preview',
      name: [name],
      location,
      identity,
      tags,
      properties,
    };
  }
}
export namespace workspaces {
  export namespace dataExports {
    export type DataExportsResource = ResourceDefinition<DataExportProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DataExportProperties): DataExportsResource {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/dataExports',
        apiVersion: '2019-08-01-preview',
        name: name,
        properties,
      };
    }
  }
}