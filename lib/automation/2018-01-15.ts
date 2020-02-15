// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-01-15/Microsoft.Automation.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ContentHash {
  algorithm: Expressionable<string>;
  value: Expressionable<string>;
}

export interface ContentSource {
  hash?: Expressionable<ContentHash>;
  type?: Expressionable<('embeddedContent' | 'uri')>;
  value?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface DscCompilationJobCreateProperties {
  configuration: Expressionable<DscConfigurationAssociationProperty>;
  incrementNodeConfigurationBuild?: Expressionable<boolean>;
  parameters?: Expressionable<any>;
}

export interface DscConfigurationAssociationProperty {
  name?: Expressionable<string>;
}

export interface DscNodeConfigurationCreateOrUpdateParametersProperties {
  configuration: Expressionable<DscConfigurationAssociationProperty>;
  incrementNodeConfigurationBuild?: Expressionable<boolean>;
  source: Expressionable<ContentSource>;
}

export namespace automationAccounts {
  export namespace compilationjobs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DscCompilationJobCreateProperties, location: Expressionable<string>): ResourceDefinition<DscCompilationJobCreateProperties> {
      return {
        type: 'Microsoft.Automation/automationAccounts/compilationjobs',
        apiVersion: '2018-01-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace automationAccounts {
  export namespace nodeConfigurations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DscNodeConfigurationCreateOrUpdateParametersProperties, location: Expressionable<string>): ResourceDefinition<DscNodeConfigurationCreateOrUpdateParametersProperties> {
      return {
        type: 'Microsoft.Automation/automationAccounts/nodeConfigurations',
        apiVersion: '2018-01-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
