import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  updateTriggerEndpoint?: Expressionable<string>;
  updateTriggerPayloadType?: Expressionable<('Default' | 'Token')>;
}

export interface Credentials {
  customRegistries?: Expressionable<any>;
  sourceRegistry?: Expressionable<SourceRegistryCredentials>;
}

export interface CustomRegistryCredentials {
  identity?: Expressionable<string>;
  password?: Expressionable<SecretObject>;
  userName?: Expressionable<SecretObject>;
}

export interface DockerBuildRequest {
  agentConfiguration?: Expressionable<AgentProperties>;
  arguments?: Expressionable<Argument[]>;
  credentials?: Expressionable<Credentials>;
  dockerFilePath: Expressionable<string>;
  imageNames?: Expressionable<string[]>;
  isPushEnabled?: Expressionable<boolean>;
  noCache?: Expressionable<boolean>;
  platform: Expressionable<PlatformProperties>;
  sourceLocation?: Expressionable<string>;
  target?: Expressionable<string>;
  timeout?: Expressionable<number>;
  type: Expressionable<('DockerBuildRequest')>;
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

export interface EncodedTaskRunRequest {
  agentConfiguration?: Expressionable<AgentProperties>;
  credentials?: Expressionable<Credentials>;
  encodedTaskContent: Expressionable<string>;
  encodedValuesContent?: Expressionable<string>;
  platform: Expressionable<PlatformProperties>;
  sourceLocation?: Expressionable<string>;
  timeout?: Expressionable<number>;
  type: Expressionable<('EncodedTaskRunRequest')>;
  values?: Expressionable<SetValue[]>;
}

export interface EncodedTaskStep {
  encodedTaskContent: Expressionable<string>;
  encodedValuesContent?: Expressionable<string>;
  type: Expressionable<('EncodedTask')>;
  values?: Expressionable<SetValue[]>;
}

export interface FileTaskRunRequest {
  agentConfiguration?: Expressionable<AgentProperties>;
  credentials?: Expressionable<Credentials>;
  platform: Expressionable<PlatformProperties>;
  sourceLocation?: Expressionable<string>;
  taskFilePath: Expressionable<string>;
  timeout?: Expressionable<number>;
  type: Expressionable<('FileTaskRunRequest')>;
  values?: Expressionable<SetValue[]>;
  valuesFilePath?: Expressionable<string>;
}

export interface FileTaskStep {
  taskFilePath: Expressionable<string>;
  type: Expressionable<('FileTask')>;
  values?: Expressionable<SetValue[]>;
  valuesFilePath?: Expressionable<string>;
}

export interface IdentityProperties {
  principalId?: Expressionable<string>;
  tenantId?: Expressionable<string>;
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
  userAssignedIdentities?: Expressionable<any>;
}

export interface OverrideTaskStepProperties {
  arguments?: Expressionable<Argument[]>;
  contextPath?: Expressionable<string>;
  file?: Expressionable<string>;
  target?: Expressionable<string>;
  updateTriggerToken?: Expressionable<string>;
  values?: Expressionable<SetValue[]>;
}

export interface PlatformProperties {
  architecture?: Expressionable<('amd64' | 'x86' | '386' | 'arm' | 'arm64')>;
  os: Expressionable<('Windows' | 'Linux')>;
  variant?: Expressionable<('v6' | 'v7' | 'v8')>;
}

export interface RunRequest {
  isArchiveEnabled?: Expressionable<boolean>;
}

export interface SecretObject {
  type?: Expressionable<('Opaque' | 'Vaultsecret')>;
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

export interface TaskRunProperties {
  forceUpdateTag?: Expressionable<string>;
  runRequest?: Expressionable<RunRequest>;
}

export interface TaskRunRequest {
  overrideTaskStepProperties?: Expressionable<OverrideTaskStepProperties>;
  taskId: Expressionable<string>;
  type: Expressionable<('TaskRunRequest')>;
}

export interface TaskStepProperties {
  contextAccessToken?: Expressionable<string>;
  contextPath?: Expressionable<string>;
}

export interface TimerTrigger {
  name: Expressionable<string>;
  schedule: Expressionable<string>;
  status?: Expressionable<('Disabled' | 'Enabled')>;
}

export interface TriggerProperties {
  baseImageTrigger?: Expressionable<BaseImageTrigger>;
  sourceTriggers?: Expressionable<SourceTrigger[]>;
  timerTriggers?: Expressionable<TimerTrigger[]>;
}

export interface UserIdentityProperties {
  clientId?: Expressionable<string>;
  principalId?: Expressionable<string>;
}

export namespace registries {
  export namespace taskRuns {
    interface AdditionalProps {
      identity?: Expressionable<IdentityProperties>;
    }
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TaskRunProperties, location: Expressionable<string>, identity?: Expressionable<IdentityProperties>): ResourceDefinition<TaskRunProperties> & AdditionalProps {
      return {
        type: 'Microsoft.ContainerRegistry/registries/taskRuns',
        apiVersion: '2019-06-01-preview',
        name: concatResourceName(...name),
        location,
        identity,
        properties,
      };
    }
  }
}
export namespace registries {
  export namespace tasks {
    interface AdditionalProps {
      identity?: Expressionable<IdentityProperties>;
    }
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TaskProperties, location: Expressionable<string>, identity?: Expressionable<IdentityProperties>): ResourceDefinition<TaskProperties> & AdditionalProps {
      return {
        type: 'Microsoft.ContainerRegistry/registries/tasks',
        apiVersion: '2019-06-01-preview',
        name: concatResourceName(...name),
        location,
        identity,
        properties,
      };
    }
  }
}