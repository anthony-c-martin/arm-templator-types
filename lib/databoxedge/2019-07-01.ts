import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Address {
  addressLine1: Expressionable<string>;
  addressLine2?: Expressionable<string>;
  addressLine3?: Expressionable<string>;
  city: Expressionable<string>;
  country: Expressionable<string>;
  postalCode: Expressionable<string>;
  state: Expressionable<string>;
}

export interface AsymmetricEncryptedSecret {
  encryptionAlgorithm: Expressionable<('None' | 'AES256' | 'RSAES_PKCS1_v_1_5')>;
  encryptionCertThumbprint?: Expressionable<string>;
  value: Expressionable<string>;
}

export interface Authentication {
  symmetricKey?: Expressionable<SymmetricKey>;
}

export interface AzureContainerInfo {
  containerName: Expressionable<string>;
  dataFormat: Expressionable<('BlockBlob' | 'PageBlob' | 'AzureFile')>;
  storageAccountCredentialId: Expressionable<string>;
}

export interface BandwidthScheduleProperties {
  days: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
  rateInMbps: Expressionable<number>;
  start: Expressionable<string>;
  stop: Expressionable<string>;
}

export interface ClientAccessRight {
  accessPermission: Expressionable<('NoAccess' | 'ReadOnly' | 'ReadWrite')>;
  client: Expressionable<string>;
}

export interface ContactDetails {
  companyName: Expressionable<string>;
  contactPerson: Expressionable<string>;
  emailList: Expressionable<string[]>;
  phone: Expressionable<string>;
}

export interface DataBoxEdgeDeviceProperties {
  dataBoxEdgeDeviceStatus?: Expressionable<('ReadyToSetup' | 'Online' | 'Offline' | 'NeedsAttention' | 'Disconnected' | 'PartiallyDisconnected' | 'Maintenance')>;
  description?: Expressionable<string>;
  friendlyName?: Expressionable<string>;
  modelDescription?: Expressionable<string>;
}

export interface FileEventTrigger {
  kind: Expressionable<('FileEvent')>;
  properties: Expressionable<FileTriggerProperties>;
}

export interface FileSourceInfo {
  shareId: Expressionable<string>;
}

export interface FileTriggerProperties {
  customContextTag?: Expressionable<string>;
  sinkInfo: Expressionable<RoleSinkInfo>;
  sourceInfo: Expressionable<FileSourceInfo>;
}

export interface IoTDeviceInfo {
  authentication?: Expressionable<Authentication>;
  deviceId: Expressionable<string>;
  ioTHostHub: Expressionable<string>;
  ioTHostHubId?: Expressionable<string>;
}

export interface IoTRole {
  kind: Expressionable<('IOT')>;
  properties?: Expressionable<IoTRoleProperties>;
}

export interface IoTRoleProperties {
  hostPlatform: Expressionable<('Windows' | 'Linux')>;
  ioTDeviceDetails: Expressionable<IoTDeviceInfo>;
  ioTEdgeDeviceDetails: Expressionable<IoTDeviceInfo>;
  roleStatus: Expressionable<('Enabled' | 'Disabled')>;
  shareMappings?: Expressionable<MountPointMap[]>;
}

export interface MountPointMap {
  shareId: Expressionable<string>;
}

export interface OrderProperties {
  contactInformation: Expressionable<ContactDetails>;
  currentStatus?: Expressionable<OrderStatus>;
  shippingAddress: Expressionable<Address>;
}

export interface OrderStatus {
  comments?: Expressionable<string>;
  status: Expressionable<('Untracked' | 'AwaitingFulfilment' | 'AwaitingPreparation' | 'AwaitingShipment' | 'Shipped' | 'Arriving' | 'Delivered' | 'ReplacementRequested' | 'LostDevice' | 'Declined' | 'ReturnInitiated' | 'AwaitingReturnShipment' | 'ShippedBack' | 'CollectedAtMicrosoft')>;
}

export interface PeriodicTimerEventTrigger {
  kind: Expressionable<('PeriodicTimerEvent')>;
  properties: Expressionable<PeriodicTimerProperties>;
}

export interface PeriodicTimerProperties {
  customContextTag?: Expressionable<string>;
  sinkInfo: Expressionable<RoleSinkInfo>;
  sourceInfo: Expressionable<PeriodicTimerSourceInfo>;
}

export interface PeriodicTimerSourceInfo {
  schedule: Expressionable<string>;
  startTime: Expressionable<string>;
  topic?: Expressionable<string>;
}

export interface RefreshDetails {
  errorManifestFile?: Expressionable<string>;
  inProgressRefreshJobId?: Expressionable<string>;
  lastCompletedRefreshJobTimeInUTC?: Expressionable<string>;
  lastJob?: Expressionable<string>;
}

export interface RoleSinkInfo {
  roleId: Expressionable<string>;
}

export interface ShareAccessRight {
  accessType: Expressionable<('Change' | 'Read' | 'Custom')>;
  shareId: Expressionable<string>;
}

export interface ShareProperties {
  accessProtocol: Expressionable<('SMB' | 'NFS')>;
  azureContainerInfo?: Expressionable<AzureContainerInfo>;
  clientAccessRights?: Expressionable<ClientAccessRight[]>;
  dataPolicy?: Expressionable<('Cloud' | 'Local')>;
  description?: Expressionable<string>;
  monitoringStatus: Expressionable<('Enabled' | 'Disabled')>;
  refreshDetails?: Expressionable<RefreshDetails>;
  shareStatus: Expressionable<('Offline' | 'Unknown' | 'OK' | 'Updating' | 'NeedsAttention')>;
  userAccessRights?: Expressionable<UserAccessRight[]>;
}

export interface Sku {
  name?: Expressionable<('Gateway' | 'Edge')>;
  tier?: Expressionable<('Standard')>;
}

export interface StorageAccountCredentialProperties {
  accountKey?: Expressionable<AsymmetricEncryptedSecret>;
  accountType: Expressionable<('GeneralPurposeStorage' | 'BlobStorage')>;
  alias: Expressionable<string>;
  blobDomainName?: Expressionable<string>;
  connectionString?: Expressionable<string>;
  sslStatus: Expressionable<('Enabled' | 'Disabled')>;
  storageAccountId?: Expressionable<string>;
  userName?: Expressionable<string>;
}

export interface SymmetricKey {
  connectionString?: Expressionable<AsymmetricEncryptedSecret>;
}

export interface UserAccessRight {
  accessType: Expressionable<('Change' | 'Read' | 'Custom')>;
  userId: Expressionable<string>;
}

export interface UserProperties {
  encryptedPassword?: Expressionable<AsymmetricEncryptedSecret>;
  shareAccessRights?: Expressionable<ShareAccessRight[]>;
}

export namespace dataBoxEdgeDevices {
  interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: DataBoxEdgeDeviceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>): ResourceDefinition<DataBoxEdgeDeviceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices',
      apiVersion: '2019-07-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}
export namespace dataBoxEdgeDevices {
  export namespace bandwidthSchedules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BandwidthScheduleProperties): ResourceDefinition<BandwidthScheduleProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace dataBoxEdgeDevices {
  export namespace orders {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: OrderProperties): ResourceDefinition<OrderProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace dataBoxEdgeDevices {
  export namespace roles {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IoTRoleProperties): ResourceDefinition<IoTRoleProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace dataBoxEdgeDevices {
  export namespace shares {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ShareProperties): ResourceDefinition<ShareProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace dataBoxEdgeDevices {
  export namespace storageAccountCredentials {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageAccountCredentialProperties): ResourceDefinition<StorageAccountCredentialProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace dataBoxEdgeDevices {
  export namespace triggers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FileTriggerProperties | PeriodicTimerProperties): ResourceDefinition<FileTriggerProperties | PeriodicTimerProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace dataBoxEdgeDevices {
  export namespace users {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: UserProperties): ResourceDefinition<UserProperties> {
      return {
        type: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users',
        apiVersion: '2019-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}