// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-10-01/Microsoft.StorSimple.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AccessControlRecordProperties {
  initiatorName: Expressionable<string>;
}

export interface AlertSettingsProperties {
  emailNotification: Expressionable<('Enabled' | 'Disabled')>;
  notificationToServiceOwners: Expressionable<('Enabled' | 'Disabled')>;
  alertNotificationCulture: Expressionable<string>;
  additionalRecipientEmailList?: Expressionable<string[]>;
}

export interface AsymmetricEncryptedSecret {
  value: Expressionable<string>;
  encryptionCertificateThumbprint?: Expressionable<string>;
  encryptionAlgorithm: Expressionable<('None' | 'AES256' | 'RSAES_PKCS1_v_1_5')>;
}

export interface BackupScheduleGroupProperties {
  startTime: Expressionable<Time>;
}

export interface ChapProperties {
  password: Expressionable<AsymmetricEncryptedSecret>;
}

export interface FileServerProperties {
  domainName: Expressionable<string>;
  storageDomainId: Expressionable<string>;
  backupScheduleGroupId: Expressionable<string>;
  description?: Expressionable<string>;
}

export interface FileShareProperties {
  description?: Expressionable<string>;
  shareStatus: Expressionable<('Online' | 'Offline')>;
  dataPolicy: Expressionable<('Invalid' | 'Local' | 'Tiered' | 'Cloud')>;
  adminUser: Expressionable<string>;
  provisionedCapacityInBytes: Expressionable<number>;
  monitoringStatus: Expressionable<('Enabled' | 'Disabled')>;
}

export interface ISCSIDiskProperties {
  description?: Expressionable<string>;
  diskStatus: Expressionable<('Online' | 'Offline')>;
  accessControlRecords: Expressionable<string[]>;
  dataPolicy: Expressionable<('Invalid' | 'Local' | 'Tiered' | 'Cloud')>;
  provisionedCapacityInBytes: Expressionable<number>;
  monitoringStatus: Expressionable<('Enabled' | 'Disabled')>;
}

export interface ISCSIServerProperties {
  storageDomainId: Expressionable<string>;
  backupScheduleGroupId: Expressionable<string>;
  description?: Expressionable<string>;
  chapId?: Expressionable<string>;
  reverseChapId?: Expressionable<string>;
}

export interface ManagerExtendedInfoProperties {
  version?: Expressionable<string>;
  integrityKey: Expressionable<string>;
  encryptionKey?: Expressionable<string>;
  encryptionKeyThumbprint?: Expressionable<string>;
  portalCertificateThumbprint?: Expressionable<string>;
  algorithm: Expressionable<string>;
}

export interface ManagerIntrinsicSettings {
  type: Expressionable<('GardaV1' | 'HelsinkiV1')>;
}

export interface ManagerProperties {
  cisIntrinsicSettings?: Expressionable<ManagerIntrinsicSettings>;
  sku?: Expressionable<ManagerSku>;
}

export interface ManagerSku {
  name: Expressionable<('Standard')>;
}

export interface RawCertificateData {
  authType?: Expressionable<('Invalid' | 'AccessControlService' | 'AzureActiveDirectory')>;
  certificate: Expressionable<string>;
}

export interface StorageAccountCredentialProperties {
  cloudType: Expressionable<('Azure' | 'S3' | 'S3_RRS' | 'OpenStack' | 'HP')>;
  endPoint: Expressionable<string>;
  login: Expressionable<string>;
  location?: Expressionable<string>;
  enableSSL: Expressionable<('Enabled' | 'Disabled')>;
  accessKey?: Expressionable<AsymmetricEncryptedSecret>;
}

export interface StorageDomainProperties {
  storageAccountCredentialIds: Expressionable<string[]>;
  encryptionKey?: Expressionable<AsymmetricEncryptedSecret>;
  encryptionStatus: Expressionable<('Enabled' | 'Disabled')>;
}

export interface Time {
  hour: Expressionable<number>;
  minute: Expressionable<number>;
}

export namespace managers {
  export function create(name: Expressionable<string>, properties: ManagerProperties, location: Expressionable<string>): ResourceDefinition<ManagerProperties> {
    return {
      type: 'Microsoft.StorSimple/managers',
      apiVersion: '2016-10-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace managers {
  export namespace accessControlRecords {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AccessControlRecordProperties, location: Expressionable<string>): ResourceDefinition<AccessControlRecordProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/accessControlRecords',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managers {
  export namespace certificates {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RawCertificateData, location: Expressionable<string>): ResourceDefinition<RawCertificateData> {
      return {
        type: 'Microsoft.StorSimple/managers/certificates',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace alertSettings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AlertSettingsProperties, location: Expressionable<string>): ResourceDefinition<AlertSettingsProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/alertSettings',
          apiVersion: '2016-10-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace backupScheduleGroups {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BackupScheduleGroupProperties, location: Expressionable<string>): ResourceDefinition<BackupScheduleGroupProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/backupScheduleGroups',
          apiVersion: '2016-10-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace chapSettings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ChapProperties, location: Expressionable<string>): ResourceDefinition<ChapProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/chapSettings',
          apiVersion: '2016-10-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace fileservers {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: FileServerProperties, location: Expressionable<string>): ResourceDefinition<FileServerProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/fileservers',
          apiVersion: '2016-10-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace fileservers {
      export namespace shares {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: FileShareProperties, location: Expressionable<string>): ResourceDefinition<FileShareProperties> {
          return {
            type: 'Microsoft.StorSimple/managers/devices/fileservers/shares',
            apiVersion: '2016-10-01',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace iscsiservers {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ISCSIServerProperties, location: Expressionable<string>): ResourceDefinition<ISCSIServerProperties> {
        return {
          type: 'Microsoft.StorSimple/managers/devices/iscsiservers',
          apiVersion: '2016-10-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace managers {
  export namespace devices {
    export namespace iscsiservers {
      export namespace disks {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ISCSIDiskProperties, location: Expressionable<string>): ResourceDefinition<ISCSIDiskProperties> {
          return {
            type: 'Microsoft.StorSimple/managers/devices/iscsiservers/disks',
            apiVersion: '2016-10-01',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace managers {
  export namespace extendedInformation {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagerExtendedInfoProperties, location: Expressionable<string>): ResourceDefinition<ManagerExtendedInfoProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/extendedInformation',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managers {
  export namespace storageAccountCredentials {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageAccountCredentialProperties, location: Expressionable<string>): ResourceDefinition<StorageAccountCredentialProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/storageAccountCredentials',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managers {
  export namespace storageDomains {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageDomainProperties, location: Expressionable<string>): ResourceDefinition<StorageDomainProperties> {
      return {
        type: 'Microsoft.StorSimple/managers/storageDomains',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
