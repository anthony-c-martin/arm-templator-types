import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type CompilationjobsResource = ResourceDefinition<DscCompilationJobCreateProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DscCompilationJobCreateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): CompilationjobsResource {
      return {
        type: 'Microsoft.Automation/automationAccounts/compilationjobs',
        apiVersion: '2018-01-15',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace automationAccounts {
  export namespace nodeConfigurations {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type NodeConfigurationsResource = ResourceDefinition<DscNodeConfigurationCreateOrUpdateParametersProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DscNodeConfigurationCreateOrUpdateParametersProperties, tags?: Expressionable<any>): NodeConfigurationsResource {
      return {
        type: 'Microsoft.Automation/automationAccounts/nodeConfigurations',
        apiVersion: '2018-01-15',
        name: name,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}