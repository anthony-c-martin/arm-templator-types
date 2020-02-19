import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface DebugSetting {
  detailLevel?: Expressionable<string>;
}

export interface DeploymentProperties {
  debugSetting?: Expressionable<DebugSetting>;
  mode: Expressionable<('Incremental' | 'Complete')>;
  parameters?: Expressionable<any>;
  parametersLink?: Expressionable<ParametersLink>;
  template?: Expressionable<any>;
  templateLink?: Expressionable<TemplateLink>;
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
  export function create(name: Expressionable<string>, properties: DeploymentProperties): ResourceDefinition<DeploymentProperties> {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2017-05-10',
      name: [name],
      properties,
    };
  }
}