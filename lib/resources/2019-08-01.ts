import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface DebugSetting {
  detailLevel?: Expressionable<string>;
}

export interface DeploymentProperties {
  debugSetting?: Expressionable<DebugSetting>;
  mode: Expressionable<('Incremental' | 'Complete')>;
  onErrorDeployment?: Expressionable<OnErrorDeployment>;
  parameters?: Expressionable<any>;
  parametersLink?: Expressionable<ParametersLink>;
  template?: Expressionable<any>;
  templateLink?: Expressionable<TemplateLink>;
}

export interface OnErrorDeployment {
  deploymentName?: Expressionable<string>;
  type?: Expressionable<('LastSuccessful' | 'SpecificDeployment')>;
}

export interface ParametersLink {
  contentVersion?: Expressionable<string>;
  uri: Expressionable<string>;
}

export interface TemplateLink {
  contentVersion?: Expressionable<string>;
  uri: Expressionable<string>;
}

export namespace deployments {
  export type DeploymentsResource = ResourceDefinition<DeploymentProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: DeploymentProperties, location?: Expressionable<string>): DeploymentsResource {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2019-08-01',
      name: [name],
      location,
      properties,
    };
  }
}