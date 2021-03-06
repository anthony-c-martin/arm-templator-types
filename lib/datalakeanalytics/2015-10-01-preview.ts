import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<DataLakeAnalyticsAccountProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DataLakeAnalyticsAccountProperties, location?: Expressionable<string>, tags?: Expressionable<any>): AccountsResource {
    return {
      type: 'Microsoft.DataLakeAnalytics/accounts',
      apiVersion: '2015-10-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace accounts {
  export namespace DataLakeStoreAccounts {
    export type DataLakeStoreAccountsResource = ResourceDefinition<DataLakeStoreAccountInfoProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DataLakeStoreAccountInfoProperties): DataLakeStoreAccountsResource {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts',
        apiVersion: '2015-10-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace StorageAccounts {
    export type StorageAccountsResource = ResourceDefinition<StorageAccountProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageAccountProperties): StorageAccountsResource {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/StorageAccounts',
        apiVersion: '2015-10-01-preview',
        name: name,
        properties,
      };
    }
  }
}