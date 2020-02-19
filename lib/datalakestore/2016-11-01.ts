import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  interface AdditionalProps {
    identity?: Expressionable<any>;
  }
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, identity?: Expressionable<any>): ResourceDefinition<any> & AdditionalProps {
    return {
      type: 'Microsoft.DataLakeStore/accounts',
      apiVersion: '2016-11-01',
      name: [name],
      location,
      identity,
      properties,
    };
  }
}
export namespace accounts {
  export namespace firewallrules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddFirewallRule): ResourceDefinition<AddFirewallRule> {
      return {
        type: 'Microsoft.DataLakeStore/accounts/firewallrules',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace trustedidproviders {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddTrustedIdProvider): ResourceDefinition<AddTrustedIdProvider> {
      return {
        type: 'Microsoft.DataLakeStore/accounts/trustedidproviders',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}