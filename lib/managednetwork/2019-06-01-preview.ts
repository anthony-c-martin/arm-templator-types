import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: ManagedNetworkProperties, location: Expressionable<string>): ResourceDefinition<ManagedNetworkProperties> {
    return {
      type: 'Microsoft.ManagedNetwork/managedNetworks',
      apiVersion: '2019-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace managedNetworks {
  export namespace managedNetworkGroups {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedNetworkGroupProperties, location: Expressionable<string>): ResourceDefinition<ManagedNetworkGroupProperties> {
      return {
        type: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups',
        apiVersion: '2019-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managedNetworks {
  export namespace managedNetworkPeeringPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedNetworkPeeringPolicyProperties, location: Expressionable<string>): ResourceDefinition<ManagedNetworkPeeringPolicyProperties> {
      return {
        type: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies',
        apiVersion: '2019-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}