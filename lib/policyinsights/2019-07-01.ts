// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-07-01/Microsoft.PolicyInsights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: RemediationProperties, location: Expressionable<string>): ResourceDefinition<RemediationProperties> {
    return {
      type: 'Microsoft.PolicyInsights/remediations',
      apiVersion: '2019-07-01',
      name: name,
      location,
      properties,
    };
  }
}
