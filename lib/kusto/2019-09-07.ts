import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AzureSku {
  name: Expressionable<('KC8' | 'KC16' | 'KS8' | 'KS16' | 'D13_v2' | 'D14_v2' | 'L8' | 'L16' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_L4s' | 'Dev(No SLA)_Standard_D11_v2')>;
  capacity?: Expressionable<number>;
  tier: Expressionable<('Standard' | 'Basic')>;
}

export interface ClusterProperties {
  trustedExternalTenants?: Expressionable<TrustedExternalTenant[]>;
  optimizedAutoscale?: Expressionable<OptimizedAutoscale>;
  enableDiskEncryption?: Expressionable<boolean>;
  enableStreamingIngest?: Expressionable<boolean>;
  virtualNetworkConfiguration?: Expressionable<VirtualNetworkConfiguration>;
  keyVaultProperties?: Expressionable<KeyVaultProperties>;
}

export interface ReadWriteDatabaseProperties {
  softDeletePeriod?: Expressionable<string>;
  hotCachePeriod?: Expressionable<string>;
}

export interface ReadWriteDatabase {
  properties: Expressionable<ReadWriteDatabaseProperties>;
  kind: Expressionable<('ReadWrite')>;
}

export interface AttachedDatabaseConfigurationsProperties {
  databaseName?: Expressionable<string>;
  clusterResourceId?: Expressionable<string>;
  defaultPrincipalsModificationKind?: Expressionable<('Union' | 'Replace' | 'None')>;
}

export interface EventGridDataConnectionProperties {
  storageAccountResourceId: Expressionable<string>;
  eventHubResourceId: Expressionable<string>;
  consumerGroup: Expressionable<string>;
  tableName: Expressionable<string>;
  mappingRuleName?: Expressionable<string>;
  dataFormat: Expressionable<DataFormat>;
}

export interface EventGridDataConnection {
  properties?: Expressionable<EventGridDataConnectionProperties>;
  kind: Expressionable<('EventGrid')>;
}

export interface EventHubDataConnectionProperties {
  eventHubResourceId: Expressionable<string>;
  consumerGroup: Expressionable<string>;
  tableName?: Expressionable<string>;
  mappingRuleName?: Expressionable<string>;
  dataFormat?: Expressionable<DataFormat>;
  eventSystemProperties?: Expressionable<EventSystemProperties>;
}

export interface EventHubDataConnection {
  properties?: Expressionable<EventHubDataConnectionProperties>;
  kind: Expressionable<('EventHub')>;
}

export interface Identity {
  type: Expressionable<('None' | 'SystemAssigned')>;
}

export interface IotHubDataConnectionProperties {
  iotHubResourceId: Expressionable<string>;
  consumerGroup: Expressionable<string>;
  tableName?: Expressionable<string>;
  mappingRuleName?: Expressionable<string>;
  dataFormat?: Expressionable<DataFormat>;
  eventSystemProperties?: Expressionable<EventSystemProperties>;
  sharedAccessPolicyName: Expressionable<string>;
}

export interface IotHubDataConnection {
  properties?: Expressionable<IotHubDataConnectionProperties>;
  kind: Expressionable<('IotHub')>;
}

export interface KeyVaultProperties {
  keyName: Expressionable<string>;
  keyVersion: Expressionable<string>;
  keyVaultUri: Expressionable<string>;
}

export interface OptimizedAutoscale {
  version: Expressionable<number>;
  isEnabled: Expressionable<boolean>;
  minimum: Expressionable<number>;
  maximum: Expressionable<number>;
}

export interface TrustedExternalTenant {
  value?: Expressionable<string>;
}

export interface VirtualNetworkConfiguration {
  subnetId: Expressionable<string>;
  enginePublicIpId: Expressionable<string>;
  dataManagementPublicIpId: Expressionable<string>;
}

export interface DataFormat {
}

export interface EventSystemProperties {
}

export namespace clusters {
  interface AdditionalProps {
    sku: Expressionable<AzureSku>;
    zones?: Expressionable<string[]>;
    identity?: Expressionable<Identity>;
  }
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>, sku: Expressionable<AzureSku>, identity?: Expressionable<Identity>, zones?: Expressionable<string[]>): ResourceDefinition<ClusterProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Kusto/clusters',
      apiVersion: '2019-09-07',
      name: name,
      location,
      identity,
      sku,
      zones,
      properties,
    };
  }
}
export namespace clusters {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ReadWriteDatabaseProperties, location?: Expressionable<string>): ResourceDefinition<ReadWriteDatabaseProperties> {
      return {
        type: 'Microsoft.Kusto/clusters/databases',
        apiVersion: '2019-09-07',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace databases {
    export namespace dataConnections {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
        return {
          type: 'Microsoft.Kusto/clusters/databases/dataConnections',
          apiVersion: '2019-09-07',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace clusters {
  export namespace AttachedDatabaseConfigurations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AttachedDatabaseConfigurationsProperties, location?: Expressionable<string>): ResourceDefinition<AttachedDatabaseConfigurationsProperties> {
      return {
        type: 'Microsoft.Kusto/clusters/AttachedDatabaseConfigurations',
        apiVersion: '2019-09-07',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}