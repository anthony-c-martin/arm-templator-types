// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-12-01/Microsoft.DBforPostgreSQL.json'
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
  version?: Expressionable<('9.5' | '9.6' | '10' | '10.0' | '10.2' | '11')>;
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
      type: 'Microsoft.DBforPostgreSQL/servers',
      apiVersion: '2017-12-01',
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
        type: 'Microsoft.DBforPostgreSQL/servers/configurations',
        apiVersion: '2017-12-01',
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
        type: 'Microsoft.DBforPostgreSQL/servers/databases',
        apiVersion: '2017-12-01',
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
        type: 'Microsoft.DBforPostgreSQL/servers/firewallRules',
        apiVersion: '2017-12-01',
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
        type: 'Microsoft.DBforPostgreSQL/servers/securityAlertPolicies',
        apiVersion: '2017-12-01',
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
        type: 'Microsoft.DBforPostgreSQL/servers/virtualNetworkRules',
        apiVersion: '2017-12-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
