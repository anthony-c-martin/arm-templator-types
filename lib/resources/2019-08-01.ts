import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: DeploymentProperties, location?: Expressionable<string>): ResourceDefinition<DeploymentProperties> {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2019-08-01',
      name: name,
      location,
      properties,
    };
  }
}