// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-01-01-preview/Microsoft.ServiceBus.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Encryption {
  keySource?: Expressionable<('Microsoft.KeyVault')>;
  keyVaultProperties?: Expressionable<KeyVaultProperties>;
}

export interface Identity {
  principalId?: Expressionable<string>;
  tenantId?: Expressionable<string>;
  type?: Expressionable<('SystemAssigned')>;
}

export interface IpFilterRuleProperties {
  action?: Expressionable<('Accept' | 'Reject')>;
  filterName?: Expressionable<string>;
  ipMask?: Expressionable<string>;
}

export interface KeyVaultProperties {
  keyName?: Expressionable<string>;
  keyVaultUri?: Expressionable<string>;
}

export interface NetworkRuleSetProperties {
  defaultAction?: Expressionable<('Allow' | 'Deny')>;
  ipRules?: Expressionable<NWRuleSetIpRules[]>;
  virtualNetworkRules?: Expressionable<NWRuleSetVirtualNetworkRules[]>;
}

export interface NWRuleSetIpRules {
  action?: Expressionable<('Allow')>;
  ipMask?: Expressionable<string>;
}

export interface NWRuleSetVirtualNetworkRules {
  ignoreMissingVnetServiceEndpoint?: Expressionable<boolean>;
  subnet?: Expressionable<Subnet>;
}

export interface SBNamespaceProperties {
  encryption?: Expressionable<Encryption>;
  identity?: Expressionable<Identity>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface SBSku {
  capacity?: Expressionable<number>;
  name: Expressionable<('Basic' | 'Standard' | 'Premium')>;
  tier?: Expressionable<('Basic' | 'Standard' | 'Premium')>;
}

export interface Subnet {
  id?: Expressionable<string>;
}

export interface VirtualNetworkRuleProperties {
  virtualNetworkSubnetId?: Expressionable<string>;
}

export namespace namespaces {
  export function create(name: Expressionable<string>, properties: SBNamespaceProperties, location: Expressionable<string>): ResourceDefinition<SBNamespaceProperties> {
    return {
      type: 'Microsoft.ServiceBus/namespaces',
      apiVersion: '2018-01-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace ipfilterrules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IpFilterRuleProperties, location: Expressionable<string>): ResourceDefinition<IpFilterRuleProperties> {
      return {
        type: 'Microsoft.ServiceBus/namespaces/ipfilterrules',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace networkrulesets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties, location: Expressionable<string>): ResourceDefinition<NetworkRuleSetProperties> {
      return {
        type: 'Microsoft.ServiceBus/namespaces/networkrulesets',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace virtualnetworkrules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkRuleProperties, location: Expressionable<string>): ResourceDefinition<VirtualNetworkRuleProperties> {
      return {
        type: 'Microsoft.ServiceBus/namespaces/virtualnetworkrules',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
