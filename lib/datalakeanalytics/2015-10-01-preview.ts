// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-10-01-preview/Microsoft.DataLakeAnalytics.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface DataLakeAnalyticsAccountProperties {
  dataLakeStoreAccounts?: Expressionable<DataLakeStoreAccountInfo[]>;
  defaultDataLakeStoreAccount?: Expressionable<string>;
  maxDegreeOfParallelism?: Expressionable<number>;
  maxJobCount?: Expressionable<number>;
  storageAccounts?: Expressionable<StorageAccountInfo[]>;
}

export interface DataLakeStoreAccountInfo {
  name: Expressionable<string>;
  properties?: Expressionable<DataLakeStoreAccountInfoProperties>;
}

export interface DataLakeStoreAccountInfoProperties {
  suffix?: Expressionable<string>;
}

export interface StorageAccountInfo {
  name: Expressionable<string>;
  properties: Expressionable<StorageAccountProperties>;
}

export interface StorageAccountProperties {
  accessKey: Expressionable<string>;
  suffix?: Expressionable<string>;
}

export namespace accounts {
  export function create(name: Expressionable<string>, properties: DataLakeAnalyticsAccountProperties, location: Expressionable<string>): ResourceDefinition<DataLakeAnalyticsAccountProperties> {
    return {
      type: 'Microsoft.DataLakeAnalytics/accounts',
      apiVersion: '2015-10-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace accounts {
  export namespace DataLakeStoreAccounts {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DataLakeStoreAccountInfoProperties, location: Expressionable<string>): ResourceDefinition<DataLakeStoreAccountInfoProperties> {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts',
        apiVersion: '2015-10-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace StorageAccounts {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageAccountProperties, location: Expressionable<string>): ResourceDefinition<StorageAccountProperties> {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/StorageAccounts',
        apiVersion: '2015-10-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
