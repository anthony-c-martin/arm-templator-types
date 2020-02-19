import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Sku {
}

export interface AzureSku {
  name: Expressionable<('D13_v2' | 'D14_v2' | 'L8' | 'L16' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_L4s' | 'Dev(No SLA)_Standard_D11_v2')>;
  capacity?: Expressionable<number>;
  tier: Expressionable<('Basic' | 'Standard')>;
}

export interface ClusterProperties {
  trustedExternalTenants?: Expressionable<TrustedExternalTenant[]>;
}

export interface DatabaseProperties {
  softDeletePeriod?: Expressionable<string>;
  hotCachePeriod?: Expressionable<string>;
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
      apiVersion: '2019-01-21',
      name: [name],
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
        apiVersion: '2019-01-21',
        name: name,
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
          apiVersion: '2019-01-21',
          name: name,
          properties,
        };
      }
    }
  }
}