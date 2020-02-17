// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-11-01/Microsoft.DataLakeStore.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface FirewallRule {
  name: Expressionable<string>;
  properties: Expressionable<any>;
}

export interface AddFirewallRule {
  name?: Expressionable<string>;
  properties: Expressionable<any>;
}

export interface TrustedIdProvider {
  name: Expressionable<string>;
  properties: Expressionable<any>;
}

export interface AddTrustedIdProvider {
  name?: Expressionable<string>;
  properties: Expressionable<any>;
}

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.DataLakeStore/accounts',
      apiVersion: '2016-11-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace accounts {
  export namespace firewallrules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddFirewallRule, location: Expressionable<string>): ResourceDefinition<AddFirewallRule> {
      return {
        type: 'Microsoft.DataLakeStore/accounts/firewallrules',
        apiVersion: '2016-11-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace trustedidproviders {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddTrustedIdProvider, location: Expressionable<string>): ResourceDefinition<AddTrustedIdProvider> {
      return {
        type: 'Microsoft.DataLakeStore/accounts/trustedidproviders',
        apiVersion: '2016-11-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
