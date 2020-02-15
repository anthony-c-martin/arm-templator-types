// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-06-01-preview/Microsoft.DBforMariaDB.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: ServerPropertiesForCreate, location: Expressionable<string>): ResourceDefinition<ServerPropertiesForCreate> {
    return {
      type: 'Microsoft.DBforMariaDB/servers',
      apiVersion: '2018-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace servers {
  export namespace configurations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConfigurationProperties, location: Expressionable<string>): ResourceDefinition<ConfigurationProperties> {
      return {
        type: 'Microsoft.DBforMariaDB/servers/configurations',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties, location: Expressionable<string>): ResourceDefinition<DatabaseProperties> {
      return {
        type: 'Microsoft.DBforMariaDB/servers/databases',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace firewallRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FirewallRuleProperties, location: Expressionable<string>): ResourceDefinition<FirewallRuleProperties> {
      return {
        type: 'Microsoft.DBforMariaDB/servers/firewallRules',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace securityAlertPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties, location: Expressionable<string>): ResourceDefinition<SecurityAlertPolicyProperties> {
      return {
        type: 'Microsoft.DBforMariaDB/servers/securityAlertPolicies',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace virtualNetworkRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkRuleProperties, location: Expressionable<string>): ResourceDefinition<VirtualNetworkRuleProperties> {
      return {
        type: 'Microsoft.DBforMariaDB/servers/virtualNetworkRules',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
