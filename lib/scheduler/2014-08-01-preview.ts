// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2014-08-01-preview/Microsoft.Scheduler.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Scheduler/jobCollections',
      apiVersion: '2014-08-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace jobCollections {
  export namespace jobs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Scheduler/jobCollections/jobs',
        apiVersion: '2014-08-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
