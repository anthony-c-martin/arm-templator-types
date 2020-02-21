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
  export interface AdditionalProps {
    identity?: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, identity?: Expressionable<any>): AccountsResource {
    return {
      type: 'Microsoft.DataLakeStore/accounts',
      apiVersion: '2016-11-01',
      name: [name],
      location,
      properties,
      additional: {
        identity,
      },
    };
  }
}
export namespace accounts {
  export namespace firewallrules {
    export type FirewallrulesResource = ResourceDefinition<AddFirewallRule, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddFirewallRule): FirewallrulesResource {
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
    export type TrustedidprovidersResource = ResourceDefinition<AddTrustedIdProvider, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AddTrustedIdProvider): TrustedidprovidersResource {
      return {
        type: 'Microsoft.DataLakeStore/accounts/trustedidproviders',
        apiVersion: '2016-11-01',
        name: name,
        properties,
      };
    }
  }
}