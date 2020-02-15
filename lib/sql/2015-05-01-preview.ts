// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-05-01-preview/Microsoft.Sql.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface DatabaseBlobAuditingPolicyProperties {
  auditActionsAndGroups?: Expressionable<string[]>;
  isAzureMonitorTargetEnabled?: Expressionable<boolean>;
  isStorageSecondaryKeyInUse?: Expressionable<boolean>;
  queueDelayMs?: Expressionable<number>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
}

export interface EncryptionProtectorProperties {
  serverKeyName?: Expressionable<string>;
  serverKeyType: Expressionable<('ServiceManaged' | 'AzureKeyVault')>;
}

export interface FailoverGroupProperties {
  databases?: Expressionable<string[]>;
  partnerServers: Expressionable<PartnerInfo[]>;
  readOnlyEndpoint?: Expressionable<FailoverGroupReadOnlyEndpoint>;
  readWriteEndpoint: Expressionable<FailoverGroupReadWriteEndpoint>;
}

export interface FailoverGroupReadOnlyEndpoint {
  failoverPolicy?: Expressionable<('Disabled' | 'Enabled')>;
}

export interface FailoverGroupReadWriteEndpoint {
  failoverPolicy: Expressionable<('Manual' | 'Automatic')>;
  failoverWithDataLossGracePeriodMinutes?: Expressionable<number>;
}

export interface FirewallRuleModel {
  name?: Expressionable<string>;
  properties?: Expressionable<ServerFirewallRuleProperties>;
}

export interface ManagedInstanceProperties {
  administratorLogin?: Expressionable<string>;
  administratorLoginPassword?: Expressionable<string>;
  collation?: Expressionable<string>;
  dnsZonePartner?: Expressionable<string>;
  instancePoolId?: Expressionable<string>;
  licenseType?: Expressionable<('LicenseIncluded' | 'BasePrice')>;
  managedInstanceCreateMode?: Expressionable<('Default' | 'PointInTimeRestore')>;
  proxyOverride?: Expressionable<('Proxy' | 'Redirect' | 'Default')>;
  publicDataEndpointEnabled?: Expressionable<boolean>;
  restorePointInTime?: Expressionable<string>;
  sourceManagedInstanceId?: Expressionable<string>;
  storageSizeInGB?: Expressionable<number>;
  subnetId?: Expressionable<string>;
  timezoneId?: Expressionable<string>;
  vCores?: Expressionable<number>;
}

export interface PartnerInfo {
  id: Expressionable<string>;
}

export interface ResourceIdentity {
  type?: Expressionable<('SystemAssigned')>;
}

export interface ServerFirewallRuleProperties {
  endIpAddress?: Expressionable<string>;
  startIpAddress?: Expressionable<string>;
}

export interface ServerKeyProperties {
  creationDate?: Expressionable<string>;
  serverKeyType: Expressionable<('ServiceManaged' | 'AzureKeyVault')>;
  thumbprint?: Expressionable<string>;
  uri?: Expressionable<string>;
}

export interface ServerProperties {
  administratorLogin?: Expressionable<string>;
  administratorLoginPassword?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface Sku {
  capacity?: Expressionable<number>;
  family?: Expressionable<string>;
  name: Expressionable<string>;
  size?: Expressionable<string>;
  tier?: Expressionable<string>;
}

export interface SyncAgentProperties {
  syncDatabaseId?: Expressionable<string>;
}

export interface SyncGroupProperties {
  conflictResolutionPolicy?: Expressionable<('HubWin' | 'MemberWin')>;
  hubDatabasePassword?: Expressionable<string>;
  hubDatabaseUserName?: Expressionable<string>;
  interval?: Expressionable<number>;
  schema?: Expressionable<SyncGroupSchema>;
  syncDatabaseId?: Expressionable<string>;
}

export interface SyncGroupSchema {
  masterSyncMemberName?: Expressionable<string>;
  tables?: Expressionable<SyncGroupSchemaTable[]>;
}

export interface SyncGroupSchemaTable {
  columns?: Expressionable<SyncGroupSchemaTableColumn[]>;
  quotedName?: Expressionable<string>;
}

export interface SyncGroupSchemaTableColumn {
  dataSize?: Expressionable<string>;
  dataType?: Expressionable<string>;
  quotedName?: Expressionable<string>;
}

export interface SyncMemberProperties {
  databaseName?: Expressionable<string>;
  databaseType?: Expressionable<('AzureSqlDatabase' | 'SqlServerDatabase')>;
  password?: Expressionable<string>;
  serverName?: Expressionable<string>;
  sqlServerDatabaseId?: Expressionable<string>;
  syncAgentId?: Expressionable<string>;
  syncDirection?: Expressionable<('Bidirectional' | 'OneWayMemberToHub' | 'OneWayHubToMember')>;
  userName?: Expressionable<string>;
}

export interface VirtualNetworkRuleProperties {
  ignoreMissingVnetServiceEndpoint?: Expressionable<boolean>;
  virtualNetworkSubnetId: Expressionable<string>;
}

export namespace managedInstances {
  export function create(name: Expressionable<string>, properties: ManagedInstanceProperties, location: Expressionable<string>): ResourceDefinition<ManagedInstanceProperties> {
    return {
      type: 'Microsoft.Sql/managedInstances',
      apiVersion: '2015-05-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace servers {
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>): ResourceDefinition<ServerProperties> {
    return {
      type: 'Microsoft.Sql/servers',
      apiVersion: '2015-05-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace servers {
  export namespace databases {
    export namespace auditingSettings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseBlobAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<DatabaseBlobAuditingPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/auditingSettings',
          apiVersion: '2015-05-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace syncGroups {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SyncGroupProperties, location: Expressionable<string>): ResourceDefinition<SyncGroupProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/syncGroups',
          apiVersion: '2015-05-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace syncGroups {
      export namespace syncMembers {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SyncMemberProperties, location: Expressionable<string>): ResourceDefinition<SyncMemberProperties> {
          return {
            type: 'Microsoft.Sql/servers/databases/syncGroups/syncMembers',
            apiVersion: '2015-05-01-preview',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace servers {
  export namespace encryptionProtector {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EncryptionProtectorProperties, location: Expressionable<string>): ResourceDefinition<EncryptionProtectorProperties> {
      return {
        type: 'Microsoft.Sql/servers/encryptionProtector',
        apiVersion: '2015-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace failoverGroups {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FailoverGroupProperties, location: Expressionable<string>): ResourceDefinition<FailoverGroupProperties> {
      return {
        type: 'Microsoft.Sql/servers/failoverGroups',
        apiVersion: '2015-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace firewallRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerFirewallRuleProperties, location: Expressionable<string>): ResourceDefinition<ServerFirewallRuleProperties> {
      return {
        type: 'Microsoft.Sql/servers/firewallRules',
        apiVersion: '2015-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace keys {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerKeyProperties, location: Expressionable<string>): ResourceDefinition<ServerKeyProperties> {
      return {
        type: 'Microsoft.Sql/servers/keys',
        apiVersion: '2015-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace syncAgents {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SyncAgentProperties, location: Expressionable<string>): ResourceDefinition<SyncAgentProperties> {
      return {
        type: 'Microsoft.Sql/servers/syncAgents',
        apiVersion: '2015-05-01-preview',
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
        type: 'Microsoft.Sql/servers/virtualNetworkRules',
        apiVersion: '2015-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
