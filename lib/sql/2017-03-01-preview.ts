// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-03-01-preview/Microsoft.Sql.json'
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

export interface DatabasePropertiesModel {
  catalogCollation?: Expressionable<('DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS')>;
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Copy' | 'Default' | 'NonReadableSecondary' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreLongTermRetentionBackup' | 'Secondary' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary')>;
  elasticPoolId?: Expressionable<string>;
  longTermRetentionBackupResourceId?: Expressionable<string>;
  maxSizeBytes?: Expressionable<number>;
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

export interface ExtendedDatabaseBlobAuditingPolicyProperties {
  auditActionsAndGroups?: Expressionable<string[]>;
  isAzureMonitorTargetEnabled?: Expressionable<boolean>;
  isStorageSecondaryKeyInUse?: Expressionable<boolean>;
  predicateExpression?: Expressionable<string>;
  queueDelayMs?: Expressionable<number>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
}

export interface ExtendedServerBlobAuditingPolicyProperties {
  auditActionsAndGroups?: Expressionable<string[]>;
  isAzureMonitorTargetEnabled?: Expressionable<boolean>;
  isStorageSecondaryKeyInUse?: Expressionable<boolean>;
  predicateExpression?: Expressionable<string>;
  queueDelayMs?: Expressionable<number>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
}

export interface JobAgentProperties {
  databaseId: Expressionable<string>;
}

export interface JobCredentialProperties {
  password: Expressionable<string>;
  username: Expressionable<string>;
}

export interface JobProperties {
  description?: Expressionable<string>;
  schedule?: Expressionable<JobSchedule>;
}

export interface JobSchedule {
  enabled?: Expressionable<boolean>;
  endTime?: Expressionable<string>;
  interval?: Expressionable<string>;
  startTime?: Expressionable<string>;
  type?: Expressionable<('Once' | 'Recurring')>;
}

export interface JobStepAction {
  source?: Expressionable<('Inline')>;
  type?: Expressionable<('TSql')>;
  value: Expressionable<string>;
}

export interface JobStepExecutionOptions {
  initialRetryIntervalSeconds?: Expressionable<number>;
  maximumRetryIntervalSeconds?: Expressionable<number>;
  retryAttempts?: Expressionable<number>;
  retryIntervalBackoffMultiplier?: Expressionable<number>;
  timeoutSeconds?: Expressionable<number>;
}

export interface JobStepOutput {
  credential: Expressionable<string>;
  databaseName: Expressionable<string>;
  resourceGroupName?: Expressionable<string>;
  schemaName?: Expressionable<string>;
  serverName: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
  tableName: Expressionable<string>;
  type?: Expressionable<('SqlDatabase')>;
}

export interface JobStepProperties {
  action: Expressionable<JobStepAction>;
  credential: Expressionable<string>;
  executionOptions?: Expressionable<JobStepExecutionOptions>;
  output?: Expressionable<JobStepOutput>;
  stepId?: Expressionable<number>;
  targetGroup: Expressionable<string>;
}

export interface JobTarget {
  databaseName?: Expressionable<string>;
  elasticPoolName?: Expressionable<string>;
  membershipType?: Expressionable<('Include' | 'Exclude')>;
  refreshCredential?: Expressionable<string>;
  serverName?: Expressionable<string>;
  shardMapName?: Expressionable<string>;
  type: Expressionable<('TargetGroup' | 'SqlDatabase' | 'SqlElasticPool' | 'SqlShardMap' | 'SqlServer')>;
}

export interface JobTargetGroupProperties {
  members: Expressionable<JobTarget[]>;
}

export interface LongTermRetentionPolicyProperties {
  monthlyRetention?: Expressionable<string>;
  weeklyRetention?: Expressionable<string>;
  weekOfYear?: Expressionable<number>;
  yearlyRetention?: Expressionable<string>;
}

export interface ManagedBackupShortTermRetentionPolicyProperties {
  retentionDays?: Expressionable<number>;
}

export interface ManagedDatabaseProperties {
  catalogCollation?: Expressionable<('DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS')>;
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Default' | 'RestoreExternalBackup' | 'PointInTimeRestore' | 'Recovery')>;
  recoverableDatabaseId?: Expressionable<string>;
  restorableDroppedDatabaseId?: Expressionable<string>;
  restorePointInTime?: Expressionable<string>;
  sourceDatabaseId?: Expressionable<string>;
  storageContainerSasToken?: Expressionable<string>;
  storageContainerUri?: Expressionable<string>;
}

export interface ManagedInstanceAdministratorProperties {
  administratorType: Expressionable<('ActiveDirectory')>;
  login: Expressionable<string>;
  sid: Expressionable<string>;
  tenantId?: Expressionable<string>;
}

export interface SecurityAlertPolicyProperties {
  disabledAlerts?: Expressionable<string[]>;
  emailAccountAdmins?: Expressionable<boolean>;
  emailAddresses?: Expressionable<string[]>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('New' | 'Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
}

export interface SensitivityLabelProperties {
  informationType?: Expressionable<string>;
  informationTypeId?: Expressionable<string>;
  labelId?: Expressionable<string>;
  labelName?: Expressionable<string>;
  rank?: Expressionable<('None' | 'Low' | 'Medium' | 'High' | 'Critical')>;
}

export interface ServerBlobAuditingPolicyProperties {
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

export namespace managedInstances {
  export namespace administrators {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedInstanceAdministratorProperties, location: Expressionable<string>): ResourceDefinition<ManagedInstanceAdministratorProperties> {
      return {
        type: 'Microsoft.Sql/managedInstances/administrators',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managedInstances {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedDatabaseProperties, location: Expressionable<string>): ResourceDefinition<ManagedDatabaseProperties> {
      return {
        type: 'Microsoft.Sql/managedInstances/databases',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managedInstances {
  export namespace databases {
    export namespace backupShortTermRetentionPolicies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ManagedBackupShortTermRetentionPolicyProperties, location: Expressionable<string>): ResourceDefinition<ManagedBackupShortTermRetentionPolicyProperties> {
        return {
          type: 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies',
          apiVersion: '2017-03-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managedInstances {
  export namespace databases {
    export namespace securityAlertPolicies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties, location: Expressionable<string>): ResourceDefinition<SecurityAlertPolicyProperties> {
        return {
          type: 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies',
          apiVersion: '2017-03-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managedInstances {
  export namespace restorableDroppedDatabases {
    export namespace backupShortTermRetentionPolicies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ManagedBackupShortTermRetentionPolicyProperties, location: Expressionable<string>): ResourceDefinition<ManagedBackupShortTermRetentionPolicyProperties> {
        return {
          type: 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies',
          apiVersion: '2017-03-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managedInstances {
  export namespace securityAlertPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties, location: Expressionable<string>): ResourceDefinition<SecurityAlertPolicyProperties> {
      return {
        type: 'Microsoft.Sql/managedInstances/securityAlertPolicies',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace auditingSettings {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerBlobAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<ServerBlobAuditingPolicyProperties> {
      return {
        type: 'Microsoft.Sql/servers/auditingSettings',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabasePropertiesModel, location: Expressionable<string>): ResourceDefinition<DatabasePropertiesModel> {
      return {
        type: 'Microsoft.Sql/servers/databases',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace auditingSettings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseBlobAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<DatabaseBlobAuditingPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/auditingSettings',
          apiVersion: '2017-03-01-preview',
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
    export namespace backupLongTermRetentionPolicies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: LongTermRetentionPolicyProperties, location: Expressionable<string>): ResourceDefinition<LongTermRetentionPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies',
          apiVersion: '2017-03-01-preview',
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
    export namespace extendedAuditingSettings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ExtendedDatabaseBlobAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<ExtendedDatabaseBlobAuditingPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/extendedAuditingSettings',
          apiVersion: '2017-03-01-preview',
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
    export namespace schemas {
      export namespace tables {
        export namespace columns {
          export namespace sensitivityLabels {
            export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SensitivityLabelProperties, location: Expressionable<string>): ResourceDefinition<SensitivityLabelProperties> {
              return {
                type: 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels',
                apiVersion: '2017-03-01-preview',
                name: concatResourceName(...name),
                location,
                properties,
              };
            }
          }
        }
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace vulnerabilityAssessments {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseVulnerabilityAssessmentProperties, location: Expressionable<string>): ResourceDefinition<DatabaseVulnerabilityAssessmentProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments',
          apiVersion: '2017-03-01-preview',
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
    export namespace vulnerabilityAssessments {
      export namespace rules {
        export namespace baselines {
          export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DatabaseVulnerabilityAssessmentRuleBaselineProperties, location: Expressionable<string>): ResourceDefinition<DatabaseVulnerabilityAssessmentRuleBaselineProperties> {
            return {
              type: 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines',
              apiVersion: '2017-03-01-preview',
              name: concatResourceName(...name),
              location,
              properties,
            };
          }
        }
      }
    }
  }
}
export namespace servers {
  export namespace dnsAliases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Sql/servers/dnsAliases',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace extendedAuditingSettings {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExtendedServerBlobAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<ExtendedServerBlobAuditingPolicyProperties> {
      return {
        type: 'Microsoft.Sql/servers/extendedAuditingSettings',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace jobAgents {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: JobAgentProperties, location: Expressionable<string>): ResourceDefinition<JobAgentProperties> {
      return {
        type: 'Microsoft.Sql/servers/jobAgents',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace jobAgents {
    export namespace credentials {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobCredentialProperties, location: Expressionable<string>): ResourceDefinition<JobCredentialProperties> {
        return {
          type: 'Microsoft.Sql/servers/jobAgents/credentials',
          apiVersion: '2017-03-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace jobAgents {
    export namespace jobs {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobProperties, location: Expressionable<string>): ResourceDefinition<JobProperties> {
        return {
          type: 'Microsoft.Sql/servers/jobAgents/jobs',
          apiVersion: '2017-03-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace jobAgents {
    export namespace jobs {
      export namespace executions {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
          return {
            type: 'Microsoft.Sql/servers/jobAgents/jobs/executions',
            apiVersion: '2017-03-01-preview',
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
  export namespace jobAgents {
    export namespace jobs {
      export namespace steps {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobStepProperties, location: Expressionable<string>): ResourceDefinition<JobStepProperties> {
          return {
            type: 'Microsoft.Sql/servers/jobAgents/jobs/steps',
            apiVersion: '2017-03-01-preview',
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
  export namespace jobAgents {
    export namespace targetGroups {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobTargetGroupProperties, location: Expressionable<string>): ResourceDefinition<JobTargetGroupProperties> {
        return {
          type: 'Microsoft.Sql/servers/jobAgents/targetGroups',
          apiVersion: '2017-03-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace securityAlertPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties, location: Expressionable<string>): ResourceDefinition<SecurityAlertPolicyProperties> {
      return {
        type: 'Microsoft.Sql/servers/securityAlertPolicies',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
