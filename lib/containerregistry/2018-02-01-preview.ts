import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface BuildArgument {
  isSecret?: Expressionable<boolean>;
  name: Expressionable<string>;
  type: Expressionable<('DockerBuildArgument')>;
  value: Expressionable<string>;
}

export interface BuildStepProperties {
}

export interface BuildTaskProperties {
  alias: Expressionable<string>;
  platform: Expressionable<PlatformProperties>;
  sourceRepository: Expressionable<SourceRepositoryProperties>;
  status?: Expressionable<('Disabled' | 'Enabled')>;
  timeout?: Expressionable<number>;
}

export interface DockerBuildStep {
  baseImageTrigger?: Expressionable<('All' | 'Runtime' | 'None')>;
  branch?: Expressionable<string>;
  buildArguments?: Expressionable<BuildArgument[]>;
  contextPath?: Expressionable<string>;
  dockerFilePath?: Expressionable<string>;
  imageNames?: Expressionable<string[]>;
  isPushEnabled?: Expressionable<boolean>;
  noCache?: Expressionable<boolean>;
  type: Expressionable<('Docker')>;
}

export interface PlatformProperties {
  cpu?: Expressionable<number>;
  osType: Expressionable<('Windows' | 'Linux')>;
}

export interface SourceControlAuthInfo {
  expiresIn?: Expressionable<number>;
  refreshToken?: Expressionable<string>;
  scope?: Expressionable<string>;
  token: Expressionable<string>;
  tokenType?: Expressionable<('PAT' | 'OAuth')>;
}

export interface SourceRepositoryProperties {
  isCommitTriggerEnabled?: Expressionable<boolean>;
  repositoryUrl: Expressionable<string>;
  sourceControlAuthProperties?: Expressionable<SourceControlAuthInfo>;
  sourceControlType: Expressionable<('Github' | 'VisualStudioTeamService')>;
}

export namespace registries {
  export namespace buildTasks {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type BuildTasksResource = ResourceDefinition<BuildTaskProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BuildTaskProperties, location: Expressionable<string>, tags?: Expressionable<any>): BuildTasksResource {
      return {
        type: 'Microsoft.ContainerRegistry/registries/buildTasks',
        apiVersion: '2018-02-01-preview',
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
export namespace registries {
  export namespace buildTasks {
    export namespace steps {
      export type StepsResource = ResourceDefinition<BuildStepProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BuildStepProperties): StepsResource {
        return {
          type: 'Microsoft.ContainerRegistry/registries/buildTasks/steps',
          apiVersion: '2018-02-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}