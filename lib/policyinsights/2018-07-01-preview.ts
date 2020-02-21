import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface RemediationDeploymentSummary {
  failedDeployments?: Expressionable<number>;
  successfulDeployments?: Expressionable<number>;
  totalDeployments?: Expressionable<number>;
}

export interface RemediationFilters {
  locations?: Expressionable<string[]>;
}

export interface RemediationProperties {
  deploymentStatus?: Expressionable<RemediationDeploymentSummary>;
  filters?: Expressionable<RemediationFilters>;
  policyAssignmentId?: Expressionable<string>;
  policyDefinitionReferenceId?: Expressionable<string>;
}

export namespace remediations {
  export type RemediationsResource = ResourceDefinition<RemediationProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: RemediationProperties): RemediationsResource {
    return {
      type: 'Microsoft.PolicyInsights/remediations',
      apiVersion: '2018-07-01-preview',
      name: [name],
      properties,
    };
  }
}