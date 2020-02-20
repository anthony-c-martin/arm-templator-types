import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface TopicProperties {
}

export interface EventSubscriptionProperties {
  topic?: Expressionable<string>;
  provisioningState?: Expressionable<('Creating' | 'Updating' | 'Deleting' | 'Succeeded' | 'Canceled' | 'Failed')>;
  destination: Expressionable<WebHookEventSubscriptionDestination | EventHubEventSubscriptionDestination>;
  filter?: Expressionable<EventSubscriptionFilter>;
  labels?: Expressionable<string[]>;
}

export interface WebHookEventSubscriptionDestination {
  endpointType: Expressionable<('WebHook')>;
  properties: Expressionable<WebHookEventSubscriptionDestinationProperties>;
}

export interface WebHookEventSubscriptionDestinationProperties {
  endpointUrl?: Expressionable<string>;
  endpointBaseUrl?: Expressionable<string>;
}

export interface EventHubEventSubscriptionDestinationProperties {
  resourceId?: Expressionable<string>;
}

export interface EventHubEventSubscriptionDestination {
  endpointType: Expressionable<('EventHub')>;
  properties: Expressionable<EventHubEventSubscriptionDestinationProperties>;
}

export interface EventSubscriptionFilter {
  subjectBeginsWith?: Expressionable<string>;
  subjectEndsWith?: Expressionable<string>;
  includedEventTypes?: Expressionable<string[]>;
  isSubjectCaseSensitive?: Expressionable<boolean>;
}

export namespace topics {
  export type TopicsResource = ResourceDefinition<TopicProperties>;
  
  export function create(name: Expressionable<string>, properties: TopicProperties, location: Expressionable<string>): TopicsResource {
    return {
      type: 'Microsoft.EventGrid/topics',
      apiVersion: '2018-01-01',
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
      apiVersion: '2018-01-01',
      name: [name],
      properties,
    };
  }
}