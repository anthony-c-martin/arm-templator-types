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
  export type ManagementConfigurationsResource = ResourceDefinition<ManagementConfigurationProperties>;
  
  export function create(name: Expressionable<string>, properties: ManagementConfigurationProperties, location?: Expressionable<string>): ManagementConfigurationsResource {
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
  export interface AddedResourceProps {
    plan?: Expressionable<SolutionPlan>;
  }
  
  export type SolutionsResource = ResourceDefinition<SolutionProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: SolutionProperties, location?: Expressionable<string>, plan?: Expressionable<SolutionPlan>): SolutionsResource {
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