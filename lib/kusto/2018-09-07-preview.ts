import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface Sku {
}

export interface AzureSku {
  name: Expressionable<('D13_v2' | 'D14_v2' | 'L8' | 'L16')>;
  capacity?: Expressionable<number>;
  tier: Expressionable<('Standard')>;
}

export interface ClusterProperties {
  state?: Expressionable<('Creating' | 'Unavailable' | 'Running' | 'Deleting' | 'Deleted' | 'Stopping' | 'Stopped' | 'Starting' | 'Updating')>;
  provisioningState?: Expressionable<('Running' | 'Creating' | 'Deleting' | 'Succeeded' | 'Failed')>;
  uri?: Expressionable<string>;
  dataIngestionUri?: Expressionable<string>;
  trustedExternalTenants?: Expressionable<TrustedExternalTenant[]>;
}

export interface DatabaseProperties {
  softDeletePeriodInDays: Expressionable<number>;
  hotCachePeriodInDays?: Expressionable<number>;
}

export interface EventHubDataConnection {
  kind: Expressionable<('EventHub')>;
  properties: Expressionable<EventHubDataConnectionProperties>;
}

export interface EventHubDataConnectionProperties {
  eventHubResourceId: Expressionable<string>;
  consumerGroup: Expressionable<string>;
  tableName?: Expressionable<string>;
  mappingRuleName?: Expressionable<string>;
  dataFormat?: Expressionable<DataFormat>;
}

export interface EventGridDataConnection {
  kind: Expressionable<('EventGrid')>;
  properties: Expressionable<EventGridDataConnectionProperties>;
}

export interface EventGridDataConnectionProperties {
  storageAccountResourceId: Expressionable<string>;
  eventHubResourceId: Expressionable<string>;
  consumerGroup: Expressionable<string>;
  tableName: Expressionable<string>;
  mappingRuleName?: Expressionable<string>;
  dataFormat: Expressionable<DataFormat>;
}

export interface DataFormat {
}

export interface TrustedExternalTenant {
  value?: Expressionable<string>;
}

export namespace clusters {
  export interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export type ClustersResource = ResourceDefinition<ClusterProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ClustersResource {
    return {
      type: 'Microsoft.Kusto/clusters',
      apiVersion: '2018-09-07-preview',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace clusters {
  export namespace databases {
    export type DatabasesResource = ResourceDefinition<DatabaseProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties): DatabasesResource {
      return {
        type: 'Microsoft.Kusto/clusters/databases',
        apiVersion: '2018-09-07-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace databases {
    export namespace dataconnections {
      export type DataconnectionsResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): DataconnectionsResource {
        return {
          type: 'Microsoft.Kusto/clusters/databases/dataconnections',
          apiVersion: '2018-09-07-preview',
          name: name,
          properties,
        };
      }
    }
  }
}