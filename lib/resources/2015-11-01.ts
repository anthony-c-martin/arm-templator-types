import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface DeploymentProperties {
  mode?: Expressionable<('Incremental' | 'Complete')>;
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
  export type DeploymentsResource = ResourceDefinition<DeploymentProperties>;
  
  export function create(name: Expressionable<string>, properties: DeploymentProperties): DeploymentsResource {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2015-11-01',
      name: [name],
      properties,
    };
  }
}