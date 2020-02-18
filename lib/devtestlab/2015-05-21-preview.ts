import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ArtifactDeploymentStatusProperties {
  artifactsApplied?: Expressionable<number>;
  deploymentStatus?: Expressionable<string>;
  totalArtifacts?: Expressionable<number>;
}

export interface ArtifactInstallProperties {
  artifactId?: Expressionable<string>;
  parameters?: Expressionable<ArtifactParameterProperties[]>;
}

export interface ArtifactParameterProperties {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ArtifactSourceProperties {
  branchRef?: Expressionable<string>;
  displayName?: Expressionable<string>;
  folderPath?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  securityToken?: Expressionable<string>;
  sourceType?: Expressionable<('VsoGit' | 'GitHub')>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  uri?: Expressionable<string>;
}

export interface CustomImageProperties {
  author?: Expressionable<string>;
  creationDate?: Expressionable<string>;
  description?: Expressionable<string>;
  osType?: Expressionable<('Windows' | 'Linux' | 'None')>;
  provisioningState?: Expressionable<string>;
  vhd?: Expressionable<CustomImagePropertiesCustom>;
  vm?: Expressionable<CustomImagePropertiesFromVm>;
}

export interface CustomImagePropertiesCustom {
  imageName?: Expressionable<string>;
  sysPrep?: Expressionable<boolean>;
}

export interface CustomImagePropertiesFromVm {
  linuxOsInfo?: Expressionable<LinuxOsInfo>;
  sourceVmId?: Expressionable<string>;
  sysPrep?: Expressionable<boolean>;
  windowsOsInfo?: Expressionable<WindowsOsInfo>;
}

export interface DayDetails {
  time?: Expressionable<string>;
}

export interface FormulaProperties {
  author?: Expressionable<string>;
  creationDate?: Expressionable<string>;
  description?: Expressionable<string>;
  formulaContent?: Expressionable<LabVirtualMachine>;
  osType?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
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

export interface LabProperties {
  artifactsStorageAccount?: Expressionable<string>;
  createdDate?: Expressionable<string>;
  defaultStorageAccount?: Expressionable<string>;
  defaultVirtualNetworkId?: Expressionable<string>;
  labStorageType?: Expressionable<('Standard' | 'Premium')>;
  provisioningState?: Expressionable<string>;
  storageAccounts?: Expressionable<string[]>;
  vaultName?: Expressionable<string>;
}

export interface LabVirtualMachine {
  id?: Expressionable<string>;
  location?: Expressionable<string>;
  name?: Expressionable<string>;
  properties?: Expressionable<LabVirtualMachineProperties>;
  tags?: Expressionable<any>;
  type?: Expressionable<string>;
}

export interface LabVirtualMachineProperties {
  artifactDeploymentStatus?: Expressionable<ArtifactDeploymentStatusProperties>;
  artifacts?: Expressionable<ArtifactInstallProperties[]>;
  computeId?: Expressionable<string>;
  createdByUser?: Expressionable<string>;
  createdByUserId?: Expressionable<string>;
  customImageId?: Expressionable<string>;
  disallowPublicIpAddress?: Expressionable<boolean>;
  fqdn?: Expressionable<string>;
  galleryImageReference?: Expressionable<GalleryImageReference>;
  isAuthenticationWithSshKey?: Expressionable<boolean>;
  labSubnetName?: Expressionable<string>;
  labVirtualNetworkId?: Expressionable<string>;
  notes?: Expressionable<string>;
  osType?: Expressionable<string>;
  ownerObjectId?: Expressionable<string>;
  password?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  size?: Expressionable<string>;
  sshKey?: Expressionable<string>;
  userName?: Expressionable<string>;
}

export interface LinuxOsInfo {
  linuxOsState?: Expressionable<('NonDeprovisioned' | 'DeprovisionRequested' | 'DeprovisionApplied')>;
}

export interface PolicyProperties {
  description?: Expressionable<string>;
  evaluatorType?: Expressionable<('AllowedValuesPolicy' | 'MaxValuePolicy')>;
  factData?: Expressionable<string>;
  factName?: Expressionable<('UserOwnedLabVmCount' | 'LabVmCount' | 'LabVmSize' | 'GalleryImage' | 'UserOwnedLabVmCountInSubnet')>;
  provisioningState?: Expressionable<string>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  threshold?: Expressionable<string>;
}

export interface ScheduleProperties {
  dailyRecurrence?: Expressionable<DayDetails>;
  hourlyRecurrence?: Expressionable<HourDetails>;
  provisioningState?: Expressionable<string>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  taskType?: Expressionable<('LabVmsShutdownTask' | 'LabVmsStartupTask' | 'LabBillingTask')>;
  timeZoneId?: Expressionable<string>;
  weeklyRecurrence?: Expressionable<WeekDetails>;
}

export interface Subnet {
  allowPublicIp?: Expressionable<('Default' | 'Deny' | 'Allow')>;
  labSubnetName?: Expressionable<string>;
  resourceId?: Expressionable<string>;
}

export interface SubnetOverride {
  labSubnetName?: Expressionable<string>;
  resourceId?: Expressionable<string>;
  useInVmCreationPermission?: Expressionable<('Default' | 'Deny' | 'Allow')>;
  usePublicIpAddressPermission?: Expressionable<('Default' | 'Deny' | 'Allow')>;
}

export interface VirtualNetworkProperties {
  allowedSubnets?: Expressionable<Subnet[]>;
  description?: Expressionable<string>;
  externalProviderResourceId?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
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
  export function create(name: Expressionable<string>, properties: LabProperties, location?: Expressionable<string>): ResourceDefinition<LabProperties> {
    return {
      type: 'Microsoft.DevTestLab/labs',
      apiVersion: '2015-05-21-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace labs {
  export namespace artifactsources {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ArtifactSourceProperties, location?: Expressionable<string>): ResourceDefinition<ArtifactSourceProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/artifactsources',
        apiVersion: '2015-05-21-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace customimages {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CustomImageProperties, location?: Expressionable<string>): ResourceDefinition<CustomImageProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/customimages',
        apiVersion: '2015-05-21-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace formulas {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FormulaProperties, location?: Expressionable<string>): ResourceDefinition<FormulaProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/formulas',
        apiVersion: '2015-05-21-preview',
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyProperties, location?: Expressionable<string>): ResourceDefinition<PolicyProperties> {
        return {
          type: 'Microsoft.DevTestLab/labs/policysets/policies',
          apiVersion: '2015-05-21-preview',
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScheduleProperties, location?: Expressionable<string>): ResourceDefinition<ScheduleProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/schedules',
        apiVersion: '2015-05-21-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace virtualmachines {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabVirtualMachineProperties, location?: Expressionable<string>): ResourceDefinition<LabVirtualMachineProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/virtualmachines',
        apiVersion: '2015-05-21-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labs {
  export namespace virtualnetworks {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkProperties, location?: Expressionable<string>): ResourceDefinition<VirtualNetworkProperties> {
      return {
        type: 'Microsoft.DevTestLab/labs/virtualnetworks',
        apiVersion: '2015-05-21-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}