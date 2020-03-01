import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AdvisorPropertiesModel {
  autoExecuteValue: Expressionable<('Enabled' | 'Disabled' | 'Default')>;
}

export interface BackupLongTermRetentionPolicyProperties {
  recoveryServicesBackupPolicyResourceId: Expressionable<string>;
  state: Expressionable<('Disabled' | 'Enabled')>;
}

export interface BackupLongTermRetentionVaultProperties {
  recoveryServicesVaultResourceId: Expressionable<string>;
}

export interface DatabaseConnectionPolicyProperties {
  proxyDnsName?: Expressionable<string>;
  proxyPort?: Expressionable<string>;
  redirectionState?: Expressionable<string>;
  securityEnabledAccess?: Expressionable<string>;
  state?: Expressionable<string>;
  useServerDefault?: Expressionable<string>;
  visibility?: Expressionable<string>;
}

export interface DatabaseProperties {
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Copy' | 'Default' | 'NonReadableSecondary' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreLongTermRetentionBackup' | 'Secondary' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary')>;
  edition?: Expressionable<('Web' | 'Business' | 'Basic' | 'Standard' | 'Premium' | 'PremiumRS' | 'Free' | 'Stretch' | 'DataWarehouse' | 'System' | 'System2' | 'GeneralPurpose' | 'BusinessCritical' | 'Hyperscale')>;
  elasticPoolName?: Expressionable<string>;
  maxSizeBytes?: Expressionable<string>;
  readScale?: Expressionable<('Enabled' | 'Disabled')>;
  recoveryServicesRecoveryPointResourceId?: Expressionable<string>;
  requestedServiceObjectiveId?: Expressionable<string>;
  requestedServiceObjectiveName?: Expressionable<('System' | 'System0' | 'System1' | 'System2' | 'System3' | 'System4' | 'System2L' | 'System3L' | 'System4L' | 'Free' | 'Basic' | 'S0' | 'S1' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'S12' | 'P1' | 'P2' | 'P3' | 'P4' | 'P6' | 'P11' | 'P15' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'DW100' | 'DW200' | 'DW300' | 'DW400' | 'DW500' | 'DW600' | 'DW1000' | 'DW1200' | 'DW1000c' | 'DW1500' | 'DW1500c' | 'DW2000' | 'DW2000c' | 'DW3000' | 'DW2500c' | 'DW3000c' | 'DW6000' | 'DW5000c' | 'DW6000c' | 'DW7500c' | 'DW10000c' | 'DW15000c' | 'DW30000c' | 'DS100' | 'DS200' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS2000' | 'ElasticPool')>;
  restorePointInTime?: Expressionable<string>;
  sampleName?: Expressionable<('AdventureWorksLT' | 'WideWorldImportersStd' | 'WideWorldImportersFull')>;
  sourceDatabaseDeletionDate?: Expressionable<string>;
  sourceDatabaseId?: Expressionable<string>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface DatabaseSecurityAlertPolicyProperties {
  disabledAlerts?: Expressionable<string>;
  emailAccountAdmins?: Expressionable<('Enabled' | 'Disabled')>;
  emailAddresses?: Expressionable<string>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('New' | 'Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
  useServerDefault?: Expressionable<('Enabled' | 'Disabled')>;
}

export interface DatabaseTableAuditingPolicyProperties {
  auditingState?: Expressionable<string>;
  auditLogsTableName?: Expressionable<string>;
  eventTypesToAudit?: Expressionable<string>;
  fullAuditLogsTableName?: Expressionable<string>;
  retentionDays?: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountName?: Expressionable<string>;
  storageAccountResourceGroupName?: Expressionable<string>;
  storageAccountSecondaryKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageTableEndpoint?: Expressionable<string>;
  useServerDefault?: Expressionable<string>;
}

export interface DataMaskingPolicyProperties {
  dataMaskingState: Expressionable<('Disabled' | 'Enabled')>;
  exemptPrincipals?: Expressionable<string>;
}

export interface DataMaskingRuleProperties {
  aliasName?: Expressionable<string>;
  columnName: Expressionable<string>;
  maskingFunction: Expressionable<('Default' | 'CCN' | 'Email' | 'Number' | 'SSN' | 'Text')>;
  numberFrom?: Expressionable<string>;
  numberTo?: Expressionable<string>;
  prefixSize?: Expressionable<string>;
  replacementString?: Expressionable<string>;
  ruleState?: Expressionable<('Disabled' | 'Enabled')>;
  schemaName: Expressionable<string>;
  suffixSize?: Expressionable<string>;
  tableName: Expressionable<string>;
}

export interface ElasticPoolPropertiesModel {
  databaseDtuMax?: Expressionable<number>;
  databaseDtuMin?: Expressionable<number>;
  dtu?: Expressionable<number>;
  edition?: Expressionable<('Basic' | 'Standard' | 'Premium' | 'GeneralPurpose' | 'BusinessCritical')>;
  storageMB?: Expressionable<number>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface FirewallRuleProperties {
  endIpAddress: Expressionable<string>;
  startIpAddress: Expressionable<string>;
}

export interface GeoBackupPolicyProperties {
  state: Expressionable<('Disabled' | 'Enabled')>;
}

export interface ImportExtensionProperties {
  administratorLogin: Expressionable<string>;
  administratorLoginPassword: Expressionable<string>;
  authenticationType?: Expressionable<('SQL' | 'ADPassword')>;
  operationMode: Expressionable<('Import')>;
  storageKey: Expressionable<string>;
  storageKeyType: Expressionable<('StorageAccessKey' | 'SharedAccessKey')>;
  storageUri: Expressionable<string>;
}

export interface ServerAdministratorProperties {
  administratorType: Expressionable<('ActiveDirectory')>;
  login: Expressionable<string>;
  sid: Expressionable<string>;
  tenantId: Expressionable<string>;
}

export interface ServerCommunicationLinkProperties {
  partnerServer: Expressionable<string>;
}

export interface ServerConnectionPolicyProperties {
  connectionType: Expressionable<('Default' | 'Proxy' | 'Redirect')>;
}

export interface ServerPropertiesModel {
  administratorLogin?: Expressionable<string>;
  administratorLoginPassword?: Expressionable<string>;
  version?: Expressionable<('2.0' | '12.0')>;
}

export interface ServerTableAuditingPolicyProperties {
  auditingState?: Expressionable<string>;
  auditLogsTableName?: Expressionable<string>;
  eventTypesToAudit?: Expressionable<string>;
  fullAuditLogsTableName?: Expressionable<string>;
  retentionDays?: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountName?: Expressionable<string>;
  storageAccountResourceGroupName?: Expressionable<string>;
  storageAccountSecondaryKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageTableEndpoint?: Expressionable<string>;
}

export interface TransparentDataEncryptionProperties {
  status?: Expressionable<('Enabled' | 'Disabled')>;
}

export namespace servers {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ServersResource = ResourceDefinition<ServerPropertiesModel, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ServerPropertiesModel, location: Expressionable<string>, tags?: Expressionable<any>): ServersResource {
    return {
      type: 'Microsoft.Sql/servers',
      apiVersion: '2014-04-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace servers {
  export namespace administrators {
    export type AdministratorsResource = ResourceDefinition<ServerAdministratorProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerAdministratorProperties): AdministratorsResource {
      return {
        type: 'Microsoft.Sql/servers/administrators',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace advisors {
    export type AdvisorsResource = ResourceDefinition<AdvisorPropertiesModel, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AdvisorPropertiesModel): AdvisorsResource {
      return {
        type: 'Microsoft.Sql/servers/advisors',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace auditingPolicies {
    export type AuditingPoliciesResource = ResourceDefinition<ServerTableAuditingPolicyProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerTableAuditingPolicyProperties): AuditingPoliciesResource {
      return {
        type: 'Microsoft.Sql/servers/auditingPolicies',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace backupLongTermRetentionVaults {
    export type BackupLongTermRetentionVaultsResource = ResourceDefinition<BackupLongTermRetentionVaultProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BackupLongTermRetentionVaultProperties): BackupLongTermRetentionVaultsResource {
      return {
        type: 'Microsoft.Sql/servers/backupLongTermRetentionVaults',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace communicationLinks {
    export type CommunicationLinksResource = ResourceDefinition<ServerCommunicationLinkProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerCommunicationLinkProperties): CommunicationLinksResource {
      return {
        type: 'Microsoft.Sql/servers/communicationLinks',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace connectionPolicies {
    export type ConnectionPoliciesResource = ResourceDefinition<ServerConnectionPolicyProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerConnectionPolicyProperties): ConnectionPoliciesResource {
      return {
        type: 'Microsoft.Sql/servers/connectionPolicies',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type DatabasesResource = ResourceDefinition<DatabaseProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties, location: Expressionable<string>, tags?: Expressionable<any>): DatabasesResource {
      return {
        type: 'Microsoft.Sql/servers/databases',
        apiVersion: '2014-04-01',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace advisors {
      export type AdvisorsResource = ResourceDefinition<AdvisorPropertiesModel, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AdvisorPropertiesModel): AdvisorsResource {
        return {
          type: 'Microsoft.Sql/servers/databases/advisors',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace auditingPolicies {
      export type AuditingPoliciesResource = ResourceDefinition<DatabaseTableAuditingPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseTableAuditingPolicyProperties): AuditingPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/auditingPolicies',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace backupLongTermRetentionPolicies {
      export type BackupLongTermRetentionPoliciesResource = ResourceDefinition<BackupLongTermRetentionPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BackupLongTermRetentionPolicyProperties): BackupLongTermRetentionPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace connectionPolicies {
      export type ConnectionPoliciesResource = ResourceDefinition<DatabaseConnectionPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseConnectionPolicyProperties): ConnectionPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/connectionPolicies',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace dataMaskingPolicies {
      export type DataMaskingPoliciesResource = ResourceDefinition<DataMaskingPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DataMaskingPolicyProperties): DataMaskingPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/dataMaskingPolicies',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace dataMaskingPolicies {
      export namespace rules {
        export type RulesResource = ResourceDefinition<DataMaskingRuleProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DataMaskingRuleProperties): RulesResource {
          return {
            type: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules',
            apiVersion: '2014-04-01',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace extensions {
      export type ExtensionsResource = ResourceDefinition<ImportExtensionProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ImportExtensionProperties): ExtensionsResource {
        return {
          type: 'Microsoft.Sql/servers/databases/extensions',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace geoBackupPolicies {
      export type GeoBackupPoliciesResource = ResourceDefinition<GeoBackupPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: GeoBackupPolicyProperties): GeoBackupPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/geoBackupPolicies',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace securityAlertPolicies {
      export type SecurityAlertPoliciesResource = ResourceDefinition<DatabaseSecurityAlertPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseSecurityAlertPolicyProperties, location?: Expressionable<string>): SecurityAlertPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/securityAlertPolicies',
          apiVersion: '2014-04-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace transparentDataEncryption {
      export type TransparentDataEncryptionResource = ResourceDefinition<TransparentDataEncryptionProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: TransparentDataEncryptionProperties): TransparentDataEncryptionResource {
        return {
          type: 'Microsoft.Sql/servers/databases/transparentDataEncryption',
          apiVersion: '2014-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace disasterRecoveryConfiguration {
    export type DisasterRecoveryConfigurationResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): DisasterRecoveryConfigurationResource {
      return {
        type: 'Microsoft.Sql/servers/disasterRecoveryConfiguration',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace elasticPools {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type ElasticPoolsResource = ResourceDefinition<ElasticPoolPropertiesModel, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ElasticPoolPropertiesModel, location: Expressionable<string>, tags?: Expressionable<any>): ElasticPoolsResource {
      return {
        type: 'Microsoft.Sql/servers/elasticPools',
        apiVersion: '2014-04-01',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace servers {
  export namespace firewallRules {
    export type FirewallRulesResource = ResourceDefinition<FirewallRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FirewallRuleProperties): FirewallRulesResource {
      return {
        type: 'Microsoft.Sql/servers/firewallRules',
        apiVersion: '2014-04-01',
        name: name,
        properties,
      };
    }
  }
}