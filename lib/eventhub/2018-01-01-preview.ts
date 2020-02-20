import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface EHNamespaceProperties {
  clusterArmId?: Expressionable<string>;
  encryption?: Expressionable<Encryption>;
  identity?: Expressionable<Identity>;
  isAutoInflateEnabled?: Expressionable<boolean>;
  kafkaEnabled?: Expressionable<boolean>;
  maximumThroughputUnits?: Expressionable<number>;
  zoneRedundant?: Expressionable<boolean>;
}

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

export interface Sku {
  capacity?: Expressionable<number>;
  name: Expressionable<('Dedicated' | 'Basic' | 'Standard')>;
  tier?: Expressionable<('Basic' | 'Standard')>;
}

export interface Subnet {
  id?: Expressionable<string>;
}

export interface VirtualNetworkRuleProperties {
  virtualNetworkSubnetId?: Expressionable<string>;
}

export namespace clusters {
  export type ClustersResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): ClustersResource {
    return {
      type: 'Microsoft.EventHub/clusters',
      apiVersion: '2018-01-01-preview',
      name: [name],
      properties,
    };
  }
}
export namespace namespaces {
  export interface AddedResourceProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<EHNamespaceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: EHNamespaceProperties, location?: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.EventHub/namespaces',
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
        type: 'Microsoft.EventHub/namespaces/ipfilterrules',
        apiVersion: '2018-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace networkRuleSets {
    export type NetworkRuleSetsResource = ResourceDefinition<NetworkRuleSetProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties): NetworkRuleSetsResource {
      return {
        type: 'Microsoft.EventHub/namespaces/networkRuleSets',
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
        type: 'Microsoft.EventHub/namespaces/virtualnetworkrules',
        apiVersion: '2018-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}