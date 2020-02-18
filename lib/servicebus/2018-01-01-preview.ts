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
  interface AdditionalProps {
    sku?: Expressionable<SBSku>;
  }
  
  export function create(name: Expressionable<string>, properties: SBNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<SBSku>): ResourceDefinition<SBNamespaceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.ServiceBus/namespaces',
      apiVersion: '2018-01-01-preview',
      name: name,
      location,
      sku,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace ipfilterrules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IpFilterRuleProperties): ResourceDefinition<IpFilterRuleProperties> {
      return {
        type: 'Microsoft.ServiceBus/namespaces/ipfilterrules',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace networkrulesets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties): ResourceDefinition<NetworkRuleSetProperties> {
      return {
        type: 'Microsoft.ServiceBus/namespaces/networkrulesets',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace virtualnetworkrules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkRuleProperties): ResourceDefinition<VirtualNetworkRuleProperties> {
      return {
        type: 'Microsoft.ServiceBus/namespaces/virtualnetworkrules',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}