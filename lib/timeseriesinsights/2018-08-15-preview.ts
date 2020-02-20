import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AccessPolicyResourceProperties {
  description?: Expressionable<string>;
  principalObjectId?: Expressionable<string>;
  roles?: Expressionable<('Reader' | 'Contributor')[]>;
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

export interface LongTermEnvironmentCreateOrUpdateParameters {
  kind: Expressionable<('LongTerm')>;
  properties: Expressionable<LongTermEnvironmentCreationProperties>;
}

export interface LongTermEnvironmentCreationProperties {
  storageConfiguration: Expressionable<LongTermStorageConfigurationInput>;
  timeSeriesIdProperties: Expressionable<TimeSeriesIdProperty[]>;
  warmStoreConfiguration?: Expressionable<WarmStoreConfigurationProperties>;
}

export interface LongTermStorageConfigurationInput {
  accountName: Expressionable<string>;
  managementKey: Expressionable<string>;
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
  name: Expressionable<('S1' | 'S2' | 'P1' | 'L1')>;
}

export interface StandardEnvironmentCreateOrUpdateParameters {
  kind: Expressionable<('Standard')>;
  properties: Expressionable<StandardEnvironmentCreationProperties>;
}

export interface StandardEnvironmentCreationProperties {
  dataRetentionTime: Expressionable<string>;
  partitionKeyProperties?: Expressionable<TimeSeriesIdProperty[]>;
  storageLimitExceededBehavior?: Expressionable<('PurgeOldData' | 'PauseIngress')>;
}

export interface TimeSeriesIdProperty {
  name?: Expressionable<string>;
  type?: Expressionable<('String')>;
}

export interface WarmStoreConfigurationProperties {
  dataRetention: Expressionable<string>;
}

export namespace environments {
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type EnvironmentsResource = ResourceDefinition<StandardEnvironmentCreationProperties | LongTermEnvironmentCreationProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: StandardEnvironmentCreationProperties | LongTermEnvironmentCreationProperties, location: Expressionable<string>, sku: Expressionable<Sku>, tags?: Expressionable<any>): EnvironmentsResource {
    return {
      type: 'Microsoft.TimeSeriesInsights/environments',
      apiVersion: '2018-08-15-preview',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace environments {
  export namespace accessPolicies {
    export type AccessPoliciesResource = ResourceDefinition<AccessPolicyResourceProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AccessPolicyResourceProperties): AccessPoliciesResource {
      return {
        type: 'Microsoft.TimeSeriesInsights/environments/accessPolicies',
        apiVersion: '2018-08-15-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace environments {
  export namespace eventSources {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type EventSourcesResource = ResourceDefinition<EventHubEventSourceCreationProperties | IoTHubEventSourceCreationProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EventHubEventSourceCreationProperties | IoTHubEventSourceCreationProperties, location: Expressionable<string>, tags?: Expressionable<any>): EventSourcesResource {
      return {
        type: 'Microsoft.TimeSeriesInsights/environments/eventSources',
        apiVersion: '2018-08-15-preview',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace environments {
  export namespace referenceDataSets {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type ReferenceDataSetsResource = ResourceDefinition<ReferenceDataSetCreationProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ReferenceDataSetCreationProperties, location: Expressionable<string>, tags?: Expressionable<any>): ReferenceDataSetsResource {
      return {
        type: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets',
        apiVersion: '2018-08-15-preview',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}