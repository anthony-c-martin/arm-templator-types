import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AccessControlRecordProperties {
  initiatorName: Expressionable<string>;
}

export interface AsymmetricEncryptedSecret {
  value: Expressionable<string>;
  encryptionCertThumbprint?: Expressionable<string>;
  encryptionAlgorithm: Expressionable<('None' | 'AES256' | 'RSAES_PKCS1_v_1_5')>;
}

export interface BackupPolicyProperties {
  volumeIds: Expressionable<string[]>;
}

export interface BackupScheduleProperties {
  scheduleRecurrence: Expressionable<ScheduleRecurrence>;
  backupType: Expressionable<('LocalSnapshot' | 'CloudSnapshot')>;
  retentionCount: Expressionable<number>;
  startTime: Expressionable<string>;
  scheduleStatus: Expressionable<('Enabled' | 'Disabled')>;
}

export interface BandwidthRateSettingProperties {
  schedules: Expressionable<BandwidthSchedule[]>;
}

export interface BandwidthSchedule {
  start: Expressionable<Time>;
  stop: Expressionable<Time>;
  rateInMbps: Expressionable<number>;
  days: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
}

export interface ManagerIntrinsicSettings {
  type: Expressionable<('GardaV1' | 'HelsinkiV1')>;
}

export interface ManagerProperties {
  cisIntrinsicSettings?: Expressionable<ManagerIntrinsicSettings>;
  sku?: Expressionable<ManagerSku>;
  provisioningState?: Expressionable<string>;
}

export interface ManagerSku {
  name: Expressionable<('Standard')>;
}

export interface ScheduleRecurrence {
  recurrenceType: Expressionable<('Minutes' | 'Hourly' | 'Daily' | 'Weekly')>;
  recurrenceValue: Expressionable<number>;
  weeklyDaysList?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
}

export interface StorageAccountCredentialProperties {
  endPoint: Expressionable<string>;
  sslStatus: Expressionable<('Enabled' | 'Disabled')>;
  accessKey?: Expressionable<AsymmetricEncryptedSecret>;
}

export interface Time {
  hours: Expressionable<number>;
  minutes: Expressionable<number>;
  seconds: Expressionable<number>;
}

export interface VolumeContainerProperties {
  encryptionKey?: Expressionable<AsymmetricEncryptedSecret>;
  storageAccountCredentialId: Expressionable<string>;
  bandWidthRateInMbps?: Expressionable<number>;
  bandwidthSettingId?: Expressionable<string>;
}

export interface VolumeProperties {
  sizeInBytes: Expressionable<number>;
  volumeType: Expressionable<('Tiered' | 'Archival' | 'LocallyPinned')>;
  accessControlRecordIds: Expressionable<string[]>;
  volumeStatus: Expressionable<('Online' | 'Offline')>;
  monitoringStatus: Expressionable<('Enabled' | 'Disabled')>;
}

export namespace managers {
  export function create(name: Expressionable<string>, properties: ManagerProperties, location: Expressionable<string>): ResourceDefinition<ManagerProperties> {
    return {
      type: 'Microsoft.StorSimple/managers',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace managers {
  export namespace accessControlRecords {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AccessControlRecordProperties): ResourceDefinition<AccessControlRecordProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/accessControlRecords',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace managers {
  export namespace bandwidthSettings {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BandwidthRateSettingProperties): ResourceDefinition<BandwidthRateSettingProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/bandwidthSettings',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace backupPolicies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BackupPolicyProperties): ResourceDefinition<BackupPolicyProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/backupPolicies',
          apiVersion: '2017-06-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace backupPolicies {
      export namespace schedules {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BackupScheduleProperties): ResourceDefinition<BackupScheduleProperties> {
          return {
            type: 'Microsoft.StorSimple/managers/devices/backupPolicies/schedules',
            apiVersion: '2017-06-01',
            name: concatResourceName(...name),
            properties,
          };
        }
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace volumeContainers {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VolumeContainerProperties): ResourceDefinition<VolumeContainerProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/volumeContainers',
          apiVersion: '2017-06-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace volumeContainers {
      export namespace volumes {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VolumeProperties): ResourceDefinition<VolumeProperties> {
          return {
            type: 'Microsoft.StorSimple/managers/devices/volumeContainers/volumes',
            apiVersion: '2017-06-01',
            name: concatResourceName(...name),
            properties,
          };
        }
      }
    }
  }
}
export namespace managers {
  export namespace storageAccountCredentials {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageAccountCredentialProperties): ResourceDefinition<StorageAccountCredentialProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/storageAccountCredentials',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}