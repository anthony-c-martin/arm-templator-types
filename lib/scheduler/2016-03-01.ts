import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface HttpAuthentication {
  type?: Expressionable<('NotSpecified' | 'ClientCertificate' | 'ActiveDirectoryOAuth' | 'Basic')>;
}

export interface HttpRequest {
  authentication?: Expressionable<HttpAuthentication>;
  uri?: Expressionable<string>;
  method?: Expressionable<string>;
  body?: Expressionable<string>;
}

export interface JobAction {
  type?: Expressionable<('Http' | 'Https' | 'StorageQueue' | 'ServiceBusQueue' | 'ServiceBusTopic')>;
  request?: Expressionable<HttpRequest>;
  queueMessage?: Expressionable<StorageQueueMessage>;
  serviceBusQueueMessage?: Expressionable<ServiceBusQueueMessage>;
  serviceBusTopicMessage?: Expressionable<ServiceBusTopicMessage>;
  retryPolicy?: Expressionable<RetryPolicy>;
  errorAction?: Expressionable<JobErrorAction>;
}

export interface JobCollectionProperties {
  sku?: Expressionable<Sku>;
  state?: Expressionable<('Enabled' | 'Disabled' | 'Suspended' | 'Deleted')>;
  quota?: Expressionable<JobCollectionQuota>;
}

export interface JobCollectionQuota {
  maxJobCount?: Expressionable<number>;
  maxJobOccurrence?: Expressionable<number>;
  maxRecurrence?: Expressionable<JobMaxRecurrence>;
}

export interface JobErrorAction {
  type?: Expressionable<('Http' | 'Https' | 'StorageQueue' | 'ServiceBusQueue' | 'ServiceBusTopic')>;
  request?: Expressionable<HttpRequest>;
  queueMessage?: Expressionable<StorageQueueMessage>;
  serviceBusQueueMessage?: Expressionable<ServiceBusQueueMessage>;
  serviceBusTopicMessage?: Expressionable<ServiceBusTopicMessage>;
  retryPolicy?: Expressionable<RetryPolicy>;
}

export interface JobMaxRecurrence {
  frequency?: Expressionable<('Minute' | 'Hour' | 'Day' | 'Week' | 'Month')>;
  interval?: Expressionable<number>;
}

export interface JobProperties {
  startTime?: Expressionable<string>;
  action?: Expressionable<JobAction>;
  recurrence?: Expressionable<JobRecurrence>;
  state?: Expressionable<('Enabled' | 'Disabled' | 'Faulted' | 'Completed')>;
}

export interface JobRecurrence {
  frequency?: Expressionable<('Minute' | 'Hour' | 'Day' | 'Week' | 'Month')>;
  interval?: Expressionable<number>;
  count?: Expressionable<number>;
  endTime?: Expressionable<string>;
  schedule?: Expressionable<JobRecurrenceSchedule>;
}

export interface JobRecurrenceSchedule {
  weekDays?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')>;
  hours?: Expressionable<number[]>;
  minutes?: Expressionable<number[]>;
  monthDays?: Expressionable<number[]>;
  monthlyOccurrences?: Expressionable<JobRecurrenceScheduleMonthlyOccurrence[]>;
}

export interface JobRecurrenceScheduleMonthlyOccurrence {
  day?: Expressionable<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')>;
  Occurrence?: Expressionable<number>;
}

export interface RetryPolicy {
  retryType?: Expressionable<('None' | 'Fixed')>;
  retryInterval?: Expressionable<string>;
  retryCount?: Expressionable<number>;
}

export interface ServiceBusAuthentication {
  sasKey?: Expressionable<string>;
  sasKeyName?: Expressionable<string>;
  type?: Expressionable<('NotSpecified' | 'SharedAccessKey')>;
}

export interface ServiceBusBrokeredMessageProperties {
  contentType?: Expressionable<string>;
  correlationId?: Expressionable<string>;
  forcePersistence?: Expressionable<boolean>;
  label?: Expressionable<string>;
  messageId?: Expressionable<string>;
  partitionKey?: Expressionable<string>;
  replyTo?: Expressionable<string>;
  replyToSessionId?: Expressionable<string>;
  scheduledEnqueueTimeUtc?: Expressionable<string>;
  sessionId?: Expressionable<string>;
  timeToLive?: Expressionable<string>;
  to?: Expressionable<string>;
  viaPartitionKey?: Expressionable<string>;
}

export interface ServiceBusQueueMessage {
  authentication?: Expressionable<ServiceBusAuthentication>;
  brokeredMessageProperties?: Expressionable<ServiceBusBrokeredMessageProperties>;
  message?: Expressionable<string>;
  namespace?: Expressionable<string>;
  transportType?: Expressionable<('NotSpecified' | 'NetMessaging' | 'AMQP')>;
  queueName?: Expressionable<string>;
}

export interface ServiceBusTopicMessage {
  authentication?: Expressionable<ServiceBusAuthentication>;
  brokeredMessageProperties?: Expressionable<ServiceBusBrokeredMessageProperties>;
  message?: Expressionable<string>;
  namespace?: Expressionable<string>;
  transportType?: Expressionable<('NotSpecified' | 'NetMessaging' | 'AMQP')>;
  topicPath?: Expressionable<string>;
}

export interface Sku {
  name?: Expressionable<('Standard' | 'Free' | 'P10Premium' | 'P20Premium')>;
}

export interface StorageQueueMessage {
  storageAccount?: Expressionable<string>;
  queueName?: Expressionable<string>;
  sasToken?: Expressionable<string>;
  message?: Expressionable<string>;
}

export namespace jobCollections {
  export type JobCollectionsResource = ResourceDefinition<JobCollectionProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: JobCollectionProperties, location?: Expressionable<string>): JobCollectionsResource {
    return {
      type: 'Microsoft.Scheduler/jobCollections',
      apiVersion: '2016-03-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace jobCollections {
  export namespace jobs {
    export type JobsResource = ResourceDefinition<JobProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: JobProperties): JobsResource {
      return {
        type: 'Microsoft.Scheduler/jobCollections/jobs',
        apiVersion: '2016-03-01',
        name: name,
        properties,
      };
    }
  }
}