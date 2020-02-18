import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AccessPolicyResourceProperties {
  description?: Expressionable<string>;
  principalObjectId?: Expressionable<string>;
  roles?: Expressionable<('Reader' | 'Contributor')[]>;
}

export interface EnvironmentCreationProperties {
  dataRetentionTime: Expressionable<string>;
  partitionKeyProperties?: Expressionable<PartitionKeyProperty[]>;
  storageLimitExceededBehavior?: Expressionable<('PurgeOldData' | 'PauseIngress')>;
}

export interface EventHubEventSourceCreateOrUpdateParameters {
  kind: Expressionable<('Microsoft.EventHub')>;
  properties: Expressionable<EventHubEventSourceCreationProperties>;
}

export interface EventHubEventSourceCreationProperties {
  consumerGroupName: Expressionable<string>;
  eventHubName: Expressionable<string>;
  eventSourceResourceId: Expressionable<string>;
  keyName: Expressionable<string>;
  provisioningState?: Expressionable<('Accepted' | 'Creating' | 'Updating' | 'Succeeded' | 'Failed' | 'Deleting')>;
  serviceBusNamespace: Expressionable<string>;
  sharedAccessKey: Expressionable<string>;
  timestampPropertyName?: Expressionable<string>;
}

export interface IoTHubEventSourceCreateOrUpdateParameters {
  kind: Expressionable<('Microsoft.IoTHub')>;
  properties: Expressionable<IoTHubEventSourceCreationProperties>;
}

export interface IoTHubEventSourceCreationProperties {
  consumerGroupName: Expressionable<string>;
  eventSourceResourceId: Expressionable<string>;
  iotHubName: Expressionable<string>;
  keyName: Expressionable<string>;
  provisioningState?: Expressionable<('Accepted' | 'Creating' | 'Updating' | 'Succeeded' | 'Failed' | 'Deleting')>;
  sharedAccessKey: Expressionable<string>;
  timestampPropertyName?: Expressionable<string>;
}

export interface PartitionKeyProperty {
  name?: Expressionable<string>;
  type?: Expressionable<('String')>;
}

export interface ReferenceDataSetCreationProperties {
  dataStringComparisonBehavior?: Expressionable<('Ordinal' | 'OrdinalIgnoreCase')>;
  keyProperties: Expressionable<ReferenceDataSetKeyProperty[]>;
}

export interface ReferenceDataSetKeyProperty {
  name?: Expressionable<string>;
  type?: Expressionable<('String' | 'Double' | 'Bool' | 'DateTime')>;
}

export interface Sku {
  capacity: Expressionable<number>;
  name: Expressionable<('S1' | 'S2')>;
}

export namespace environments {
  export function create(name: Expressionable<string>, properties: EnvironmentCreationProperties, location: Expressionable<string>): ResourceDefinition<EnvironmentCreationProperties> {
    return {
      type: 'Microsoft.TimeSeriesInsights/environments',
      apiVersion: '2017-11-15',
      name: name,
      location,
      properties,
    };
  }
}
export namespace environments {
  export namespace accessPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AccessPolicyResourceProperties): ResourceDefinition<AccessPolicyResourceProperties> {
      return {
        type: 'Microsoft.TimeSeriesInsights/environments/accessPolicies',
        apiVersion: '2017-11-15',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace environments {
  export namespace eventSources {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EventHubEventSourceCreationProperties | IoTHubEventSourceCreationProperties, location: Expressionable<string>): ResourceDefinition<EventHubEventSourceCreationProperties | IoTHubEventSourceCreationProperties> {
      return {
        type: 'Microsoft.TimeSeriesInsights/environments/eventSources',
        apiVersion: '2017-11-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace environments {
  export namespace referenceDataSets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ReferenceDataSetCreationProperties, location: Expressionable<string>): ResourceDefinition<ReferenceDataSetCreationProperties> {
      return {
        type: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets',
        apiVersion: '2017-11-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}