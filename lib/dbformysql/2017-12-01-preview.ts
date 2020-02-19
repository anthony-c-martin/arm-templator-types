import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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

export interface ServerAdministratorProperties {
  administratorType: Expressionable<('ActiveDirectory')>;
  login: Expressionable<string>;
  sid: Expressionable<string>;
  tenantId: Expressionable<string>;
}

export interface ServerPropertiesForCreate {
  sslEnforcement?: Expressionable<('Enabled' | 'Disabled')>;
  storageProfile?: Expressionable<StorageProfile>;
  version?: Expressionable<('5.6' | '5.7' | '8.0')>;
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
  interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: ServerPropertiesForCreate, location: Expressionable<string>, sku?: Expressionable<Sku>): ResourceDefinition<ServerPropertiesForCreate> & AdditionalProps {
    return {
      type: 'Microsoft.DBforMySQL/servers',
      apiVersion: '2017-12-01-preview',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace servers {
  export namespace Administrators {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerAdministratorProperties): ResourceDefinition<ServerAdministratorProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/Administrators',
        apiVersion: '2017-12-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace configurations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConfigurationProperties): ResourceDefinition<ConfigurationProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/configurations',
        apiVersion: '2017-12-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties): ResourceDefinition<DatabaseProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/databases',
        apiVersion: '2017-12-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace firewallRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FirewallRuleProperties): ResourceDefinition<FirewallRuleProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/firewallRules',
        apiVersion: '2017-12-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace securityAlertPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties): ResourceDefinition<SecurityAlertPolicyProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/securityAlertPolicies',
        apiVersion: '2017-12-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace virtualNetworkRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkRuleProperties): ResourceDefinition<VirtualNetworkRuleProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/virtualNetworkRules',
        apiVersion: '2017-12-01-preview',
        name: name,
        properties,
      };
    }
  }
}