import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AdvancedSchedule {
  monthDays?: Expressionable<number[]>;
  monthlyOccurrences?: Expressionable<AdvancedScheduleMonthlyOccurrence[]>;
  weekDays?: Expressionable<string[]>;
}

export interface AdvancedScheduleMonthlyOccurrence {
  day?: Expressionable<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')>;
  occurrence?: Expressionable<number>;
}

export interface AzureQueryProperties {
  locations?: Expressionable<string[]>;
  scope?: Expressionable<string[]>;
  tagSettings?: Expressionable<TagSettingsProperties>;
}

export interface ErrorResponse {
  code?: Expressionable<string>;
  message?: Expressionable<string>;
}

export interface JobCreateProperties {
  parameters?: Expressionable<any>;
  runbook?: Expressionable<RunbookAssociationProperty>;
  runOn?: Expressionable<string>;
}

export interface LinuxProperties {
  excludedPackageNameMasks?: Expressionable<string[]>;
  includedPackageClassifications?: Expressionable<('Unclassified' | 'Critical' | 'Security' | 'Other')>;
  includedPackageNameMasks?: Expressionable<string[]>;
  rebootSetting?: Expressionable<string>;
}

export interface NonAzureQueryProperties {
  functionAlias?: Expressionable<string>;
  workspaceId?: Expressionable<string>;
}

export interface RunbookAssociationProperty {
  name?: Expressionable<string>;
}

export interface SchedulePropertiesModel {
  advancedSchedule?: Expressionable<AdvancedSchedule>;
  creationTime?: Expressionable<string>;
  description?: Expressionable<string>;
  expiryTime?: Expressionable<string>;
  expiryTimeOffsetMinutes?: Expressionable<number>;
  frequency?: Expressionable<('OneTime' | 'Day' | 'Hour' | 'Week' | 'Month' | 'Minute')>;
  interval?: Expressionable<number>;
  isEnabled?: Expressionable<boolean>;
  lastModifiedTime?: Expressionable<string>;
  nextRun?: Expressionable<string>;
  nextRunOffsetMinutes?: Expressionable<number>;
  startTime?: Expressionable<string>;
  timeZone?: Expressionable<string>;
}

export interface SoftwareUpdateConfigurationProperties {
  error?: Expressionable<ErrorResponse>;
  scheduleInfo: Expressionable<SchedulePropertiesModel>;
  tasks?: Expressionable<SoftwareUpdateConfigurationTasks>;
  updateConfiguration: Expressionable<UpdateConfiguration>;
}

export interface SoftwareUpdateConfigurationTasks {
  postTask?: Expressionable<TaskProperties>;
  preTask?: Expressionable<TaskProperties>;
}

export interface SourceControlCreateOrUpdateProperties {
  autoSync?: Expressionable<boolean>;
  branch?: Expressionable<string>;
  description?: Expressionable<string>;
  folderPath?: Expressionable<string>;
  publishRunbook?: Expressionable<boolean>;
  repoUrl?: Expressionable<string>;
  securityToken?: Expressionable<SourceControlSecurityTokenProperties>;
  sourceType?: Expressionable<('VsoGit' | 'VsoTfvc' | 'GitHub')>;
}

export interface SourceControlSecurityTokenProperties {
  accessToken?: Expressionable<string>;
  refreshToken?: Expressionable<string>;
  tokenType?: Expressionable<('PersonalAccessToken' | 'Oauth')>;
}

export interface SourceControlSyncJobCreateProperties {
  commitId: Expressionable<string>;
}

export interface TagSettingsProperties {
  filterOperator?: Expressionable<('All' | 'Any')>;
  tags?: Expressionable<any>;
}

export interface TargetProperties {
  azureQueries?: Expressionable<AzureQueryProperties[]>;
  nonAzureQueries?: Expressionable<NonAzureQueryProperties[]>;
}

export interface TaskProperties {
  parameters?: Expressionable<any>;
  source?: Expressionable<string>;
}

export interface UpdateConfiguration {
  azureVirtualMachines?: Expressionable<string[]>;
  duration?: Expressionable<string>;
  linux?: Expressionable<LinuxProperties>;
  nonAzureComputerNames?: Expressionable<string[]>;
  operatingSystem: Expressionable<('Windows' | 'Linux')>;
  targets?: Expressionable<TargetProperties>;
  windows?: Expressionable<WindowsProperties>;
}

export interface WindowsProperties {
  excludedKbNumbers?: Expressionable<string[]>;
  includedKbNumbers?: Expressionable<string[]>;
  includedUpdateClassifications?: Expressionable<('Unclassified' | 'Critical' | 'Security' | 'UpdateRollup' | 'FeaturePack' | 'ServicePack' | 'Definition' | 'Tools' | 'Updates')>;
  rebootSetting?: Expressionable<string>;
}

export namespace automationAccounts {
  export namespace jobs {
    export type JobsResource = ResourceDefinition<JobCreateProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: JobCreateProperties): JobsResource {
      return {
        type: 'Microsoft.Automation/automationAccounts/jobs',
        apiVersion: '2017-05-15-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace automationAccounts {
  export namespace softwareUpdateConfigurations {
    export type SoftwareUpdateConfigurationsResource = ResourceDefinition<SoftwareUpdateConfigurationProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SoftwareUpdateConfigurationProperties): SoftwareUpdateConfigurationsResource {
      return {
        type: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations',
        apiVersion: '2017-05-15-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace automationAccounts {
  export namespace sourceControls {
    export type SourceControlsResource = ResourceDefinition<SourceControlCreateOrUpdateProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SourceControlCreateOrUpdateProperties): SourceControlsResource {
      return {
        type: 'Microsoft.Automation/automationAccounts/sourceControls',
        apiVersion: '2017-05-15-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace automationAccounts {
  export namespace sourceControls {
    export namespace sourceControlSyncJobs {
      export type SourceControlSyncJobsResource = ResourceDefinition<SourceControlSyncJobCreateProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SourceControlSyncJobCreateProperties): SourceControlSyncJobsResource {
        return {
          type: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs',
          apiVersion: '2017-05-15-preview',
          name: name,
          properties,
        };
      }
    }
  }
}