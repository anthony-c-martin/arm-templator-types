import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CloudToDeviceProperties {
  defaultTtlAsIso8601?: Expressionable<string>;
  feedback?: Expressionable<FeedbackProperties>;
  maxDeliveryCount?: Expressionable<number>;
}

export interface EventHubProperties {
  partitionCount?: Expressionable<number>;
  retentionTimeInDays?: Expressionable<number>;
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
  storageEndpoints?: Expressionable<any>;
}

export interface IotHubSkuInfo {
  capacity: Expressionable<number>;
  name: Expressionable<('F1' | 'S1' | 'S2' | 'S3')>;
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
  export interface AddedResourceProps {
    sku: Expressionable<IotHubSkuInfo>;
    tags?: Expressionable<any>;
  }
  
  export type IotHubsResource = ResourceDefinition<IotHubProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: IotHubProperties, location: Expressionable<string>, sku: Expressionable<IotHubSkuInfo>, tags?: Expressionable<any>): IotHubsResource {
    return {
      type: 'Microsoft.Devices/IotHubs',
      apiVersion: '2016-02-03',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace IotHubs {
  export namespace eventHubEndpoints {
    export namespace ConsumerGroups {
      export type ConsumerGroupsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ConsumerGroupsResource {
        return {
          type: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups',
          apiVersion: '2016-02-03',
          name: name,
          properties,
        };
      }
    }
  }
}