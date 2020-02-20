import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CloudEndpointCreateParametersPropertiesModelModel {
  storageAccountResourceId?: Expressionable<string>;
  storageAccountShareName?: Expressionable<string>;
  storageAccountTenantId?: Expressionable<string>;
}

export interface RegisteredServerCreateParametersProperties {
  agentVersion?: Expressionable<string>;
  clusterId?: Expressionable<string>;
  clusterName?: Expressionable<string>;
  friendlyName?: Expressionable<string>;
  lastHeartBeat?: Expressionable<string>;
  serverCertificate?: Expressionable<string>;
  serverId?: Expressionable<string>;
  serverOSVersion?: Expressionable<string>;
  serverRole?: Expressionable<string>;
}

export interface ServerEndpointCreateParametersProperties {
  cloudTiering?: Expressionable<('on' | 'off')>;
  friendlyName?: Expressionable<string>;
  offlineDataTransfer?: Expressionable<('on' | 'off')>;
  offlineDataTransferShareName?: Expressionable<string>;
  serverLocalPath?: Expressionable<string>;
  serverResourceId?: Expressionable<string>;
  tierFilesOlderThanDays?: Expressionable<number>;
  volumeFreeSpacePercent?: Expressionable<number>;
}

export namespace storageSyncServices {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type StorageSyncServicesResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, tags?: Expressionable<any>): StorageSyncServicesResource {
    return {
      type: 'Microsoft.StorageSync/storageSyncServices',
      apiVersion: '2018-10-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace storageSyncServices {
  export namespace registeredServers {
    export type RegisteredServersResource = ResourceDefinition<RegisteredServerCreateParametersProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RegisteredServerCreateParametersProperties): RegisteredServersResource {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/registeredServers',
        apiVersion: '2018-10-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export type SyncGroupsResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): SyncGroupsResource {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/syncGroups',
        apiVersion: '2018-10-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace cloudEndpoints {
      export type CloudEndpointsResource = ResourceDefinition<CloudEndpointCreateParametersPropertiesModelModel>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CloudEndpointCreateParametersPropertiesModelModel): CloudEndpointsResource {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints',
          apiVersion: '2018-10-01',
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
      export type ServerEndpointsResource = ResourceDefinition<ServerEndpointCreateParametersProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServerEndpointCreateParametersProperties): ServerEndpointsResource {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints',
          apiVersion: '2018-10-01',
          name: name,
          properties,
        };
      }
    }
  }
}