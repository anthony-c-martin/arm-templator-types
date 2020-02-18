import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: any, location?: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.StorageSync/storageSyncServices',
      apiVersion: '2018-04-02',
      name: name,
      location,
      properties,
    };
  }
}
export namespace storageSyncServices {
  export namespace registeredServers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RegisteredServerCreateParametersProperties, location?: Expressionable<string>): ResourceDefinition<RegisteredServerCreateParametersProperties> {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/registeredServers',
        apiVersion: '2018-04-02',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location?: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/syncGroups',
        apiVersion: '2018-04-02',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace cloudEndpoints {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CloudEndpointCreateParametersPropertiesModelModel, location?: Expressionable<string>): ResourceDefinition<CloudEndpointCreateParametersPropertiesModelModel> {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints',
          apiVersion: '2018-04-02',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace serverEndpoints {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServerEndpointCreateParametersPropertiesModelModel, location?: Expressionable<string>): ResourceDefinition<ServerEndpointCreateParametersPropertiesModelModel> {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints',
          apiVersion: '2018-04-02',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}