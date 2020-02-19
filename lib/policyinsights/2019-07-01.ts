import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface RemediationFilters {
  locations?: Expressionable<string[]>;
}

export interface RemediationProperties {
  filters?: Expressionable<RemediationFilters>;
  policyAssignmentId?: Expressionable<string>;
  policyDefinitionReferenceId?: Expressionable<string>;
  resourceDiscoveryMode?: Expressionable<('ExistingNonCompliant' | 'ReEvaluateCompliance')>;
}

export namespace remediations {
  export function create(name: Expressionable<string>, properties: RemediationProperties): ResourceDefinition<RemediationProperties> {
    return {
      type: 'Microsoft.PolicyInsights/remediations',
      apiVersion: '2019-07-01',
      name: [name],
      properties,
    };
  }
}