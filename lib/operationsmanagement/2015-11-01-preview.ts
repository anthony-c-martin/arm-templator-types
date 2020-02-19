import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ArmTemplateParameter {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ManagementConfigurationProperties {
  applicationId?: Expressionable<string>;
  parentResourceType: Expressionable<string>;
  parameters: Expressionable<ArmTemplateParameter[]>;
  template: Expressionable<any>;
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
  export function create(name: Expressionable<string>, properties: ManagementConfigurationProperties, location?: Expressionable<string>): ResourceDefinition<ManagementConfigurationProperties> {
    return {
      type: 'Microsoft.OperationsManagement/ManagementConfigurations',
      apiVersion: '2015-11-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace solutions {
  interface AdditionalProps {
    plan?: Expressionable<SolutionPlan>;
  }
  
  export function create(name: Expressionable<string>, properties: SolutionProperties, location?: Expressionable<string>, plan?: Expressionable<SolutionPlan>): ResourceDefinition<SolutionProperties> & AdditionalProps {
    return {
      type: 'Microsoft.OperationsManagement/solutions',
      apiVersion: '2015-11-01-preview',
      name: [name],
      location,
      plan,
      properties,
    };
  }
}