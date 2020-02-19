import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CloudEndpointCreateParametersPropertiesModel {
  azureFileShareName?: Expressionable<string>;
  storageAccountResourceId?: Expressionable<string>;
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
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.StorageSync/storageSyncServices',
      apiVersion: '2019-02-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace storageSyncServices {
  export namespace registeredServers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RegisteredServerCreateParametersProperties): ResourceDefinition<RegisteredServerCreateParametersProperties> {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/registeredServers',
        apiVersion: '2019-02-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.StorageSync/storageSyncServices/syncGroups',
        apiVersion: '2019-02-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace storageSyncServices {
  export namespace syncGroups {
    export namespace cloudEndpoints {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CloudEndpointCreateParametersPropertiesModel): ResourceDefinition<CloudEndpointCreateParametersPropertiesModel> {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints',
          apiVersion: '2019-02-01',
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServerEndpointCreateParametersProperties): ResourceDefinition<ServerEndpointCreateParametersProperties> {
        return {
          type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints',
          apiVersion: '2019-02-01',
          name: name,
          properties,
        };
      }
    }
  }
}