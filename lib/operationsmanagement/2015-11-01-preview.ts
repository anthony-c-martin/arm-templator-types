// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-11-01-preview/Microsoft.OperationsManagement.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ArmTemplateParameter {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ManagementConfigurationProperties {
  applicationId?: Expressionable<string>;
  parentResourceType: Expressionable<string>;
  parameters: Expressionable<ArmTemplateParameter[]>;
}

export interface SolutionPlan {
  name?: Expressionable<string>;
  publisher?: Expressionable<string>;
  promotionCode?: Expressionable<string>;
  product?: Expressionable<string>;
}

export interface SolutionProperties {
  workspaceResourceId: Expressionable<string>;
  containedResources?: Expressionable<string[]>;
  referencedResources?: Expressionable<string[]>;
}

export namespace ManagementConfigurations {
  export function create(name: Expressionable<string>, properties: ManagementConfigurationProperties, location: Expressionable<string>): ResourceDefinition<ManagementConfigurationProperties> {
    return {
      type: 'Microsoft.OperationsManagement/ManagementConfigurations',
      apiVersion: '2015-11-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace solutions {
  export function create(name: Expressionable<string>, properties: SolutionProperties, location: Expressionable<string>): ResourceDefinition<SolutionProperties> {
    return {
      type: 'Microsoft.OperationsManagement/solutions',
      apiVersion: '2015-11-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
