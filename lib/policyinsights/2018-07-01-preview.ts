// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-07-01-preview/Microsoft.PolicyInsights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: RemediationProperties, location: Expressionable<string>): ResourceDefinition<RemediationProperties> {
    return {
      type: 'Microsoft.PolicyInsights/remediations',
      apiVersion: '2018-07-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
