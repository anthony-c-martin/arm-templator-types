import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<ClusterProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Kusto/clusters',
      apiVersion: '2018-09-07-preview',
      name: name,
      location,
      sku,
      properties,
    };
  }
}
export namespace clusters {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties): ResourceDefinition<DatabaseProperties> {
      return {
        type: 'Microsoft.Kusto/clusters/databases',
        apiVersion: '2018-09-07-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace databases {
    export namespace dataconnections {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
        return {
          type: 'Microsoft.Kusto/clusters/databases/dataconnections',
          apiVersion: '2018-09-07-preview',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}