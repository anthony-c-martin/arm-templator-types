import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export interface AddedResourceProps {
    sku?: Expressionable<SBSku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<SBNamespaceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: SBNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<SBSku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.ServiceBus/namespaces',
      apiVersion: '2018-01-01-preview',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace ipfilterrules {
    export type IpfilterrulesResource = ResourceDefinition<IpFilterRuleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IpFilterRuleProperties): IpfilterrulesResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/ipfilterrules',
        apiVersion: '2018-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace networkrulesets {
    export type NetworkrulesetsResource = ResourceDefinition<NetworkRuleSetProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties): NetworkrulesetsResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/networkrulesets',
        apiVersion: '2018-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace virtualnetworkrules {
    export type VirtualnetworkrulesResource = ResourceDefinition<VirtualNetworkRuleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkRuleProperties): VirtualnetworkrulesResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/virtualnetworkrules',
        apiVersion: '2018-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}