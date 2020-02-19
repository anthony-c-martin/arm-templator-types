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
  mode?: Expressionable<('NotSpecified' | 'Indexed' | 'All')>;
  displayName?: Expressionable<string>;
  description?: Expressionable<string>;
  policyRule?: Expressionable<any>;
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
  interface AdditionalProps {
    sku?: Expressionable<PolicySku>;
    identity?: Expressionable<Identity>;
  }
  
  export function create(name: Expressionable<string>, properties: PolicyAssignmentProperties, location?: Expressionable<string>, identity?: Expressionable<Identity>, sku?: Expressionable<PolicySku>): ResourceDefinition<PolicyAssignmentProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Authorization/policyAssignments',
      apiVersion: '2018-05-01',
      name: [name],
      location,
      identity,
      sku,
      properties,
    };
  }
}
export namespace policyDefinitions {
  export function create(name: Expressionable<string>, properties: PolicyDefinitionProperties): ResourceDefinition<PolicyDefinitionProperties> {
    return {
      type: 'Microsoft.Authorization/policyDefinitions',
      apiVersion: '2018-05-01',
      name: [name],
      properties,
    };
  }
}
export namespace policySetDefinitions {
  export function create(name: Expressionable<string>, properties: PolicySetDefinitionProperties): ResourceDefinition<PolicySetDefinitionProperties> {
    return {
      type: 'Microsoft.Authorization/policySetDefinitions',
      apiVersion: '2018-05-01',
      name: [name],
      properties,
    };
  }
}