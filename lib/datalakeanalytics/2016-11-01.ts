import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AddDataLakeStoreProperties {
  suffix?: Expressionable<string>;
}

export interface AddDataLakeStoreWithAccountParameters {
  name: Expressionable<string>;
  properties?: Expressionable<AddDataLakeStoreProperties>;
}

export interface AddStorageAccountProperties {
  accessKey: Expressionable<string>;
  suffix?: Expressionable<string>;
}

export interface AddStorageAccountWithAccountParameters {
  name: Expressionable<string>;
  properties: Expressionable<AddStorageAccountProperties>;
}

export interface CreateComputePolicyWithAccountParameters {
  name: Expressionable<string>;
  properties: Expressionable<CreateOrUpdateComputePolicyProperties>;
}

export interface CreateDataLakeAnalyticsAccountProperties {
  computePolicies?: Expressionable<CreateComputePolicyWithAccountParameters[]>;
  dataLakeStoreAccounts: Expressionable<AddDataLakeStoreWithAccountParameters[]>;
  defaultDataLakeStoreAccount: Expressionable<string>;
  firewallAllowAzureIps?: Expressionable<('Enabled' | 'Disabled')>;
  firewallRules?: Expressionable<CreateFirewallRuleWithAccountParameters[]>;
  firewallState?: Expressionable<('Enabled' | 'Disabled')>;
  maxDegreeOfParallelism?: Expressionable<number>;
  maxDegreeOfParallelismPerJob?: Expressionable<number>;
  maxJobCount?: Expressionable<number>;
  minPriorityPerJob?: Expressionable<number>;
  newTier?: Expressionable<('Consumption' | 'Commitment_100AUHours' | 'Commitment_500AUHours' | 'Commitment_1000AUHours' | 'Commitment_5000AUHours' | 'Commitment_10000AUHours' | 'Commitment_50000AUHours' | 'Commitment_100000AUHours' | 'Commitment_500000AUHours')>;
  queryStoreRetention?: Expressionable<number>;
  storageAccounts?: Expressionable<AddStorageAccountWithAccountParameters[]>;
}

export interface CreateFirewallRuleWithAccountParameters {
  name: Expressionable<string>;
  properties: Expressionable<CreateOrUpdateFirewallRuleProperties>;
}

export interface CreateOrUpdateComputePolicyProperties {
  maxDegreeOfParallelismPerJob?: Expressionable<number>;
  minPriorityPerJob?: Expressionable<number>;
  objectId: Expressionable<string>;
  objectType: Expressionable<('User' | 'Group' | 'ServicePrincipal')>;
}

export interface CreateOrUpdateFirewallRuleProperties {
  endIpAddress: Expressionable<string>;
  startIpAddress: Expressionable<string>;
}

export namespace accounts {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<CreateDataLakeAnalyticsAccountProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: CreateDataLakeAnalyticsAccountProperties, location: Expressionable<string>, tags?: Expressionable<any>): AccountsResource {
    return {
      type: 'Microsoft.DataLakeAnalytics/accounts',
      apiVersion: '2016-11-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace accounts {
  export namespace computePolicies {
    export type ComputePoliciesResource = ResourceDefinition<CreateOrUpdateComputePolicyProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CreateOrUpdateComputePolicyProperties): ComputePoliciesResource {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/computePolicies',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace dataLakeStoreAccounts {
    export type DataLakeStoreAccountsResource = ResourceDefinition<AddDataLakeStoreProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddDataLakeStoreProperties): DataLakeStoreAccountsResource {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace firewallRules {
    export type FirewallRulesResource = ResourceDefinition<CreateOrUpdateFirewallRuleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CreateOrUpdateFirewallRuleProperties): FirewallRulesResource {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/firewallRules',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace storageAccounts {
    export type StorageAccountsResource = ResourceDefinition<AddStorageAccountProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddStorageAccountProperties): StorageAccountsResource {
      return {
        type: 'Microsoft.DataLakeAnalytics/accounts/storageAccounts',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}