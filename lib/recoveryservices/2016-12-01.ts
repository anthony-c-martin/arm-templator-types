import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AzureBackupServerContainer {
  containerType: Expressionable<string>;
}

export interface AzureFileshareProtectedItem {
  friendlyName?: Expressionable<string>;
  protectionStatus?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionStopped' | 'ProtectionPaused')>;
  healthStatus?: Expressionable<('Passed' | 'ActionRequired' | 'ActionSuggested' | 'Invalid')>;
  lastBackupStatus?: Expressionable<string>;
  lastBackupTime?: Expressionable<string>;
  extendedInfo?: Expressionable<AzureFileshareProtectedItemExtendedInfo>;
  protectedItemType: Expressionable<string>;
}

export interface AzureFileshareProtectedItemExtendedInfo {
  oldestRecoveryPoint?: Expressionable<string>;
  recoveryPointCount?: Expressionable<number>;
  policyState?: Expressionable<string>;
}

export interface AzureFileShareProtectionPolicy {
  workLoadType?: Expressionable<('Invalid' | 'VM' | 'FileFolder' | 'AzureSqlDb' | 'SQLDB' | 'Exchange' | 'Sharepoint' | 'VMwareVM' | 'SystemState' | 'Client' | 'GenericDataSource' | 'SQLDataBase' | 'AzureFileShare' | 'SAPHanaDatabase' | 'SAPAseDatabase')>;
  schedulePolicy?: Expressionable<SchedulePolicy>;
  retentionPolicy?: Expressionable<RetentionPolicy>;
  timeZone?: Expressionable<string>;
  backupManagementType: Expressionable<string>;
}

export interface AzureIaaSClassicComputeVMContainer {
  containerType: Expressionable<string>;
}

export interface AzureIaaSClassicComputeVMProtectedItem {
  protectedItemType: Expressionable<string>;
}

export interface AzureIaaSComputeVMContainer {
  containerType: Expressionable<string>;
}

export interface AzureIaaSComputeVMProtectedItem {
  protectedItemType: Expressionable<string>;
}

export interface AzureIaaSVMHealthDetails {
  code?: Expressionable<number>;
  title?: Expressionable<string>;
  message?: Expressionable<string>;
  recommendations?: Expressionable<string[]>;
}

export interface AzureIaaSVMProtectedItem {
  friendlyName?: Expressionable<string>;
  virtualMachineId?: Expressionable<string>;
  protectionStatus?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionStopped' | 'ProtectionPaused')>;
  healthStatus?: Expressionable<('Passed' | 'ActionRequired' | 'ActionSuggested' | 'Invalid')>;
  healthDetails?: Expressionable<AzureIaaSVMHealthDetails[]>;
  lastBackupStatus?: Expressionable<string>;
  lastBackupTime?: Expressionable<string>;
  protectedItemDataId?: Expressionable<string>;
  extendedInfo?: Expressionable<AzureIaaSVMProtectedItemExtendedInfo>;
  protectedItemType: Expressionable<string>;
}

export interface AzureIaaSVMProtectedItemExtendedInfo {
  oldestRecoveryPoint?: Expressionable<string>;
  recoveryPointCount?: Expressionable<number>;
  policyInconsistent?: Expressionable<boolean>;
}

export interface AzureIaaSVMProtectionPolicy {
  schedulePolicy?: Expressionable<SchedulePolicy>;
  retentionPolicy?: Expressionable<RetentionPolicy>;
  instantRpRetentionRangeInDays?: Expressionable<number>;
  timeZone?: Expressionable<string>;
  backupManagementType: Expressionable<string>;
}

export interface AzureSQLAGWorkloadContainerProtectionContainer {
  containerType: Expressionable<string>;
}

export interface AzureSqlContainer {
  containerType: Expressionable<string>;
}

export interface AzureSqlProtectedItem {
  protectedItemDataId?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionStopped' | 'ProtectionPaused')>;
  extendedInfo?: Expressionable<AzureSqlProtectedItemExtendedInfo>;
  protectedItemType: Expressionable<string>;
}

export interface AzureSqlProtectedItemExtendedInfo {
  oldestRecoveryPoint?: Expressionable<string>;
  recoveryPointCount?: Expressionable<number>;
  policyState?: Expressionable<string>;
}

export interface AzureSqlProtectionPolicy {
  retentionPolicy?: Expressionable<RetentionPolicy>;
  backupManagementType: Expressionable<string>;
}

export interface AzureStorageContainer {
  sourceResourceId?: Expressionable<string>;
  storageAccountVersion?: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  protectedItemCount?: Expressionable<number>;
  containerType: Expressionable<string>;
}

export interface AzureVMAppContainerProtectionContainer {
  containerType: Expressionable<string>;
}

export interface AzureVmWorkloadProtectedItem {
  friendlyName?: Expressionable<string>;
  serverName?: Expressionable<string>;
  parentName?: Expressionable<string>;
  parentType?: Expressionable<string>;
  protectionStatus?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionStopped' | 'ProtectionPaused')>;
  lastBackupStatus?: Expressionable<('Invalid' | 'Healthy' | 'Unhealthy' | 'IRPending')>;
  lastBackupTime?: Expressionable<string>;
  lastBackupErrorDetail?: Expressionable<ErrorDetail>;
  protectedItemDataSourceId?: Expressionable<string>;
  protectedItemHealthStatus?: Expressionable<('Invalid' | 'Healthy' | 'Unhealthy' | 'NotReachable' | 'IRPending')>;
  extendedInfo?: Expressionable<AzureVmWorkloadProtectedItemExtendedInfo>;
  protectedItemType: Expressionable<string>;
}

export interface AzureVmWorkloadProtectedItemExtendedInfo {
  oldestRecoveryPoint?: Expressionable<string>;
  recoveryPointCount?: Expressionable<number>;
  policyState?: Expressionable<string>;
}

export interface AzureVmWorkloadProtectionPolicy {
  workLoadType?: Expressionable<('Invalid' | 'VM' | 'FileFolder' | 'AzureSqlDb' | 'SQLDB' | 'Exchange' | 'Sharepoint' | 'VMwareVM' | 'SystemState' | 'Client' | 'GenericDataSource' | 'SQLDataBase' | 'AzureFileShare' | 'SAPHanaDatabase' | 'SAPAseDatabase')>;
  settings?: Expressionable<Settings>;
  subProtectionPolicy?: Expressionable<SubProtectionPolicy[]>;
  backupManagementType: Expressionable<string>;
}

export interface AzureVmWorkloadSAPAseDatabaseProtectedItem {
  protectedItemType: Expressionable<string>;
}

export interface AzureVmWorkloadSAPHanaDatabaseProtectedItem {
  protectedItemType: Expressionable<string>;
}

export interface AzureVmWorkloadSQLDatabaseProtectedItem {
  protectedItemType: Expressionable<string>;
}

export interface AzureWorkloadContainer {
  sourceResourceId?: Expressionable<string>;
  lastUpdatedTime?: Expressionable<string>;
  extendedInfo?: Expressionable<AzureWorkloadContainerExtendedInfo>;
  workloadType?: Expressionable<('Invalid' | 'VM' | 'FileFolder' | 'AzureSqlDb' | 'SQLDB' | 'Exchange' | 'Sharepoint' | 'VMwareVM' | 'SystemState' | 'Client' | 'GenericDataSource' | 'SQLDataBase' | 'AzureFileShare' | 'SAPHanaDatabase' | 'SAPAseDatabase')>;
  operationType?: Expressionable<('Invalid' | 'Register' | 'Reregister')>;
  containerType: Expressionable<string>;
}

export interface AzureWorkloadContainerExtendedInfo {
  hostServerName?: Expressionable<string>;
  inquiryInfo?: Expressionable<InquiryInfo>;
  nodesList?: Expressionable<DistributedNodesInfo[]>;
}

export interface BackupResourceConfig {
  storageModelType?: Expressionable<('Invalid' | 'GeoRedundant' | 'LocallyRedundant')>;
  storageType?: Expressionable<('Invalid' | 'GeoRedundant' | 'LocallyRedundant')>;
  storageTypeState?: Expressionable<('Invalid' | 'Locked' | 'Unlocked')>;
}

export interface ContainerIdentityInfo {
  uniqueName?: Expressionable<string>;
  aadTenantId?: Expressionable<string>;
  servicePrincipalClientId?: Expressionable<string>;
  audience?: Expressionable<string>;
}

export interface DailyRetentionFormat {
  daysOfTheMonth?: Expressionable<Day[]>;
}

export interface DailyRetentionSchedule {
  retentionTimes?: Expressionable<string[]>;
  retentionDuration?: Expressionable<RetentionDuration>;
}

export interface Day {
  date?: Expressionable<number>;
  isLast?: Expressionable<boolean>;
}

export interface DistributedNodesInfo {
  nodeName?: Expressionable<string>;
  status?: Expressionable<string>;
  errorDetail?: Expressionable<ErrorDetail>;
}

export interface DpmContainer {
  canReRegister?: Expressionable<boolean>;
  containerId?: Expressionable<string>;
  protectedItemCount?: Expressionable<number>;
  dpmAgentVersion?: Expressionable<string>;
  dpmServers?: Expressionable<string[]>;
  upgradeAvailable?: Expressionable<boolean>;
  protectionStatus?: Expressionable<string>;
  extendedInfo?: Expressionable<DPMContainerExtendedInfo>;
  containerType: Expressionable<string>;
}

export interface DPMContainerExtendedInfo {
  lastRefreshedAt?: Expressionable<string>;
}

export interface DPMProtectedItem {
  friendlyName?: Expressionable<string>;
  backupEngineName?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionStopped' | 'ProtectionPaused')>;
  isScheduledForDeferredDelete?: Expressionable<boolean>;
  extendedInfo?: Expressionable<DPMProtectedItemExtendedInfo>;
  protectedItemType: Expressionable<string>;
}

export interface DPMProtectedItemExtendedInfo {
  protected?: Expressionable<boolean>;
  isPresentOnCloud?: Expressionable<boolean>;
  lastBackupStatus?: Expressionable<string>;
  lastRefreshedAt?: Expressionable<string>;
  oldestRecoveryPoint?: Expressionable<string>;
  recoveryPointCount?: Expressionable<number>;
  onPremiseOldestRecoveryPoint?: Expressionable<string>;
  onPremiseLatestRecoveryPoint?: Expressionable<string>;
  onPremiseRecoveryPointCount?: Expressionable<number>;
  isCollocated?: Expressionable<boolean>;
  protectionGroupName?: Expressionable<string>;
  diskStorageUsedInBytes?: Expressionable<string>;
  totalDiskStorageSizeInBytes?: Expressionable<string>;
}

export interface ErrorDetail {
  code?: Expressionable<string>;
  message?: Expressionable<string>;
  recommendations?: Expressionable<string[]>;
}

export interface GenericContainer {
  fabricName?: Expressionable<string>;
  extendedInformation?: Expressionable<GenericContainerExtendedInfo>;
  containerType: Expressionable<string>;
}

export interface GenericContainerExtendedInfo {
  rawCertData?: Expressionable<string>;
  containerIdentityInfo?: Expressionable<ContainerIdentityInfo>;
}

export interface GenericProtectedItem {
  friendlyName?: Expressionable<string>;
  policyState?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'IRPending' | 'Protected' | 'ProtectionError' | 'ProtectionStopped' | 'ProtectionPaused')>;
  protectedItemId?: Expressionable<number>;
  fabricName?: Expressionable<string>;
  protectedItemType: Expressionable<string>;
}

export interface GenericProtectionPolicy {
  subProtectionPolicy?: Expressionable<SubProtectionPolicy[]>;
  timeZone?: Expressionable<string>;
  fabricName?: Expressionable<string>;
  backupManagementType: Expressionable<string>;
}

export interface IaaSVMContainer {
  virtualMachineId?: Expressionable<string>;
  virtualMachineVersion?: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  containerType: Expressionable<string>;
}

export interface InquiryInfo {
  status?: Expressionable<string>;
  errorDetail?: Expressionable<ErrorDetail>;
  inquiryDetails?: Expressionable<WorkloadInquiryDetails[]>;
}

export interface InquiryValidation {
  status?: Expressionable<string>;
  errorDetail?: Expressionable<ErrorDetail>;
}

export interface LogSchedulePolicy {
  scheduleFrequencyInMins?: Expressionable<number>;
  schedulePolicyType: Expressionable<string>;
}

export interface LongTermRetentionPolicy {
  dailySchedule?: Expressionable<DailyRetentionSchedule>;
  weeklySchedule?: Expressionable<WeeklyRetentionSchedule>;
  monthlySchedule?: Expressionable<MonthlyRetentionSchedule>;
  yearlySchedule?: Expressionable<YearlyRetentionSchedule>;
  retentionPolicyType: Expressionable<string>;
}

export interface LongTermSchedulePolicy {
  schedulePolicyType: Expressionable<string>;
}

export interface MabContainer {
  canReRegister?: Expressionable<boolean>;
  containerId?: Expressionable<number>;
  protectedItemCount?: Expressionable<number>;
  agentVersion?: Expressionable<string>;
  extendedInfo?: Expressionable<MabContainerExtendedInfo>;
  mabContainerHealthDetails?: Expressionable<MABContainerHealthDetails[]>;
  containerHealthState?: Expressionable<string>;
  containerType: Expressionable<string>;
}

export interface MabContainerExtendedInfo {
  lastRefreshedAt?: Expressionable<string>;
  backupItemType?: Expressionable<('Invalid' | 'VM' | 'FileFolder' | 'AzureSqlDb' | 'SQLDB' | 'Exchange' | 'Sharepoint' | 'VMwareVM' | 'SystemState' | 'Client' | 'GenericDataSource' | 'SQLDataBase' | 'AzureFileShare' | 'SAPHanaDatabase' | 'SAPAseDatabase')>;
  backupItems?: Expressionable<string[]>;
  policyName?: Expressionable<string>;
  lastBackupStatus?: Expressionable<string>;
}

export interface MABContainerHealthDetails {
  code?: Expressionable<number>;
  title?: Expressionable<string>;
  message?: Expressionable<string>;
  recommendations?: Expressionable<string[]>;
}

export interface MabFileFolderProtectedItem {
  friendlyName?: Expressionable<string>;
  computerName?: Expressionable<string>;
  lastBackupStatus?: Expressionable<string>;
  protectionState?: Expressionable<string>;
  isScheduledForDeferredDelete?: Expressionable<boolean>;
  deferredDeleteSyncTimeInUTC?: Expressionable<number>;
  extendedInfo?: Expressionable<MabFileFolderProtectedItemExtendedInfo>;
  protectedItemType: Expressionable<string>;
}

export interface MabFileFolderProtectedItemExtendedInfo {
  lastRefreshedAt?: Expressionable<string>;
  oldestRecoveryPoint?: Expressionable<string>;
  recoveryPointCount?: Expressionable<number>;
}

export interface MabProtectionPolicy {
  schedulePolicy?: Expressionable<SchedulePolicy>;
  retentionPolicy?: Expressionable<RetentionPolicy>;
  backupManagementType: Expressionable<string>;
}

export interface MonthlyRetentionSchedule {
  retentionScheduleFormatType?: Expressionable<('Invalid' | 'Daily' | 'Weekly')>;
  retentionScheduleDaily?: Expressionable<DailyRetentionFormat>;
  retentionScheduleWeekly?: Expressionable<WeeklyRetentionFormat>;
  retentionTimes?: Expressionable<string[]>;
  retentionDuration?: Expressionable<RetentionDuration>;
}

export interface ProtectedItem {
  backupManagementType?: Expressionable<('Invalid' | 'AzureIaasVM' | 'MAB' | 'DPM' | 'AzureBackupServer' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup')>;
  workloadType?: Expressionable<('Invalid' | 'VM' | 'FileFolder' | 'AzureSqlDb' | 'SQLDB' | 'Exchange' | 'Sharepoint' | 'VMwareVM' | 'SystemState' | 'Client' | 'GenericDataSource' | 'SQLDataBase' | 'AzureFileShare' | 'SAPHanaDatabase' | 'SAPAseDatabase')>;
  containerName?: Expressionable<string>;
  sourceResourceId?: Expressionable<string>;
  policyId?: Expressionable<string>;
  lastRecoveryPoint?: Expressionable<string>;
  backupSetName?: Expressionable<string>;
  createMode?: Expressionable<('Invalid' | 'Default' | 'Recover')>;
  protectedItemType: Expressionable<string>;
}

export interface ProtectionContainer {
  friendlyName?: Expressionable<string>;
  backupManagementType?: Expressionable<('Invalid' | 'AzureIaasVM' | 'MAB' | 'DPM' | 'AzureBackupServer' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup')>;
  registrationStatus?: Expressionable<string>;
  healthStatus?: Expressionable<string>;
  containerType: Expressionable<string>;
}

export interface ProtectionPolicy {
  protectedItemsCount?: Expressionable<number>;
  backupManagementType: Expressionable<string>;
}

export interface RetentionDuration {
  count?: Expressionable<number>;
  durationType?: Expressionable<('Invalid' | 'Days' | 'Weeks' | 'Months' | 'Years')>;
}

export interface RetentionPolicy {
  retentionPolicyType: Expressionable<string>;
}

export interface SchedulePolicy {
  schedulePolicyType: Expressionable<string>;
}

export interface Settings {
  timeZone?: Expressionable<string>;
  issqlcompression?: Expressionable<boolean>;
  isCompression?: Expressionable<boolean>;
}

export interface SimpleRetentionPolicy {
  retentionDuration?: Expressionable<RetentionDuration>;
  retentionPolicyType: Expressionable<string>;
}

export interface SimpleSchedulePolicy {
  scheduleRunFrequency?: Expressionable<('Invalid' | 'Daily' | 'Weekly')>;
  scheduleRunDays?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
  scheduleRunTimes?: Expressionable<string[]>;
  scheduleWeeklyFrequency?: Expressionable<number>;
  schedulePolicyType: Expressionable<string>;
}

export interface SubProtectionPolicy {
  policyType?: Expressionable<('Invalid' | 'Full' | 'Differential' | 'Log' | 'CopyOnlyFull')>;
  schedulePolicy?: Expressionable<SchedulePolicy>;
  retentionPolicy?: Expressionable<RetentionPolicy>;
}

export interface WeeklyRetentionFormat {
  daysOfTheWeek?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
  weeksOfTheMonth?: Expressionable<('First' | 'Second' | 'Third' | 'Fourth' | 'Last' | 'Invalid')[]>;
}

export interface WeeklyRetentionSchedule {
  daysOfTheWeek?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
  retentionTimes?: Expressionable<string[]>;
  retentionDuration?: Expressionable<RetentionDuration>;
}

export interface WorkloadInquiryDetails {
  type?: Expressionable<string>;
  itemCount?: Expressionable<number>;
  inquiryValidation?: Expressionable<InquiryValidation>;
}

export interface YearlyRetentionSchedule {
  retentionScheduleFormatType?: Expressionable<('Invalid' | 'Daily' | 'Weekly')>;
  monthsOfYear?: Expressionable<('Invalid' | 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December')[]>;
  retentionScheduleDaily?: Expressionable<DailyRetentionFormat>;
  retentionScheduleWeekly?: Expressionable<WeeklyRetentionFormat>;
  retentionTimes?: Expressionable<string[]>;
  retentionDuration?: Expressionable<RetentionDuration>;
}

export namespace vaults {
  export namespace backupFabrics {
    export namespace protectionContainers {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ProtectionContainer, location: Expressionable<string>): ResourceDefinition<ProtectionContainer> {
        return {
          type: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers',
          apiVersion: '2016-12-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace vaults {
  export namespace backupFabrics {
    export namespace protectionContainers {
      export namespace protectedItems {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ProtectedItem, location: Expressionable<string>): ResourceDefinition<ProtectedItem> {
          return {
            type: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems',
            apiVersion: '2016-12-01',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace vaults {
  export namespace backupPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ProtectionPolicy, location: Expressionable<string>): ResourceDefinition<ProtectionPolicy> {
      return {
        type: 'Microsoft.RecoveryServices/vaults/backupPolicies',
        apiVersion: '2016-12-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace backupstorageconfig {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BackupResourceConfig, location: Expressionable<string>): ResourceDefinition<BackupResourceConfig> {
      return {
        type: 'Microsoft.RecoveryServices/vaults/backupstorageconfig',
        apiVersion: '2016-12-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}