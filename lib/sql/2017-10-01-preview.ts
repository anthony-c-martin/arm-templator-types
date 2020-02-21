import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface BackupShortTermRetentionPolicyProperties {
  retentionDays?: Expressionable<number>;
}

export interface DatabaseProperties {
  autoPauseDelay?: Expressionable<number>;
  catalogCollation?: Expressionable<('DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS')>;
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Copy' | 'Default' | 'NonReadableSecondary' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreLongTermRetentionBackup' | 'Secondary' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary')>;
  elasticPoolId?: Expressionable<string>;
  licenseType?: Expressionable<('LicenseIncluded' | 'BasePrice')>;
  longTermRetentionBackupResourceId?: Expressionable<string>;
  maxSizeBytes?: Expressionable<number>;
  minCapacity?: Expressionable<number>;
  readReplicaCount?: Expressionable<number>;
  readScale?: Expressionable<('Enabled' | 'Disabled')>;
  recoverableDatabaseId?: Expressionable<string>;
  recoveryServicesRecoveryPointId?: Expressionable<string>;
  restorableDroppedDatabaseId?: Expressionable<string>;
  restorePointInTime?: Expressionable<string>;
  sampleName?: Expressionable<('AdventureWorksLT' | 'WideWorldImportersStd' | 'WideWorldImportersFull')>;
  sourceDatabaseDeletionDate?: Expressionable<string>;
  sourceDatabaseId?: Expressionable<string>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface DatabaseVulnerabilityAssessmentProperties {
  recurringScans?: Expressionable<VulnerabilityAssessmentRecurringScansProperties>;
  storageAccountAccessKey?: Expressionable<string>;
  storageContainerPath?: Expressionable<string>;
  storageContainerSasKey?: Expressionable<string>;
}

export interface DatabaseVulnerabilityAssessmentRuleBaselineItem {
  result: Expressionable<string[]>;
}

export interface DatabaseVulnerabilityAssessmentRuleBaselineProperties {
  baselineResults: Expressionable<DatabaseVulnerabilityAssessmentRuleBaselineItem[]>;
}

export interface ElasticPoolPerDatabaseSettings {
  maxCapacity?: Expressionable<number>;
  minCapacity?: Expressionable<number>;
}

export interface ElasticPoolProperties {
  licenseType?: Expressionable<('LicenseIncluded' | 'BasePrice')>;
  maxSizeBytes?: Expressionable<number>;
  perDatabaseSettings?: Expressionable<ElasticPoolPerDatabaseSettings>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface InstanceFailoverGroupProperties {
  managedInstancePairs: Expressionable<ManagedInstancePairInfo[]>;
  partnerRegions: Expressionable<PartnerRegionInfo[]>;
  readOnlyEndpoint?: Expressionable<InstanceFailoverGroupReadOnlyEndpoint>;
  readWriteEndpoint: Expressionable<InstanceFailoverGroupReadWriteEndpoint>;
}

export interface InstanceFailoverGroupReadOnlyEndpoint {
  failoverPolicy?: Expressionable<('Disabled' | 'Enabled')>;
}

export interface InstanceFailoverGroupReadWriteEndpoint {
  failoverPolicy: Expressionable<('Manual' | 'Automatic')>;
  failoverWithDataLossGracePeriodMinutes?: Expressionable<number>;
}

export interface ManagedInstanceEncryptionProtectorProperties {
  serverKeyName?: Expressionable<string>;
  serverKeyType: Expressionable<('ServiceManaged' | 'AzureKeyVault')>;
}

export interface ManagedInstanceKeyProperties {
  serverKeyType: Expressionable<('ServiceManaged' | 'AzureKeyVault')>;
  uri?: Expressionable<string>;
}

export interface ManagedInstancePairInfo {
  partnerManagedInstanceId?: Expressionable<string>;
  primaryManagedInstanceId?: Expressionable<string>;
}

export interface PartnerRegionInfo {
  location?: Expressionable<string>;
}

export interface Sku {
  capacity?: Expressionable<number>;
  family?: Expressionable<string>;
  name: Expressionable<string>;
  size?: Expressionable<string>;
  tier?: Expressionable<string>;
}

export interface VulnerabilityAssessmentRecurringScansProperties {
  emails?: Expressionable<string[]>;
  emailSubscriptionAdmins?: Expressionable<boolean>;
  isEnabled?: Expressionable<boolean>;
}

export namespace locations {
  export namespace instanceFailoverGroups {
    export type InstanceFailoverGroupsResource = ResourceDefinition<InstanceFailoverGroupProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: InstanceFailoverGroupProperties): InstanceFailoverGroupsResource {
      return {
        type: 'Microsoft.Sql/locations/instanceFailoverGroups',
        apiVersion: '2017-10-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace managedInstances {
  export namespace databases {
    export namespace vulnerabilityAssessments {
      export type VulnerabilityAssessmentsResource = ResourceDefinition<DatabaseVulnerabilityAssessmentProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseVulnerabilityAssessmentProperties): VulnerabilityAssessmentsResource {
        return {
          type: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments',
          apiVersion: '2017-10-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace managedInstances {
  export namespace databases {
    export namespace vulnerabilityAssessments {
      export namespace rules {
        export namespace baselines {
          export type BaselinesResource = ResourceDefinition<DatabaseVulnerabilityAssessmentRuleBaselineProperties, undefined>;
          
          export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseVulnerabilityAssessmentRuleBaselineProperties): BaselinesResource {
            return {
              type: 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines',
              apiVersion: '2017-10-01-preview',
              name: name,
              properties,
            };
          }
        }
      }
    }
  }
}
export namespace managedInstances {
  export namespace encryptionProtector {
    export type EncryptionProtectorResource = ResourceDefinition<ManagedInstanceEncryptionProtectorProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedInstanceEncryptionProtectorProperties): EncryptionProtectorResource {
      return {
        type: 'Microsoft.Sql/managedInstances/encryptionProtector',
        apiVersion: '2017-10-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace managedInstances {
  export namespace keys {
    export type KeysResource = ResourceDefinition<ManagedInstanceKeyProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedInstanceKeyProperties): KeysResource {
      return {
        type: 'Microsoft.Sql/managedInstances/keys',
        apiVersion: '2017-10-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export interface AdditionalProps {
      sku?: Expressionable<Sku>;
      tags?: Expressionable<any>;
    }
    
    export type DatabasesResource = ResourceDefinition<DatabaseProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): DatabasesResource {
      return {
        type: 'Microsoft.Sql/servers/databases',
        apiVersion: '2017-10-01-preview',
        name: name,
        location,
        properties,
        additional: {
          sku,
          tags,
        },
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace backupShortTermRetentionPolicies {
      export type BackupShortTermRetentionPoliciesResource = ResourceDefinition<BackupShortTermRetentionPolicyProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BackupShortTermRetentionPolicyProperties): BackupShortTermRetentionPoliciesResource {
        return {
          type: 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies',
          apiVersion: '2017-10-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace elasticPools {
    export interface AdditionalProps {
      sku?: Expressionable<Sku>;
      tags?: Expressionable<any>;
    }
    
    export type ElasticPoolsResource = ResourceDefinition<ElasticPoolProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ElasticPoolProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): ElasticPoolsResource {
      return {
        type: 'Microsoft.Sql/servers/elasticPools',
        apiVersion: '2017-10-01-preview',
        name: name,
        location,
        properties,
        additional: {
          sku,
          tags,
        },
      };
    }
  }
}