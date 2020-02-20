import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Identity {
  type?: Expressionable<('SystemAssigned' | 'None')>;
}

export interface PolicyAssignmentProperties {
  displayName?: Expressionable<string>;
  policyDefinitionId?: Expressionable<string>;
  scope?: Expressionable<string>;
  notScopes?: Expressionable<string[]>;
  parameters?: Expressionable<any>;
  description?: Expressionable<string>;
  metadata?: Expressionable<any>;
}

export interface PolicyDefinitionProperties {
  policyType?: Expressionable<('NotSpecified' | 'BuiltIn' | 'Custom')>;
  mode?: Expressionable<string>;
  displayName?: Expressionable<string>;
  description?: Expressionable<string>;
  policyRule: Expressionable<any>;
  metadata?: Expressionable<any>;
  parameters?: Expressionable<any>;
}

export interface PolicyDefinitionReference {
  policyDefinitionId?: Expressionable<string>;
  parameters?: Expressionable<any>;
}

export interface PolicySetDefinitionProperties {
  policyType?: Expressionable<('NotSpecified' | 'BuiltIn' | 'Custom')>;
  displayName?: Expressionable<string>;
  description?: Expressionable<string>;
  metadata?: Expressionable<any>;
  parameters?: Expressionable<any>;
  policyDefinitions: Expressionable<PolicyDefinitionReference[]>;
}

export interface PolicySku {
  name: Expressionable<string>;
  tier?: Expressionable<string>;
}

export namespace policyAssignments {
  export interface AddedResourceProps {
    sku?: Expressionable<PolicySku>;
    identity?: Expressionable<Identity>;
  }
  
  export type PolicyAssignmentsResource = ResourceDefinition<PolicyAssignmentProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: PolicyAssignmentProperties, location?: Expressionable<string>, identity?: Expressionable<Identity>, sku?: Expressionable<PolicySku>): PolicyAssignmentsResource {
    return {
      type: 'Microsoft.Authorization/policyAssignments',
      apiVersion: '2019-01-01',
      name: [name],
      location,
      identity,
      sku,
      properties,
    };
  }
}
export namespace policyDefinitions {
  export type PolicyDefinitionsResource = ResourceDefinition<PolicyDefinitionProperties>;
  
  export function create(name: Expressionable<string>, properties: PolicyDefinitionProperties): PolicyDefinitionsResource {
    return {
      type: 'Microsoft.Authorization/policyDefinitions',
      apiVersion: '2019-01-01',
      name: [name],
      properties,
    };
  }
}
export namespace policySetDefinitions {
  export type PolicySetDefinitionsResource = ResourceDefinition<PolicySetDefinitionProperties>;
  
  export function create(name: Expressionable<string>, properties: PolicySetDefinitionProperties): PolicySetDefinitionsResource {
    return {
      type: 'Microsoft.Authorization/policySetDefinitions',
      apiVersion: '2019-01-01',
      name: [name],
      properties,
    };
  }
}