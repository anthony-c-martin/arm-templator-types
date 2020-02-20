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

export interface ServerEndpointCreateParametersPropertiesModelModel {
  cloudTiering?: Expressionable<('on' | 'off')>;
  friendlyName?: Expressionable<string>;
  serverLocalPath?: Expressionable<string>;
  serverResourceId?: Expressionable<string>;
  volumeFreeSpacePercent?: Expressionable<number>;
}

export namespace storageSyncServices {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type StorageSyncServicesResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, location?: Expressionable<string>, tags?: Expressionable<any>): StorageSyncServicesResource {
    return {
      type: 'Microsoft.StorageSync/storageSyncServices',
      apiVersion: '2018-04-02',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace storageSyncServices {
  export namespace registeredServers {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type RegisteredServersResource = ResourceDefinition<RegisteredServerCreateParametersProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RegisteredServerCreateParametersProperties, location?: Expressionable<string>, tags?: Expressionable<any>): RegisteredServersResource {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/registeredServers',
        apiVersion: '2018-04-02',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type SyncGroupsResource = ResourceDefinition<any> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location?: Expressionable<string>, tags?: Expressionable<any>): SyncGroupsResource {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/syncGroups',
        apiVersion: '2018-04-02',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace cloudEndpoints {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type CloudEndpointsResource = ResourceDefinition<CloudEndpointCreateParametersPropertiesModelModel> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CloudEndpointCreateParametersPropertiesModelModel, location?: Expressionable<string>, tags?: Expressionable<any>): CloudEndpointsResource {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints',
          apiVersion: '2018-04-02',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace serverEndpoints {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type ServerEndpointsResource = ResourceDefinition<ServerEndpointCreateParametersPropertiesModelModel> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServerEndpointCreateParametersPropertiesModelModel, location?: Expressionable<string>, tags?: Expressionable<any>): ServerEndpointsResource {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints',
          apiVersion: '2018-04-02',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}