// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-06-01-preview/Microsoft.Sql.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface DatabaseProperties {
  autoPauseDelay?: Expressionable<number>;
  catalogCollation?: Expressionable<('DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS')>;
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Default' | 'Copy' | 'Secondary' | 'PointInTimeRestore' | 'Restore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary' | 'RestoreLongTermRetentionBackup' | 'OnlineSecondary')>;
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
  storageAccountType?: Expressionable<('GRS' | 'LRS' | 'ZRS')>;
  zoneRedundant?: Expressionable<boolean>;
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

export interface ResourceIdentity {
  type?: Expressionable<('SystemAssigned')>;
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

export interface WorkloadClassifierProperties {
  context?: Expressionable<string>;
  endTime?: Expressionable<string>;
  importance?: Expressionable<string>;
  label?: Expressionable<string>;
  memberName: Expressionable<string>;
  startTime?: Expressionable<string>;
}

export interface WorkloadGroupProperties {
  importance?: Expressionable<string>;
  maxResourcePercent: Expressionable<number>;
  maxResourcePercentPerRequest?: Expressionable<number>;
  minResourcePercent: Expressionable<number>;
  minResourcePercentPerRequest: Expressionable<number>;
  queryExecutionTimeout?: Expressionable<number>;
}

export namespace managedInstances {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedDatabaseProperties, location: Expressionable<string>): ResourceDefinition<ManagedDatabaseProperties> {
      return {
        type: 'Microsoft.Sql/managedInstances/databases',
        apiVersion: '2019-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>): ResourceDefinition<ServerProperties> {
    return {
      type: 'Microsoft.Sql/servers',
      apiVersion: '2019-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace servers {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties, location: Expressionable<string>): ResourceDefinition<DatabaseProperties> {
      return {
        type: 'Microsoft.Sql/servers/databases',
        apiVersion: '2019-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace workloadGroups {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: WorkloadGroupProperties, location: Expressionable<string>): ResourceDefinition<WorkloadGroupProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/workloadGroups',
          apiVersion: '2019-06-01-preview',
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
    export namespace workloadGroups {
      export namespace workloadClassifiers {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: WorkloadClassifierProperties, location: Expressionable<string>): ResourceDefinition<WorkloadClassifierProperties> {
          return {
            type: 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers',
            apiVersion: '2019-06-01-preview',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
