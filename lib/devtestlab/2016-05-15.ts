import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApplicableSchedule {
  location?: Expressionable<string>;
  properties: Expressionable<ApplicableScheduleProperties>;
  tags?: Expressionable<any>;
}

export interface ApplicableScheduleProperties {
  labVmsShutdown?: Expressionable<Schedule>;
  labVmsStartup?: Expressionable<Schedule>;
}

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
  provisioningState?: Expressionable<string>;
  securityToken?: Expressionable<string>;
  sourceType?: Expressionable<('VsoGit' | 'GitHub')>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  uniqueIdentifier?: Expressionable<string>;
  uri?: Expressionable<string>;
}

export interface BulkCreationParameters {
  instanceCount?: Expressionable<number>;
}

export interface ComputeDataDisk {
  diskSizeGiB?: Expressionable<number>;
  diskUri?: Expressionable<string>;
  managedDiskId?: Expressionable<string>;
  name?: Expressionable<string>;
}

export interface ComputeVmInstanceViewStatus {
  code?: Expressionable<string>;
  displayStatus?: Expressionable<string>;
  message?: Expressionable<string>;
}

export interface ComputeVmProperties {
  dataDiskIds?: Expressionable<string[]>;
  dataDisks?: Expressionable<ComputeDataDisk[]>;
  networkInterfaceId?: Expressionable<string>;
  osDiskId?: Expressionable<string>;
  osType?: Expressionable<string>;
  statuses?: Expressionable<ComputeVmInstanceViewStatus[]>;
  vmSize?: Expressionable<string>;
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
  description?: Expressionable<string>;
  managedImageId?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  vhd?: Expressionable<CustomImagePropertiesCustom>;
  vm?: Expressionable<CustomImagePropertiesFromVm>;
}

export interface CustomImagePropertiesCustom {
  imageName?: Expressionable<string>;
  osType: Expressionable<('Windows' | 'Linux' | 'None')>;
  sysPrep?: Expressionable<boolean>;
}

export interface CustomImagePropertiesFromVm {
  linuxOsInfo?: Expressionable<LinuxOsInfo>;
  sourceVmId?: Expressionable<string>;
  windowsOsInfo?: Expressionable<WindowsOsInfo>;
}

export interface DayDetails {
  time?: Expressionable<string>;
}

export interface DiskProperties {
  diskBlobName?: Expressionable<string>;
  diskSizeGiB?: Expressionable<number>;
  diskType?: Expressionable<('Standard' | 'Premium')>;
  diskUri?: Expressionable<string>;
  hostCaching?: Expressionable<string>;
  leasedByLabVmId?: Expressionable<string>;
  managedDiskId?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface EnvironmentDeploymentProperties {
  armTemplateId?: Expressionable<string>;
  parameters?: Expressionable<ArmTemplateParameterProperties[]>;
}

export interface EnvironmentProperties {
  armTemplateDisplayName?: Expressionable<string>;
  deploymentProperties?: Expressionable<EnvironmentDeploymentProperties>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface Event {
  eventName?: Expressionable<('AutoShutdown' | 'Cost')>;
}

export interface ExternalSubnet {
  id?: Expressionable<string>;
  name?: Expressionable<string>;
}

export interface FormulaProperties {
  author?: Expressionable<string>;
  description?: Expressionable<string>;
  formulaContent?: Expressionable<LabVirtualMachineCreationParameter>;
  osType?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
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

export interface LabCostProperties {
  createdDate?: Expressionable<string>;
  currencyCode?: Expressionable<string>;
  endDateTime?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  startDateTime?: Expressionable<string>;
  targetCost?: Expressionable<TargetCostProperties>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface LabProperties {
  labStorageType?: Expressionable<('Standard' | 'Premium')>;
  premiumDataDisks?: Expressionable<('Disabled' | 'Enabled')>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface LabVirtualMachineCreationParameter {
  location?: Expressionable<string>;
  name?: Expressionable<string>;
  properties?: Expressionable<LabVirtualMachineCreationParameterProperties>;
  tags?: Expressionable<any>;
}

export interface LabVirtualMachineCreationParameterProperties {
  allowClaim?: Expressionable<boolean>;
  applicableSchedule?: Expressionable<ApplicableSchedule>;
  artifactDeploymentStatus?: Expressionable<ArtifactDeploymentStatusProperties>;
  artifacts?: Expressionable<ArtifactInstallProperties[]>;
  bulkCreationParameters?: Expressionable<BulkCreationParameters>;
  computeVm?: Expressionable<ComputeVmProperties>;
  createdByUser?: Expressionable<string>;
  createdByUserId?: Expressionable<string>;
  createdDate?: Expressionable<string>;
  customImageId?: Expressionable<string>;
  disallowPublicIpAddress?: Expressionable<boolean>;
  environmentId?: Expressionable<string>;
  expirationDate?: Expressionable<string>;
  fqdn?: Expressionable<string>;
  galleryImageReference?: Expressionable<GalleryImageReference>;
  isAuthenticationWithSshKey?: Expressionable<boolean>;
  labSubnetName?: Expressionable<string>;
  labVirtualNetworkId?: Expressionable<string>;
  networkInterface?: Expressionable<NetworkInterfaceProperties>;
  notes?: Expressionable<string>;
  osType?: Expressionable<string>;
  ownerObjectId?: Expressionable<string>;
  ownerUserPrincipalName?: Expressionable<string>;
  password?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  size?: Expressionable<string>;
  sshKey?: Expressionable<string>;
  storageType?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  userName?: Expressionable<string>;
  virtualMachineCreationSource?: Expressionable<('FromCustomImage' | 'FromGalleryImage')>;
}

export interface LabVirtualMachineProperties {
  allowClaim?: Expressionable<boolean>;
  applicableSchedule?: Expressionable<ApplicableSchedule>;
  artifactDeploymentStatus?: Expressionable<ArtifactDeploymentStatusProperties>;
  artifacts?: Expressionable<ArtifactInstallProperties[]>;
  computeVm?: Expressionable<ComputeVmProperties>;
  createdByUser?: Expressionable<string>;
  createdByUserId?: Expressionable<string>;
  createdDate?: Expressionable<string>;
  customImageId?: Expressionable<string>;
  disallowPublicIpAddress?: Expressionable<boolean>;
  environmentId?: Expressionable<string>;
  expirationDate?: Expressionable<string>;
  fqdn?: Expressionable<string>;
  galleryImageReference?: Expressionable<GalleryImageReference>;
  isAuthenticationWithSshKey?: Expressionable<boolean>;
  labSubnetName?: Expressionable<string>;
  labVirtualNetworkId?: Expressionable<string>;
  networkInterface?: Expressionable<NetworkInterfaceProperties>;
  notes?: Expressionable<string>;
  osType?: Expressionable<string>;
  ownerObjectId?: Expressionable<string>;
  ownerUserPrincipalName?: Expressionable<string>;
  password?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  size?: Expressionable<string>;
  sshKey?: Expressionable<string>;
  storageType?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  userName?: Expressionable<string>;
  virtualMachineCreationSource?: Expressionable<('FromCustomImage' | 'FromGalleryImage')>;
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
  events?: Expressionable<Event[]>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  webHookUrl?: Expressionable<string>;
}

export interface NotificationSettings {
  status?: Expressionable<('Disabled' | 'Enabled')>;
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
  factName?: Expressionable<('UserOwnedLabVmCount' | 'UserOwnedLabPremiumVmCount' | 'LabVmCount' | 'LabPremiumVmCount' | 'LabVmSize' | 'GalleryImage' | 'UserOwnedLabVmCountInSubnet' | 'LabTargetCost')>;
  provisioningState?: Expressionable<string>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  threshold?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface Port {
  backendPort?: Expressionable<number>;
  transportProtocol?: Expressionable<('Tcp' | 'Udp')>;
}

export interface Schedule {
  location?: Expressionable<string>;
  properties: Expressionable<ScheduleProperties>;
  tags?: Expressionable<any>;
}

export interface ScheduleProperties {
  dailyRecurrence?: Expressionable<DayDetails>;
  hourlyRecurrence?: Expressionable<HourDetails>;
  notificationSettings?: Expressionable<NotificationSettings>;
  provisioningState?: Expressionable<string>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  targetResourceId?: Expressionable<string>;
  taskType?: Expressionable<string>;
  timeZoneId?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  weeklyRecurrence?: Expressionable<WeekDetails>;
}

export interface SecretProperties {
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  value?: Expressionable<string>;
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
  provisioningState?: Expressionable<string>;
  secretStore?: Expressionable<UserSecretStore>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface UserSecretStore {
  keyVaultId?: Expressionable<string>;
  keyVaultUri?: Expressionable<string>;
}

export interface VirtualNetworkProperties {
  allowedSubnets?: Expressionable<Subnet[]>;
  description?: Expressionable<string>;
  externalProviderResourceId?: Expressionable<string>;
  externalSubnets?: Expressionable<ExternalSubnet[]>;
  provisioningState?: Expressionable<string>;
  subnetOverrides?: Expressionable<SubnetOverride[]>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface WeekDetails {
  time?: Expressionable<string>;
  weekdays?: Expressionable<string[]>;
}

export interface WindowsOsInfo {
  windowsOsState?: Expressionable<('NonSysprepped' | 'SysprepRequested' | 'SysprepApplied')>;
}

export namespace labs {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type LabsResource = ResourceDefinition<LabProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: LabProperties, location?: Expressionable<string>, tags?: Expressionable<any>): LabsResource {
    return {
      type: 'Microsoft.DevTestLab/labs',
      apiVersion: '2016-05-15',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace labs {
  export namespace artifactsources {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type ArtifactsourcesResource = ResourceDefinition<ArtifactSourceProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ArtifactSourceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ArtifactsourcesResource {
      return {
        type: 'Microsoft.DevTestLab/labs/artifactsources',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace costs {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type CostsResource = ResourceDefinition<LabCostProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabCostProperties, location?: Expressionable<string>, tags?: Expressionable<any>): CostsResource {
      return {
        type: 'Microsoft.DevTestLab/labs/costs',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace customimages {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type CustomimagesResource = ResourceDefinition<CustomImageProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CustomImageProperties, location?: Expressionable<string>, tags?: Expressionable<any>): CustomimagesResource {
      return {
        type: 'Microsoft.DevTestLab/labs/customimages',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace formulas {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type FormulasResource = ResourceDefinition<FormulaProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FormulaProperties, location?: Expressionable<string>, tags?: Expressionable<any>): FormulasResource {
      return {
        type: 'Microsoft.DevTestLab/labs/formulas',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace notificationchannels {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type NotificationchannelsResource = ResourceDefinition<NotificationChannelProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NotificationChannelProperties, location?: Expressionable<string>, tags?: Expressionable<any>): NotificationchannelsResource {
      return {
        type: 'Microsoft.DevTestLab/labs/notificationchannels',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace policysets {
    export namespace policies {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type PoliciesResource = ResourceDefinition<PolicyProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyProperties, location?: Expressionable<string>, tags?: Expressionable<any>): PoliciesResource {
        return {
          type: 'Microsoft.DevTestLab/labs/policysets/policies',
          apiVersion: '2016-05-15',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace schedules {
    export type SchedulesResource = ResourceDefinition<ScheduleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScheduleProperties): SchedulesResource {
      return {
        type: 'Microsoft.DevTestLab/labs/schedules',
        apiVersion: '2016-05-15',
        name: name,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace servicerunners {
    export interface AddedResourceProps {
      identity?: Expressionable<IdentityProperties>;
      tags?: Expressionable<any>;
    }
    
    export type ServicerunnersResource = ResourceDefinition<any> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location?: Expressionable<string>, identity?: Expressionable<IdentityProperties>, tags?: Expressionable<any>): ServicerunnersResource {
      return {
        type: 'Microsoft.DevTestLab/labs/servicerunners',
        apiVersion: '2016-05-15',
        name: name,
        location,
        identity,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace users {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type UsersResource = ResourceDefinition<UserProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: UserProperties, location?: Expressionable<string>, tags?: Expressionable<any>): UsersResource {
      return {
        type: 'Microsoft.DevTestLab/labs/users',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace disks {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type DisksResource = ResourceDefinition<DiskProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DiskProperties, location?: Expressionable<string>, tags?: Expressionable<any>): DisksResource {
        return {
          type: 'Microsoft.DevTestLab/labs/users/disks',
          apiVersion: '2016-05-15',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace environments {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type EnvironmentsResource = ResourceDefinition<EnvironmentProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnvironmentProperties, location?: Expressionable<string>, tags?: Expressionable<any>): EnvironmentsResource {
        return {
          type: 'Microsoft.DevTestLab/labs/users/environments',
          apiVersion: '2016-05-15',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace users {
    export namespace secrets {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type SecretsResource = ResourceDefinition<SecretProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SecretProperties, location?: Expressionable<string>, tags?: Expressionable<any>): SecretsResource {
        return {
          type: 'Microsoft.DevTestLab/labs/users/secrets',
          apiVersion: '2016-05-15',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace virtualmachines {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type VirtualmachinesResource = ResourceDefinition<LabVirtualMachineProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabVirtualMachineProperties, location?: Expressionable<string>, tags?: Expressionable<any>): VirtualmachinesResource {
      return {
        type: 'Microsoft.DevTestLab/labs/virtualmachines',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace virtualmachines {
    export namespace schedules {
      export type SchedulesResource = ResourceDefinition<ScheduleProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ScheduleProperties): SchedulesResource {
        return {
          type: 'Microsoft.DevTestLab/labs/virtualmachines/schedules',
          apiVersion: '2016-05-15',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace labs {
  export namespace virtualnetworks {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type VirtualnetworksResource = ResourceDefinition<VirtualNetworkProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkProperties, location?: Expressionable<string>, tags?: Expressionable<any>): VirtualnetworksResource {
      return {
        type: 'Microsoft.DevTestLab/labs/virtualnetworks',
        apiVersion: '2016-05-15',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace schedules {
  export type SchedulesResource = ResourceDefinition<ScheduleProperties>;
  
  export function create(name: Expressionable<string>, properties: ScheduleProperties): SchedulesResource {
    return {
      type: 'Microsoft.DevTestLab/schedules',
      apiVersion: '2016-05-15',
      name: [name],
      properties,
    };
  }
}