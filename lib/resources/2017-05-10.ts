import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export type DeploymentsResource = ResourceDefinition<DeploymentProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: DeploymentProperties): DeploymentsResource {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2017-05-10',
      name: [name],
      properties,
    };
  }
}