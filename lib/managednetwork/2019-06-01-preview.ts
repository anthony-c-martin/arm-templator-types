import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ManagedNetworkGroupProperties {
  managementGroups?: Expressionable<ResourceId[]>;
  subnets?: Expressionable<ResourceId[]>;
  subscriptions?: Expressionable<ResourceId[]>;
  virtualNetworks?: Expressionable<ResourceId[]>;
}

export interface ManagedNetworkPeeringPolicyProperties {
  hub?: Expressionable<ResourceId>;
  mesh?: Expressionable<ResourceId[]>;
  spokes?: Expressionable<ResourceId[]>;
  type: Expressionable<('HubAndSpokeTopology' | 'MeshTopology')>;
}

export interface ManagedNetworkProperties {
  scope?: Expressionable<Scope>;
}

export interface ResourceId {
  id?: Expressionable<string>;
}

export interface Scope {
  managementGroups?: Expressionable<ResourceId[]>;
  subnets?: Expressionable<ResourceId[]>;
  subscriptions?: Expressionable<ResourceId[]>;
  virtualNetworks?: Expressionable<ResourceId[]>;
}

export interface ScopeAssignmentProperties {
  assignedManagedNetwork?: Expressionable<string>;
}

export namespace managedNetworks {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ManagedNetworksResource = ResourceDefinition<ManagedNetworkProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ManagedNetworkProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ManagedNetworksResource {
    return {
      type: 'Microsoft.ManagedNetwork/managedNetworks',
      apiVersion: '2019-06-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace managedNetworks {
  export namespace managedNetworkGroups {
    export interface AdditionalProps {
      kind?: Expressionable<('Connectivity')>;
    }
    
    export type ManagedNetworkGroupsResource = ResourceDefinition<ManagedNetworkGroupProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedNetworkGroupProperties, location?: Expressionable<string>, kind?: Expressionable<('Connectivity')>): ManagedNetworkGroupsResource {
      return {
        type: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups',
        apiVersion: '2019-06-01-preview',
        name: name,
        location,
        properties,
        additional: {
          kind,
        },
      };
    }
  }
}
export namespace managedNetworks {
  export namespace managedNetworkPeeringPolicies {
    export type ManagedNetworkPeeringPoliciesResource = ResourceDefinition<ManagedNetworkPeeringPolicyProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedNetworkPeeringPolicyProperties, location?: Expressionable<string>): ManagedNetworkPeeringPoliciesResource {
      return {
        type: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies',
        apiVersion: '2019-06-01-preview',
        name: name,
        location,
        properties,
      };
    }
  }
}