import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CloudToDeviceProperties {
  defaultTtlAsIso8601?: Expressionable<string>;
  feedback?: Expressionable<FeedbackProperties>;
  maxDeliveryCount?: Expressionable<number>;
}

export interface EnrichmentProperties {
  endpointNames: Expressionable<string[]>;
  key: Expressionable<string>;
  value: Expressionable<string>;
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
  deviceStreams?: Expressionable<IotHubPropertiesDeviceStreams>;
  enableFileUploadNotifications?: Expressionable<boolean>;
  eventHubEndpoints?: Expressionable<any>;
  features?: Expressionable<('None' | 'DeviceManagement')>;
  ipFilterRules?: Expressionable<IpFilterRule[]>;
  messagingEndpoints?: Expressionable<any>;
  routing?: Expressionable<RoutingProperties>;
  storageEndpoints?: Expressionable<any>;
}

export interface IotHubPropertiesDeviceStreams {
  streamingEndpoints?: Expressionable<string[]>;
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
  enrichments?: Expressionable<EnrichmentProperties[]>;
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
  encoding?: Expressionable<('Avro' | 'AvroDeflate' | 'JSON')>;
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
  interface AdditionalProps {
    sku: Expressionable<IotHubSkuInfo>;
  }
  
  export function create(name: Expressionable<string>, properties: IotHubProperties, location: Expressionable<string>, sku: Expressionable<IotHubSkuInfo>): ResourceDefinition<IotHubProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Devices/IotHubs',
      apiVersion: '2019-03-22-preview',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace IotHubs {
  export namespace certificates {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Devices/IotHubs/certificates',
        apiVersion: '2019-03-22-preview',
        name: name,
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
          apiVersion: '2019-03-22-preview',
          name: name,
          properties,
        };
      }
    }
  }
}