import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ConfigurationProperties {
  source?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface DatabaseProperties {
  charset?: Expressionable<string>;
  collation?: Expressionable<string>;
}

export interface FirewallRuleProperties {
  endIpAddress: Expressionable<string>;
  startIpAddress: Expressionable<string>;
}

export interface PrivateEndpointConnectionProperties {
  privateEndpoint?: Expressionable<PrivateEndpointProperty>;
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionStateProperty>;
}

export interface PrivateEndpointProperty {
  id?: Expressionable<string>;
}

export interface PrivateLinkServiceConnectionStateProperty {
  description: Expressionable<string>;
  status: Expressionable<string>;
}

export interface SecurityAlertPolicyProperties {
  disabledAlerts?: Expressionable<string[]>;
  emailAccountAdmins?: Expressionable<boolean>;
  emailAddresses?: Expressionable<string[]>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
}

export interface ServerPropertiesForCreate {
  sslEnforcement?: Expressionable<('Enabled' | 'Disabled')>;
  storageProfile?: Expressionable<StorageProfile>;
  version?: Expressionable<('5.6' | '5.7')>;
}

export interface ServerPropertiesForDefaultCreate {
  administratorLogin: Expressionable<string>;
  administratorLoginPassword: Expressionable<string>;
  createMode: Expressionable<('Default')>;
}

export interface ServerPropertiesForGeoRestore {
  createMode: Expressionable<('GeoRestore')>;
  sourceServerId: Expressionable<string>;
}

export interface ServerPropertiesForReplica {
  createMode: Expressionable<('Replica')>;
  sourceServerId: Expressionable<string>;
}

export interface ServerPropertiesForRestore {
  createMode: Expressionable<('PointInTimeRestore')>;
  restorePointInTime: Expressionable<string>;
  sourceServerId: Expressionable<string>;
}

export interface Sku {
  capacity?: Expressionable<number>;
  family?: Expressionable<string>;
  name?: Expressionable<string>;
  size?: Expressionable<string>;
  tier?: Expressionable<('Basic' | 'GeneralPurpose' | 'MemoryOptimized')>;
}

export interface StorageProfile {
  backupRetentionDays?: Expressionable<number>;
  geoRedundantBackup?: Expressionable<('Enabled' | 'Disabled')>;
  storageAutogrow?: Expressionable<('Enabled' | 'Disabled')>;
  storageMB?: Expressionable<number>;
}

export interface VirtualNetworkRuleProperties {
  ignoreMissingVnetServiceEndpoint?: Expressionable<boolean>;
  virtualNetworkSubnetId: Expressionable<string>;
}

export namespace servers {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type ServersResource = ResourceDefinition<ServerPropertiesForCreate, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ServerPropertiesForCreate, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): ServersResource {
    return {
      type: 'Microsoft.DBforMariaDB/servers',
      apiVersion: '2018-06-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        tags,
      },
    };
  }
}
export namespace servers {
  export namespace configurations {
    export type ConfigurationsResource = ResourceDefinition<ConfigurationProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConfigurationProperties): ConfigurationsResource {
      return {
        type: 'Microsoft.DBforMariaDB/servers/configurations',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export type DatabasesResource = ResourceDefinition<DatabaseProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties): DatabasesResource {
      return {
        type: 'Microsoft.DBforMariaDB/servers/databases',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace firewallRules {
    export type FirewallRulesResource = ResourceDefinition<FirewallRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FirewallRuleProperties): FirewallRulesResource {
      return {
        type: 'Microsoft.DBforMariaDB/servers/firewallRules',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace privateEndpointConnections {
    export type PrivateEndpointConnectionsResource = ResourceDefinition<PrivateEndpointConnectionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): PrivateEndpointConnectionsResource {
      return {
        type: 'Microsoft.DBforMariaDB/servers/privateEndpointConnections',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace securityAlertPolicies {
    export type SecurityAlertPoliciesResource = ResourceDefinition<SecurityAlertPolicyProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties): SecurityAlertPoliciesResource {
      return {
        type: 'Microsoft.DBforMariaDB/servers/securityAlertPolicies',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace virtualNetworkRules {
    export type VirtualNetworkRulesResource = ResourceDefinition<VirtualNetworkRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkRuleProperties): VirtualNetworkRulesResource {
      return {
        type: 'Microsoft.DBforMariaDB/servers/virtualNetworkRules',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}