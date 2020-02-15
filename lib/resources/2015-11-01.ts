// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-11-01/Microsoft.Resources.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: DeploymentProperties, location: Expressionable<string>): ResourceDefinition<DeploymentProperties> {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2015-11-01',
      name: name,
      location,
      properties,
    };
  }
}
