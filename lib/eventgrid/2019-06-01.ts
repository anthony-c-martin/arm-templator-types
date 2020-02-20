import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface TopicProperties {
}

export interface EventSubscriptionProperties {
  topic?: Expressionable<string>;
  provisioningState?: Expressionable<('Creating' | 'Updating' | 'Deleting' | 'Succeeded' | 'Canceled' | 'Failed' | 'AwaitingManualAction')>;
  destination: Expressionable<WebHookEventSubscriptionDestination | EventHubEventSubscriptionDestination | StorageQueueEventSubscriptionDestination | HybridConnectionEventSubscriptionDestination | ServiceBusQueueEventSubscriptionDestination>;
  filter?: Expressionable<EventSubscriptionFilter>;
  labels?: Expressionable<string[]>;
  expirationTimeUtc?: Expressionable<string>;
  retryPolicy?: Expressionable<RetryPolicy>;
  deadLetterDestination?: Expressionable<DeadLetterDestination>;
}

export interface WebHookEventSubscriptionDestination {
  endpointType: Expressionable<('WebHook')>;
  properties: Expressionable<WebHookEventSubscriptionDestinationProperties>;
}

export interface WebHookEventSubscriptionDestinationProperties {
  endpointUrl?: Expressionable<string>;
  endpointBaseUrl?: Expressionable<string>;
}

export interface EventHubEventSubscriptionDestination {
  endpointType: Expressionable<('EventHub')>;
  properties: Expressionable<EventHubEventSubscriptionDestinationProperties>;
}

export interface EventHubEventSubscriptionDestinationProperties {
  resourceId?: Expressionable<string>;
}

export interface StorageQueueEventSubscriptionDestination {
  endpointType: Expressionable<('StorageQueue')>;
  properties: Expressionable<StorageQueueEventSubscriptionDestinationProperties>;
}

export interface StorageQueueEventSubscriptionDestinationProperties {
  resourceId?: Expressionable<string>;
  queueName?: Expressionable<string>;
}

export interface HybridConnectionEventSubscriptionDestination {
  endpointType: Expressionable<('HybridConnection')>;
  properties: Expressionable<HybridConnectionEventSubscriptionDestinationProperties>;
}

export interface HybridConnectionEventSubscriptionDestinationProperties {
  resourceId?: Expressionable<string>;
}

export interface ServiceBusQueueEventSubscriptionDestination {
  endpointType: Expressionable<('ServiceBusQueue')>;
  properties: Expressionable<ServiceBusQueueEventSubscriptionDestinationProperties>;
}

export interface ServiceBusQueueEventSubscriptionDestinationProperties {
  resourceId?: Expressionable<string>;
}

export interface EventSubscriptionFilter {
  subjectBeginsWith?: Expressionable<string>;
  subjectEndsWith?: Expressionable<string>;
  includedEventTypes?: Expressionable<string[]>;
  isSubjectCaseSensitive?: Expressionable<boolean>;
  advancedFilters?: Expressionable<AdvancedFilter[]>;
}

export interface RetryPolicy {
  maxDeliveryAttempts?: Expressionable<number>;
  eventTimeToLiveInMinutes?: Expressionable<number>;
}

export interface DomainProperties {
}

export interface NumberInAdvancedFilter {
  values?: Expressionable<number[]>;
}

export interface NumberNotInAdvancedFilter {
  values?: Expressionable<number[]>;
}

export interface NumberLessThanAdvancedFilter {
  value?: Expressionable<number>;
}

export interface NumberGreaterThanAdvancedFilter {
  value?: Expressionable<number>;
}

export interface NumberLessThanOrEqualsAdvancedFilter {
  value?: Expressionable<number>;
}

export interface NumberGreaterThanOrEqualsAdvancedFilter {
  value?: Expressionable<number>;
}

export interface BoolEqualsAdvancedFilter {
  value?: Expressionable<boolean>;
}

export interface StringInAdvancedFilter {
  values?: Expressionable<string[]>;
}

export interface StringNotInAdvancedFilter {
  values?: Expressionable<string[]>;
}

export interface StringBeginsWithAdvancedFilter {
  values?: Expressionable<string[]>;
}

export interface StringEndsWithAdvancedFilter {
  values?: Expressionable<string[]>;
}

export interface StringContainsAdvancedFilter {
  values?: Expressionable<string[]>;
}

export interface AdvancedFilter {
  operatorType: Expressionable<('NumberIn' | 'NumberNotIn' | 'NumberLessThan' | 'NumberGreaterThan' | 'NumberLessThanOrEquals' | 'NumberGreaterThanOrEquals' | 'BoolEquals' | 'StringIn' | 'StringNotIn' | 'StringBeginsWith' | 'StringEndsWith' | 'StringContains')>;
  key?: Expressionable<string>;
}

export interface StorageBlobDeadLetterDestination {
  properties?: Expressionable<StorageBlobDeadLetterDestinationProperties>;
}

export interface StorageBlobDeadLetterDestinationProperties {
  resourceId?: Expressionable<string>;
  blobContainerName?: Expressionable<string>;
}

export interface DeadLetterDestination {
  endpointType: Expressionable<('StorageBlob')>;
}

export namespace topics {
  export type TopicsResource = ResourceDefinition<TopicProperties>;
  
  export function create(name: Expressionable<string>, properties: TopicProperties, location: Expressionable<string>): TopicsResource {
    return {
      type: 'Microsoft.EventGrid/topics',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace eventSubscriptions {
  export type EventSubscriptionsResource = ResourceDefinition<EventSubscriptionProperties>;
  
  export function create(name: Expressionable<string>, properties: EventSubscriptionProperties): EventSubscriptionsResource {
    return {
      type: 'Microsoft.EventGrid/eventSubscriptions',
      apiVersion: '2019-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace domains {
  export type DomainsResource = ResourceDefinition<DomainProperties>;
  
  export function create(name: Expressionable<string>, properties: DomainProperties, location: Expressionable<string>): DomainsResource {
    return {
      type: 'Microsoft.EventGrid/domains',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace domains {
  export namespace topics {
    export type TopicsResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): TopicsResource {
      return {
        type: 'Microsoft.EventGrid/domains/topics',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}