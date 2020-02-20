import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CloudEndpointProperties {
  friendlyName?: Expressionable<string>;
  lastWorkflowId?: Expressionable<string>;
  partnershipId?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  storageAccount?: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountResourceId?: Expressionable<string>;
  storageAccountShareName?: Expressionable<string>;
  storageAccountTenantId?: Expressionable<string>;
}

export interface RegisteredServerProperties {
  agentVersion?: Expressionable<string>;
  clusterId?: Expressionable<string>;
  clusterName?: Expressionable<string>;
  lastHeartBeat?: Expressionable<string>;
  lastWorkflowId?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  serverCertificate?: Expressionable<string>;
  serverId?: Expressionable<string>;
  serverManagementtErrorCode?: Expressionable<number>;
  serverOSVersion?: Expressionable<string>;
  serverRole?: Expressionable<string>;
  storageSyncServiceUid?: Expressionable<string>;
}

export interface ServerEndpointProperties {
  byteProgress?: Expressionable<number>;
  byteTotal?: Expressionable<number>;
  cloudTiering?: Expressionable<('on' | 'off')>;
  currentProgressType?: Expressionable<('none' | 'initialize' | 'download' | 'upload' | 'recall')>;
  friendlyName?: Expressionable<string>;
  itemDownloadErrorCount?: Expressionable<number>;
  itemProgressCount?: Expressionable<number>;
  itemTotalCount?: Expressionable<number>;
  itemUploadErrorCount?: Expressionable<number>;
  lastSyncSuccess?: Expressionable<string>;
  lastWorkflowId?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  serverLocalPath?: Expressionable<string>;
  serverResourceId?: Expressionable<string>;
  syncErrorContext?: Expressionable<string>;
  syncErrorDirection?: Expressionable<('none' | 'initialize' | 'download' | 'upload' | 'recall')>;
  syncErrorState?: Expressionable<string>;
  syncErrorStateTimestamp?: Expressionable<string>;
  totalProgress?: Expressionable<number>;
  volumeFreeSpacePercent?: Expressionable<number>;
}

export interface StorageSyncServiceProperties {
}

export interface SyncGroupProperties {
  uniqueId?: Expressionable<string>;
}

export namespace storageSyncServices {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type StorageSyncServicesResource = ResourceDefinition<StorageSyncServiceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: StorageSyncServiceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): StorageSyncServicesResource {
    return {
      type: 'Microsoft.StorageSync/storageSyncServices',
      apiVersion: '2017-06-05-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace storageSyncServices {
  export namespace registeredServers {
    export type RegisteredServersResource = ResourceDefinition<RegisteredServerProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RegisteredServerProperties): RegisteredServersResource {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/registeredServers',
        apiVersion: '2017-06-05-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export type SyncGroupsResource = ResourceDefinition<SyncGroupProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SyncGroupProperties): SyncGroupsResource {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/syncGroups',
        apiVersion: '2017-06-05-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace cloudEndpoints {
      export type CloudEndpointsResource = ResourceDefinition<CloudEndpointProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CloudEndpointProperties): CloudEndpointsResource {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints',
          apiVersion: '2017-06-05-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace serverEndpoints {
      export type ServerEndpointsResource = ResourceDefinition<ServerEndpointProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServerEndpointProperties): ServerEndpointsResource {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints',
          apiVersion: '2017-06-05-preview',
          name: name,
          properties,
        };
      }
    }
  }
}