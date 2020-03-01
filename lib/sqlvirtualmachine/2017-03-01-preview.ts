import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AdditionalFeaturesServerConfigurations {
  isRServicesEnabled?: Expressionable<boolean>;
}

export interface AutoBackupSettings {
  backupScheduleType?: Expressionable<('Manual' | 'Automated')>;
  backupSystemDbs?: Expressionable<boolean>;
  enable?: Expressionable<boolean>;
  enableEncryption?: Expressionable<boolean>;
  fullBackupFrequency?: Expressionable<('Daily' | 'Weekly')>;
  fullBackupStartTime?: Expressionable<number>;
  fullBackupWindowHours?: Expressionable<number>;
  logBackupFrequency?: Expressionable<number>;
  password?: Expressionable<string>;
  retentionPeriod?: Expressionable<number>;
  storageAccessKey?: Expressionable<string>;
  storageAccountUrl?: Expressionable<string>;
}

export interface AutoPatchingSettings {
  dayOfWeek?: Expressionable<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')>;
  enable?: Expressionable<boolean>;
  maintenanceWindowDuration?: Expressionable<number>;
  maintenanceWindowStartingHour?: Expressionable<number>;
}

export interface AvailabilityGroupListenerProperties {
  availabilityGroupName?: Expressionable<string>;
  createDefaultAvailabilityGroupIfNotExist?: Expressionable<boolean>;
  loadBalancerConfigurations?: Expressionable<LoadBalancerConfiguration[]>;
  port?: Expressionable<number>;
}

export interface KeyVaultCredentialSettings {
  azureKeyVaultUrl?: Expressionable<string>;
  credentialName?: Expressionable<string>;
  enable?: Expressionable<boolean>;
  servicePrincipalName?: Expressionable<string>;
  servicePrincipalSecret?: Expressionable<string>;
}

export interface LoadBalancerConfiguration {
  loadBalancerResourceId?: Expressionable<string>;
  privateIpAddress?: Expressionable<PrivateIPAddress>;
  probePort?: Expressionable<number>;
  publicIpAddressResourceId?: Expressionable<string>;
  sqlVirtualMachineInstances?: Expressionable<string[]>;
}

export interface PrivateIPAddress {
  ipAddress?: Expressionable<string>;
  subnetResourceId?: Expressionable<string>;
}

export interface ResourceIdentity {
  type?: Expressionable<('SystemAssigned')>;
}

export interface ServerConfigurationsManagementSettings {
  additionalFeaturesServerConfigurations?: Expressionable<AdditionalFeaturesServerConfigurations>;
  sqlConnectivityUpdateSettings?: Expressionable<SqlConnectivityUpdateSettings>;
  sqlStorageUpdateSettings?: Expressionable<SqlStorageUpdateSettings>;
  sqlWorkloadTypeUpdateSettings?: Expressionable<SqlWorkloadTypeUpdateSettings>;
}

export interface SqlConnectivityUpdateSettings {
  connectivityType?: Expressionable<('LOCAL' | 'PRIVATE' | 'PUBLIC')>;
  port?: Expressionable<number>;
  sqlAuthUpdatePassword?: Expressionable<string>;
  sqlAuthUpdateUserName?: Expressionable<string>;
}

export interface SQLStorageSettings {
  defaultFilePath?: Expressionable<string>;
  luns?: Expressionable<number[]>;
}

export interface SqlStorageUpdateSettings {
  diskConfigurationType?: Expressionable<('NEW' | 'EXTEND' | 'ADD')>;
  diskCount?: Expressionable<number>;
  startingDeviceId?: Expressionable<number>;
}

export interface SqlVirtualMachineGroupProperties {
  sqlImageOffer?: Expressionable<string>;
  sqlImageSku?: Expressionable<('Developer' | 'Enterprise')>;
  wsfcDomainProfile?: Expressionable<WsfcDomainProfile>;
}

export interface SqlVirtualMachineProperties {
  autoBackupSettings?: Expressionable<AutoBackupSettings>;
  autoPatchingSettings?: Expressionable<AutoPatchingSettings>;
  keyVaultCredentialSettings?: Expressionable<KeyVaultCredentialSettings>;
  serverConfigurationsManagementSettings?: Expressionable<ServerConfigurationsManagementSettings>;
  sqlImageOffer?: Expressionable<string>;
  sqlImageSku?: Expressionable<('Developer' | 'Express' | 'Standard' | 'Enterprise' | 'Web')>;
  sqlManagement?: Expressionable<('Full' | 'LightWeight' | 'NoAgent')>;
  sqlServerLicenseType?: Expressionable<('PAYG' | 'AHUB' | 'DR')>;
  sqlVirtualMachineGroupResourceId?: Expressionable<string>;
  storageConfigurationSettings?: Expressionable<StorageConfigurationSettings>;
  virtualMachineResourceId?: Expressionable<string>;
  wsfcDomainCredentials?: Expressionable<WsfcDomainCredentials>;
}

export interface SqlWorkloadTypeUpdateSettings {
  sqlWorkloadType?: Expressionable<('GENERAL' | 'OLTP' | 'DW')>;
}

export interface StorageConfigurationSettings {
  diskConfigurationType?: Expressionable<('NEW' | 'EXTEND' | 'ADD')>;
  sqlDataSettings?: Expressionable<SQLStorageSettings>;
  sqlLogSettings?: Expressionable<SQLStorageSettings>;
  sqlTempDbSettings?: Expressionable<SQLStorageSettings>;
  storageWorkloadType?: Expressionable<('GENERAL' | 'OLTP' | 'DW')>;
}

export interface WsfcDomainCredentials {
  clusterBootstrapAccountPassword?: Expressionable<string>;
  clusterOperatorAccountPassword?: Expressionable<string>;
  sqlServiceAccountPassword?: Expressionable<string>;
}

export interface WsfcDomainProfile {
  clusterBootstrapAccount?: Expressionable<string>;
  clusterOperatorAccount?: Expressionable<string>;
  domainFqdn?: Expressionable<string>;
  fileShareWitnessPath?: Expressionable<string>;
  ouPath?: Expressionable<string>;
  sqlServiceAccount?: Expressionable<string>;
  storageAccountPrimaryKey?: Expressionable<string>;
  storageAccountUrl?: Expressionable<string>;
}

export namespace sqlVirtualMachineGroups {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type SqlVirtualMachineGroupsResource = ResourceDefinition<SqlVirtualMachineGroupProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: SqlVirtualMachineGroupProperties, location: Expressionable<string>, tags?: Expressionable<any>): SqlVirtualMachineGroupsResource {
    return {
      type: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups',
      apiVersion: '2017-03-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace sqlVirtualMachineGroups {
  export namespace availabilityGroupListeners {
    export type AvailabilityGroupListenersResource = ResourceDefinition<AvailabilityGroupListenerProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AvailabilityGroupListenerProperties): AvailabilityGroupListenersResource {
      return {
        type: 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners',
        apiVersion: '2017-03-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace sqlVirtualMachines {
  export interface AdditionalProps {
    identity?: Expressionable<ResourceIdentity>;
    tags?: Expressionable<any>;
  }
  
  export type SqlVirtualMachinesResource = ResourceDefinition<SqlVirtualMachineProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: SqlVirtualMachineProperties, location: Expressionable<string>, identity?: Expressionable<ResourceIdentity>, tags?: Expressionable<any>): SqlVirtualMachinesResource {
    return {
      type: 'Microsoft.SqlVirtualMachine/sqlVirtualMachines',
      apiVersion: '2017-03-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        tags,
      },
    };
  }
}