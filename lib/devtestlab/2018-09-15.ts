// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-09-15/Microsoft.DevTestLab.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ArmTemplateParameterProperties {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ArtifactDeploymentStatusProperties {
  artifactsApplied?: Expressionable<number>;
  deploymentStatus?: Expressionable<string>;
  totalArtifacts?: Expressionable<number>;
}

export interface ArtifactInstallProperties {
  artifactId?: Expressionable<string>;
  artifactTitle?: Expressionable<string>;
  deploymentStatusMessage?: Expressionable<string>;
  installTime?: Expressionable<string>;
  parameters?: Expressionable<ArtifactParameterProperties[]>;
  status?: Expressionable<string>;
  vmExtensionStatusMessage?: Expressionable<string>;
}

export interface ArtifactParameterProperties {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ArtifactSourceProperties {
  armTemplateFolderPath?: Expressionable<string>;
  branchRef?: Expressionable<string>;
  displayName?: Expressionable<string>;
  folderPath?: Expressionable<string>;
  securityToken?: Expressionable<string>;
  sourceType?: Expressionable<('VsoGit' | 'GitHub')>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  uri?: Expressionable<string>;
}

export interface AttachNewDataDiskOptions {
  diskName?: Expressionable<string>;
  diskSizeGiB?: Expressionable<number>;
  diskType?: Expressionable<('Standard' | 'Premium' | 'StandardSSD')>;
}

export interface BulkCreationParameters {
  instanceCount?: Expressionable<number>;
}

export interface CostThresholdProperties {
  displayOnChart?: Expressionable<('Enabled' | 'Disabled')>;
  notificationSent?: Expressionable<string>;
  percentageThreshold?: Expressionable<PercentageCostThresholdProperties>;
  sendNotificationWhenExceeded?: Expressionable<('Enabled' | 'Disabled')>;
  thresholdId?: Expressionable<string>;
}

export interface CustomImageProperties {
  author?: Expressionable<string>;
  customImagePlan?: Expressionable<CustomImagePropertiesFromPlan>;
  dataDiskStorageInfo?: Expressionable<DataDiskStorageTypeInfo[]>;
  description?: Expressionable<string>;
  isPlanAuthorized?: Expressionable<boolean>;
  managedImageId?: Expressionable<string>;
  managedSnapshotId?: Expressionable<string>;
  vhd?: Expressionable<CustomImagePropertiesCustom>;
  vm?: Expressionable<CustomImagePropertiesFromVm>;
}

export interface CustomImagePropertiesCustom {
  imageName?: Expressionable<string>;
  osType: Expressionable<('Windows' | 'Linux' | 'None')>;
  sysPrep?: Expressionable<boolean>;
}

export interface CustomImagePropertiesFromPlan {
  id?: Expressionable<string>;
  offer?: Expressionable<string>;
  publisher?: Expressionable<string>;
}

export interface CustomImagePropertiesFromVm {
  linuxOsInfo?: Expressionable<LinuxOsInfo>;
  sourceVmId?: Expressionable<string>;
  windowsOsInfo?: Expressionable<WindowsOsInfo>;
}

export interface DataDiskProperties {
  attachNewDataDiskOptions?: Expressionable<AttachNewDataDiskOptions>;
  existingLabDiskId?: Expressionable<string>;
  hostCaching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
}

export interface DataDiskStorageTypeInfo {
  lun?: Expressionable<string>;
  storageType?: Expressionable<('Standard' | 'Premium' | 'StandardSSD')>;
}

export interface DayDetails {
  time?: Expressionable<string>;
}

export interface DiskProperties {
  diskBlobName?: Expressionable<string>;
  diskSizeGiB?: Expressionable<number>;
  diskType?: Expressionable<('Standard' | 'Premium' | 'StandardSSD')>;
  diskUri?: Expressionable<string>;
  hostCaching?: Expressionable<string>;
  leasedByLabVmId?: Expressionable<string>;
  managedDiskId?: Expressionable<string>;
}

export interface EnvironmentDeploymentProperties {
  armTemplateId?: Expressionable<string>;
  parameters?: Expressionable<ArmTemplateParameterProperties[]>;
}

export interface EnvironmentProperties {
  armTemplateDisplayName?: Expressionable<string>;
  deploymentProperties?: Expressionable<EnvironmentDeploymentProperties>;
}

export interface Event {
  eventName?: Expressionable<('AutoShutdown' | 'Cost')>;
}

export interface FormulaProperties {
  author?: Expressionable<string>;
  description?: Expressionable<string>;
  formulaContent?: Expressionable<LabVirtualMachineCreationParameter>;
  osType?: Expressionable<string>;
  vm?: Expressionable<FormulaPropertiesFromVm>;
}

export interface FormulaPropertiesFromVm {
  labVmId?: Expressionable<string>;
}

export interface GalleryImageReference {
  offer?: Expressionable<string>;
  osType?: Expressionable<string>;
  publisher?: Expressionable<string>;
  sku?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface HourDetails {
  minute?: Expressionable<number>;
}

export interface IdentityProperties {
  clientSecretUrl?: Expressionable<string>;
  principalId?: Expressionable<string>;
  tenantId?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface InboundNatRule {
  backendPort?: Expressionable<number>;
  frontendPort?: Expressionable<number>;
  transportProtocol?: Expressionable<('Tcp' | 'Udp')>;
}

export interface LabAnnouncementProperties {
  enabled?: Expressionable<('Enabled' | 'Disabled')>;
  expirationDate?: Expressionable<string>;
  expired?: Expressionable<boolean>;
  markdown?: Expressionable<string>;
  title?: Expressionable<string>;
}

export interface LabCostProperties {
  createdDate?: Expressionable<string>;
  currencyCode?: Expressionable<string>;
  endDateTime?: Expressionable<string>;
  startDateTime?: Expressionable<string>;
  targetCost?: Expressionable<TargetCostProperties>;
}

export interface LabProperties {
  announcement?: Expressionable<LabAnnouncementProperties>;
  environmentPermission?: Expressionable<('Reader' | 'Contributor')>;
  extendedProperties?: Expressionable<any>;
  labStorageType?: Expressionable<('Standard' | 'Premium' | 'StandardSSD')>;
  mandatoryArtifactsResourceIdsLinux?: Expressionable<string[]>;
  mandatoryArtifactsResourceIdsWindows?: Expressionable<string[]>;
  premiumDataDisks?: Expressionable<('Disabled' | 'Enabled')>;
  support?: Expressionable<LabSupportProperties>;
}

export interface LabSupportProperties {
  enabled?: Expressionable<('Enabled' | 'Disabled')>;
  markdown?: Expressionable<string>;
}

export interface LabVirtualMachineCreationParameter {
  location?: Expressionable<string>;
  name?: Expressionable<string>;
  properties?: Expressionable<LabVirtualMachineCreationParameterProperties>;
  tags?: Expressionable<any>;
}

export interface LabVirtualMachineCreationParameterProperties {
  allowClaim?: Expressionable<boolean>;
  artifactDeploymentStatus?: Expressionable<ArtifactDeploymentStatusProperties>;
  artifacts?: Expressionable<ArtifactInstallProperties[]>;
  bulkCreationParameters?: Expressionable<BulkCreationParameters>;
  computeId?: Expressionable<string>;
  createdByUser?: Expressionable<string>;
  createdByUserId?: Expressionable<string>;
  createdDate?: Expressionable<string>;
  customImageId?: Expressionable<string>;
  dataDiskParameters?: Expressionable<DataDiskProperties[]>;
  disallowPublicIpAddress?: Expressionable<boolean>;
  environmentId?: Expressionable<string>;
  expirationDate?: Expressionable<string>;
  fqdn?: Expressionable<string>;
  galleryImageReference?: Expressionable<GalleryImageReference>;
  isAuthenticationWithSshKey?: Expressionable<boolean>;
  labSubnetName?: Expressionable<string>;
  labVirtualNetworkId?: Expressionable<string>;
  lastKnownPowerState?: Expressionable<string>;
  networkInterface?: Expressionable<NetworkInterfaceProperties>;
  notes?: Expressionable<string>;
  osType?: Expressionable<string>;
  ownerObjectId?: Expressionable<string>;
  ownerUserPrincipalName?: Expressionable<string>;
  password?: Expressionable<string>;
  planId?: Expressionable<string>;
  scheduleParameters?: Expressionable<ScheduleCreationParameter[]>;
  size?: Expressionable<string>;
  sshKey?: Expressionable<string>;
  storageType?: Expressionable<string>;
  userName?: Expressionable<string>;
  virtualMachineCreationSource?: Expressionable<('FromCustomImage' | 'FromGalleryImage' | 'FromSharedGalleryImage')>;
}

export interface LabVirtualMachineProperties {
  allowClaim?: Expressionable<boolean>;
  artifactDeploymentStatus?: Expressionable<ArtifactDeploymentStatusProperties>;
  artifacts?: Expressionable<ArtifactInstallProperties[]>;
  computeId?: Expressionable<string>;
  createdByUser?: Expressionable<string>;
  createdByUserId?: Expressionable<string>;
  createdDate?: Expressionable<string>;
  customImageId?: Expressionable<string>;
  dataDiskParameters?: Expressionable<DataDiskProperties[]>;
  disallowPublicIpAddress?: Expressionable<boolean>;
  environmentId?: Expressionable<string>;
  expirationDate?: Expressionable<string>;
  fqdn?: Expressionable<string>;
  galleryImageReference?: Expressionable<GalleryImageReference>;
  isAuthenticationWithSshKey?: Expressionable<boolean>;
  labSubnetName?: Expressionable<string>;
  labVirtualNetworkId?: Expressionable<string>;
  lastKnownPowerState?: Expressionable<string>;
  networkInterface?: Expressionable<NetworkInterfaceProperties>;
  notes?: Expressionable<string>;
  osType?: Expressionable<string>;
  ownerObjectId?: Expressionable<string>;
  ownerUserPrincipalName?: Expressionable<string>;
  password?: Expressionable<string>;
  planId?: Expressionable<string>;
  scheduleParameters?: Expressionable<ScheduleCreationParameter[]>;
  size?: Expressionable<string>;
  sshKey?: Expressionable<string>;
  storageType?: Expressionable<string>;
  userName?: Expressionable<string>;
  virtualMachineCreationSource?: Expressionable<('FromCustomImage' | 'FromGalleryImage' | 'FromSharedGalleryImage')>;
}

export interface LinuxOsInfo {
  linuxOsState?: Expressionable<('NonDeprovisioned' | 'DeprovisionRequested' | 'DeprovisionApplied')>;
}

export interface NetworkInterfaceProperties {
  dnsName?: Expressionable<string>;
  privateIpAddress?: Expressionable<string>;
  publicIpAddress?: Expressionable<string>;
  publicIpAddressId?: Expressionable<string>;
  rdpAuthority?: Expressionable<string>;
  sharedPublicIpAddressConfiguration?: Expressionable<SharedPublicIpAddressConfiguration>;
  sshAuthority?: Expressionable<string>;
  subnetId?: Expressionable<string>;
  virtualNetworkId?: Expressionable<string>;
}

export interface NotificationChannelProperties {
  description?: Expressionable<string>;
  emailRecipient?: Expressionable<string>;
  events?: Expressionable<Event[]>;
  notificationLocale?: Expressionable<string>;
  webHookUrl?: Expressionable<string>;
}

export interface NotificationSettings {
  emailRecipient?: Expressionable<string>;
  notificationLocale?: Expressionable<string>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  timeInMinutes?: Expressionable<number>;
  webhookUrl?: Expressionable<string>;
}

export interface PercentageCostThresholdProperties {
  thresholdValue?: Expressionable<number>;
}

export interface PolicyProperties {
  description?: Expressionable<string>;
  evaluatorType?: Expressionable<('AllowedValuesPolicy' | 'MaxValuePolicy')>;
  factData?: Expressionable<string>;
  factName?: Expressionable<('UserOwnedLabVmCount' | 'UserOwnedLabPremiumVmCount' | 'LabVmCount' | 'LabPremiumVmCount' | 'LabVmSize' | 'GalleryImage' | 'UserOwnedLabVmCountInSubnet' | 'LabTargetCost' | 'EnvironmentTemplate' | 'ScheduleEditPermission')>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  threshold?: Expressionable<string>;
}

export interface Port {
  backendPort?: Expressionable<number>;
  transportProtocol?: Expressionable<('Tcp' | 'Udp')>;
}

export interface ScheduleCreationParameter {
  location?: Expressionable<string>;
  name?: Expressionable<string>;
  properties?: Expressionable<ScheduleCreationParameterProperties>;
  tags?: Expressionable<any>;
}

export interface ScheduleCreationParameterProperties {
  dailyRecurrence?: Expressionable<DayDetails>;
  hourlyRecurrence?: Expressionable<HourDetails>;
  notificationSettings?: Expressionable<NotificationSettings>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  targetResourceId?: Expressionable<string>;
  taskType?: Expressionable<string>;
  timeZoneId?: Expressionable<string>;
  weeklyRecurrence?: Expressionable<WeekDetails>;
}

export interface ScheduleProperties {
  dailyRecurrence?: Expressionable<DayDetails>;
  hourlyRecurrence?: Expressionable<HourDetails>;
  notificationSettings?: Expressionable<NotificationSettings>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  targetResourceId?: Expressionable<string>;
  taskType?: Expressionable<string>;
  timeZoneId?: Expressionable<string>;
  weeklyRecurrence?: Expressionable<WeekDetails>;
}

export interface SecretProperties {
  value?: Expressionable<string>;
}

export interface ServiceFabricProperties {
  environmentId?: Expressionable<string>;
  externalServiceFabricId?: Expressionable<string>;
}

export interface SharedPublicIpAddressConfiguration {
  inboundNatRules?: Expressionable<InboundNatRule[]>;
}

export interface Subnet {
  allowPublicIp?: Expressionable<('Default' | 'Deny' | 'Allow')>;
  labSubnetName?: Expressionable<string>;
  resourceId?: Expressionable<string>;
}

export interface SubnetOverride {
  labSubnetName?: Expressionable<string>;
  resourceId?: Expressionable<string>;
  sharedPublicIpAddressConfiguration?: Expressionable<SubnetSharedPublicIpAddressConfiguration>;
  useInVmCreationPermission?: Expressionable<('Default' | 'Deny' | 'Allow')>;
  usePublicIpAddressPermission?: Expressionable<('Default' | 'Deny' | 'Allow')>;
  virtualNetworkPoolName?: Expressionable<string>;
}

export interface SubnetSharedPublicIpAddressConfiguration {
  allowedPorts?: Expressionable<Port[]>;
}

export interface TargetCostProperties {
  costThresholds?: Expressionable<CostThresholdProperties[]>;
  cycleEndDateTime?: Expressionable<string>;
  cycleStartDateTime?: Expressionable<string>;
  cycleType?: Expressionable<('CalendarMonth' | 'Custom')>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  target?: Expressionable<number>;
}

export interface UserIdentity {
  appId?: Expressionable<string>;
  objectId?: Expressionable<string>;
  principalId?: Expressionable<string>;
  principalName?: Expressionable<string>;
  tenantId?: Expressionable<string>;
}

export interface UserProperties {
  identity?: Expressionable<UserIdentity>;
  secretStore?: Expressionable<UserSecretStore>;
}

export interface UserSecretStore {
  keyVaultId?: Expressionable<string>;
  keyVaultUri?: Expressionable<string>;
}

export interface VirtualNetworkProperties {
  allowedSubnets?: Expressionable<Subnet[]>;
  description?: Expressionable<string>;
  externalProviderResourceId?: Expressionable<string>;
  subnetOverrides?: Expressionable<SubnetOverride[]>;
}

export interface WeekDetails {
  time?: Expressionable<string>;
  weekdays?: Expressionable<string[]>;
}

export interface WindowsOsInfo {
  windowsOsState?: Expressionable<('NonSysprepped' | 'SysprepRequested' | 'SysprepApplied')>;
}

export namespace labs {
  export function create(name: Expressionable<string>, properties: LabProperties, location: Expressionable<string>): ResourceDefinition<LabProperties> {
    return {
      type: 'Microsoft.DevTestLab/labs',
      apiVersion: '2018-09-15',
      name: name,
      location,
      properties,
    };
  }
}
export namespace labs {
  export namespace artifactsources {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ArtifactSourceProperties, location: Expressionable<string>): ResourceDefinition<ArtifactSourceProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/artifactsources',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace costs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabCostProperties, location: Expressionable<string>): ResourceDefinition<LabCostProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/costs',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace customimages {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CustomImageProperties, location: Expressionable<string>): ResourceDefinition<CustomImageProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/customimages',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace formulas {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FormulaProperties, location: Expressionable<string>): ResourceDefinition<FormulaProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/formulas',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace notificationchannels {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NotificationChannelProperties, location: Expressionable<string>): ResourceDefinition<NotificationChannelProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/notificationchannels',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace policysets {
    export namespace policies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyProperties, location: Expressionable<string>): ResourceDefinition<PolicyProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/policysets/policies',
          apiVersion: '2018-09-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace schedules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScheduleProperties, location: Expressionable<string>): ResourceDefinition<ScheduleProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/schedules',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace servicerunners {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.DevTestLab/labs/servicerunners',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace users {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: UserProperties, location: Expressionable<string>): ResourceDefinition<UserProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/users',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace disks {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DiskProperties, location: Expressionable<string>): ResourceDefinition<DiskProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/users/disks',
          apiVersion: '2018-09-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace environments {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnvironmentProperties, location: Expressionable<string>): ResourceDefinition<EnvironmentProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/users/environments',
          apiVersion: '2018-09-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace secrets {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SecretProperties, location: Expressionable<string>): ResourceDefinition<SecretProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/users/secrets',
          apiVersion: '2018-09-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace servicefabrics {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServiceFabricProperties, location: Expressionable<string>): ResourceDefinition<ServiceFabricProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/users/servicefabrics',
          apiVersion: '2018-09-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace servicefabrics {
      export namespace schedules {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ScheduleProperties, location: Expressionable<string>): ResourceDefinition<ScheduleProperties> {
          return {
            type: 'Microsoft.DevTestLab/labs/users/servicefabrics/schedules',
            apiVersion: '2018-09-15',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace labs {
  export namespace virtualmachines {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabVirtualMachineProperties, location: Expressionable<string>): ResourceDefinition<LabVirtualMachineProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/virtualmachines',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace virtualmachines {
    export namespace schedules {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ScheduleProperties, location: Expressionable<string>): ResourceDefinition<ScheduleProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/virtualmachines/schedules',
          apiVersion: '2018-09-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace virtualnetworks {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkProperties, location: Expressionable<string>): ResourceDefinition<VirtualNetworkProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/virtualnetworks',
        apiVersion: '2018-09-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace schedules {
  export function create(name: Expressionable<string>, properties: ScheduleProperties, location: Expressionable<string>): ResourceDefinition<ScheduleProperties> {
    return {
      type: 'Microsoft.DevTestLab/schedules',
      apiVersion: '2018-09-15',
      name: name,
      location,
      properties,
    };
  }
}
