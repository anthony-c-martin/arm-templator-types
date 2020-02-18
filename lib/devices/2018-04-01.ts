import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface CloudToDeviceProperties {
  defaultTtlAsIso8601?: Expressionable<string>;
  feedback?: Expressionable<FeedbackProperties>;
  maxDeliveryCount?: Expressionable<number>;
}

export interface EventHubProperties {
  partitionCount?: Expressionable<number>;
  retentionTimeInDays?: Expressionable<number>;
}

export interface FallbackRouteProperties {
  condition?: Expressionable<string>;
  endpointNames: Expressionable<string[]>;
  isEnabled: Expressionable<boolean>;
  name?: Expressionable<string>;
  source: Expressionable<('Invalid' | 'DeviceMessages' | 'TwinChangeEvents' | 'DeviceLifecycleEvents' | 'DeviceJobLifecycleEvents')>;
}

export interface FeedbackProperties {
  lockDurationAsIso8601?: Expressionable<string>;
  maxDeliveryCount?: Expressionable<number>;
  ttlAsIso8601?: Expressionable<string>;
}

export interface IotHubProperties {
  authorizationPolicies?: Expressionable<SharedAccessSignatureAuthorizationRule[]>;
  cloudToDevice?: Expressionable<CloudToDeviceProperties>;
  comments?: Expressionable<string>;
  enableFileUploadNotifications?: Expressionable<boolean>;
  eventHubEndpoints?: Expressionable<any>;
  features?: Expressionable<('None' | 'DeviceManagement')>;
  ipFilterRules?: Expressionable<IpFilterRule[]>;
  messagingEndpoints?: Expressionable<any>;
  operationsMonitoringProperties?: Expressionable<OperationsMonitoringProperties>;
  routing?: Expressionable<RoutingProperties>;
  storageEndpoints?: Expressionable<any>;
}

export interface IotHubSkuInfo {
  capacity?: Expressionable<number>;
  name: Expressionable<('F1' | 'S1' | 'S2' | 'S3' | 'B1' | 'B2' | 'B3')>;
}

export interface IpFilterRule {
  action: Expressionable<('Accept' | 'Reject')>;
  filterName: Expressionable<string>;
  ipMask: Expressionable<string>;
}

export interface MessagingEndpointProperties {
  lockDurationAsIso8601?: Expressionable<string>;
  maxDeliveryCount?: Expressionable<number>;
  ttlAsIso8601?: Expressionable<string>;
}

export interface OperationsMonitoringProperties {
  events?: Expressionable<any>;
}

export interface RouteProperties {
  condition?: Expressionable<string>;
  endpointNames: Expressionable<string[]>;
  isEnabled: Expressionable<boolean>;
  name: Expressionable<string>;
  source: Expressionable<('Invalid' | 'DeviceMessages' | 'TwinChangeEvents' | 'DeviceLifecycleEvents' | 'DeviceJobLifecycleEvents')>;
}

export interface RoutingEndpoints {
  eventHubs?: Expressionable<RoutingEventHubProperties[]>;
  serviceBusQueues?: Expressionable<RoutingServiceBusQueueEndpointProperties[]>;
  serviceBusTopics?: Expressionable<RoutingServiceBusTopicEndpointProperties[]>;
  storageContainers?: Expressionable<RoutingStorageContainerProperties[]>;
}

export interface RoutingEventHubProperties {
  connectionString: Expressionable<string>;
  name: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
}

export interface RoutingProperties {
  endpoints?: Expressionable<RoutingEndpoints>;
  fallbackRoute?: Expressionable<FallbackRouteProperties>;
  routes?: Expressionable<RouteProperties[]>;
}

export interface RoutingServiceBusQueueEndpointProperties {
  connectionString: Expressionable<string>;
  name: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
}

export interface RoutingServiceBusTopicEndpointProperties {
  connectionString: Expressionable<string>;
  name: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
}

export interface RoutingStorageContainerProperties {
  batchFrequencyInSeconds?: Expressionable<number>;
  connectionString: Expressionable<string>;
  containerName: Expressionable<string>;
  encoding?: Expressionable<string>;
  fileNameFormat?: Expressionable<string>;
  maxChunkSizeInBytes?: Expressionable<number>;
  name: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
}

export interface SharedAccessSignatureAuthorizationRule {
  keyName: Expressionable<string>;
  primaryKey?: Expressionable<string>;
  rights: Expressionable<('RegistryRead' | 'RegistryWrite' | 'ServiceConnect' | 'DeviceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, ServiceConnect' | 'RegistryRead, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite, DeviceConnect' | 'ServiceConnect, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect')>;
  secondaryKey?: Expressionable<string>;
}

export interface StorageEndpointProperties {
  connectionString: Expressionable<string>;
  containerName: Expressionable<string>;
  sasTtlAsIso8601?: Expressionable<string>;
}

export namespace IotHubs {
  export function create(name: Expressionable<string>, properties: IotHubProperties, location: Expressionable<string>): ResourceDefinition<IotHubProperties> {
    return {
      type: 'Microsoft.Devices/IotHubs',
      apiVersion: '2018-04-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace IotHubs {
  export namespace certificates {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Devices/IotHubs/certificates',
        apiVersion: '2018-04-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace IotHubs {
  export namespace eventHubEndpoints {
    export namespace ConsumerGroups {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
        return {
          type: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups',
          apiVersion: '2018-04-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}