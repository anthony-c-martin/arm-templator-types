// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-01-01-preview/Microsoft.EventHub.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.EventHub/clusters',
      apiVersion: '2018-01-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace namespaces {
  export function create(name: Expressionable<string>, properties: EHNamespaceProperties, location: Expressionable<string>): ResourceDefinition<EHNamespaceProperties> {
    return {
      type: 'Microsoft.EventHub/namespaces',
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
        type: 'Microsoft.EventHub/namespaces/ipfilterrules',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace networkRuleSets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties, location: Expressionable<string>): ResourceDefinition<NetworkRuleSetProperties> {
      return {
        type: 'Microsoft.EventHub/namespaces/networkRuleSets',
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
        type: 'Microsoft.EventHub/namespaces/virtualnetworkrules',
        apiVersion: '2018-01-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
