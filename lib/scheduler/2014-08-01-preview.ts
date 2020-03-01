import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface httpActionRequest {
  uri: Expressionable<string>;
  method: Expressionable<any>;
  body?: Expressionable<string>;
  authentication?: Expressionable<any | any | any>;
}

export interface storageQueueActionQueueMessage {
  storageAccount?: Expressionable<string>;
  queueName?: Expressionable<string>;
  sasToken?: Expressionable<string>;
  message?: Expressionable<string>;
}

export interface errorAction {
}

export interface retryPolicy {
}

export interface recurrenceFrequency {
  frequency?: Expressionable<('Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Year')>;
  interval?: Expressionable<number>;
}

export interface recurrence {
}

export interface dayOfWeek {
}

export interface UTC {
}

export namespace jobCollections {
  export type JobCollectionsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): JobCollectionsResource {
    return {
      type: 'Microsoft.Scheduler/jobCollections',
      apiVersion: '2014-08-01-preview',
      name: [name],
      properties,
    };
  }
}
export namespace jobCollections {
  export namespace jobs {
    export type JobsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): JobsResource {
      return {
        type: 'Microsoft.Scheduler/jobCollections/jobs',
        apiVersion: '2014-08-01-preview',
        name: name,
        properties,
      };
    }
  }
}