import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AgentProperties {
  cpu?: Expressionable<number>;
}

export interface Argument {
  isSecret?: Expressionable<boolean>;
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface AuthInfo {
  expiresIn?: Expressionable<number>;
  refreshToken?: Expressionable<string>;
  scope?: Expressionable<string>;
  token: Expressionable<string>;
  tokenType: Expressionable<('PAT' | 'OAuth')>;
}

export interface BaseImageTrigger {
  baseImageTriggerType: Expressionable<('All' | 'Runtime')>;
  name: Expressionable<string>;
  status?: Expressionable<('Disabled' | 'Enabled')>;
}

export interface Credentials {
  customRegistries?: Expressionable<any>;
  sourceRegistry?: Expressionable<SourceRegistryCredentials>;
}

export interface CustomRegistryCredentials {
  password?: Expressionable<SecretObject>;
  userName?: Expressionable<SecretObject>;
}

export interface DockerBuildStep {
  arguments?: Expressionable<Argument[]>;
  dockerFilePath: Expressionable<string>;
  imageNames?: Expressionable<string[]>;
  isPushEnabled?: Expressionable<boolean>;
  noCache?: Expressionable<boolean>;
  target?: Expressionable<string>;
  type: Expressionable<('Docker')>;
}

export interface EncodedTaskStep {
  encodedTaskContent: Expressionable<string>;
  encodedValuesContent?: Expressionable<string>;
  type: Expressionable<('EncodedTask')>;
  values?: Expressionable<SetValue[]>;
}

export interface FileTaskStep {
  taskFilePath: Expressionable<string>;
  type: Expressionable<('FileTask')>;
  values?: Expressionable<SetValue[]>;
  valuesFilePath?: Expressionable<string>;
}

export interface PlatformProperties {
  architecture?: Expressionable<('amd64' | 'x86' | 'arm')>;
  os: Expressionable<('Windows' | 'Linux')>;
  variant?: Expressionable<('v6' | 'v7' | 'v8')>;
}

export interface SecretObject {
  type?: Expressionable<('Opaque')>;
  value?: Expressionable<string>;
}

export interface SetValue {
  isSecret?: Expressionable<boolean>;
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface SourceProperties {
  branch?: Expressionable<string>;
  repositoryUrl: Expressionable<string>;
  sourceControlAuthProperties?: Expressionable<AuthInfo>;
  sourceControlType: Expressionable<('Github' | 'VisualStudioTeamService')>;
}

export interface SourceRegistryCredentials {
  loginMode?: Expressionable<('None' | 'Default')>;
}

export interface SourceTrigger {
  name: Expressionable<string>;
  sourceRepository: Expressionable<SourceProperties>;
  sourceTriggerEvents: Expressionable<('commit' | 'pullrequest')[]>;
  status?: Expressionable<('Disabled' | 'Enabled')>;
}

export interface TaskProperties {
  agentConfiguration?: Expressionable<AgentProperties>;
  credentials?: Expressionable<Credentials>;
  platform: Expressionable<PlatformProperties>;
  status?: Expressionable<('Disabled' | 'Enabled')>;
  step: Expressionable<TaskStepProperties>;
  timeout?: Expressionable<number>;
  trigger?: Expressionable<TriggerProperties>;
}

export interface TaskStepProperties {
  contextAccessToken?: Expressionable<string>;
  contextPath?: Expressionable<string>;
}

export interface TriggerProperties {
  baseImageTrigger?: Expressionable<BaseImageTrigger>;
  sourceTriggers?: Expressionable<SourceTrigger[]>;
}

export namespace registries {
  export namespace tasks {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type TasksResource = ResourceDefinition<TaskProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TaskProperties, location: Expressionable<string>, tags?: Expressionable<any>): TasksResource {
      return {
        type: 'Microsoft.ContainerRegistry/registries/tasks',
        apiVersion: '2018-09-01',
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