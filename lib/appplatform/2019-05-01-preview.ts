import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AppResourceProperties {
  activeDeploymentName?: Expressionable<string>;
  persistentDisk?: Expressionable<PersistentDisk>;
  public?: Expressionable<boolean>;
  temporaryDisk?: Expressionable<TemporaryDisk>;
}

export interface BindingResourceProperties {
  bindingParameters?: Expressionable<any>;
  key?: Expressionable<string>;
  resourceId?: Expressionable<string>;
  resourceName?: Expressionable<string>;
  resourceType?: Expressionable<string>;
}

export interface ClusterResourceProperties {
  configServerProperties?: Expressionable<ConfigServerProperties>;
  trace?: Expressionable<TraceProperties>;
}

export interface ConfigServerGitProperty {
  hostKey?: Expressionable<string>;
  hostKeyAlgorithm?: Expressionable<string>;
  label?: Expressionable<string>;
  password?: Expressionable<string>;
  privateKey?: Expressionable<string>;
  repositories?: Expressionable<GitPatternRepository[]>;
  searchPaths?: Expressionable<string[]>;
  strictHostKeyChecking?: Expressionable<boolean>;
  uri: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface ConfigServerProperties {
  configServer?: Expressionable<ConfigServerSettings>;
  error?: Expressionable<Error>;
}

export interface ConfigServerSettings {
  gitProperty?: Expressionable<ConfigServerGitProperty>;
}

export interface DeploymentResourceProperties {
  deploymentSettings?: Expressionable<DeploymentSettings>;
  source?: Expressionable<UserSourceInfo>;
}

export interface DeploymentSettings {
  cpu?: Expressionable<number>;
  environmentVariables?: Expressionable<any>;
  instanceCount?: Expressionable<number>;
  jvmOptions?: Expressionable<string>;
  memoryInGB?: Expressionable<number>;
  runtimeVersion?: Expressionable<('Java_8' | 'Java_11')>;
}

export interface Error {
  code?: Expressionable<string>;
  message?: Expressionable<string>;
}

export interface GitPatternRepository {
  hostKey?: Expressionable<string>;
  hostKeyAlgorithm?: Expressionable<string>;
  label?: Expressionable<string>;
  name: Expressionable<string>;
  password?: Expressionable<string>;
  pattern?: Expressionable<string[]>;
  privateKey?: Expressionable<string>;
  searchPaths?: Expressionable<string[]>;
  strictHostKeyChecking?: Expressionable<boolean>;
  uri: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface PersistentDisk {
  mountPath?: Expressionable<string>;
  sizeInGB?: Expressionable<number>;
}

export interface TemporaryDisk {
  mountPath?: Expressionable<string>;
  sizeInGB?: Expressionable<number>;
}

export interface TraceProperties {
  appInsightInstrumentationKey?: Expressionable<string>;
  enabled?: Expressionable<boolean>;
  error?: Expressionable<Error>;
}

export interface UserSourceInfo {
  artifactSelector?: Expressionable<string>;
  relativePath?: Expressionable<string>;
  type?: Expressionable<('Jar' | 'Source')>;
  version?: Expressionable<string>;
}

export namespace Spring {
  export function create(name: Expressionable<string>, properties: ClusterResourceProperties, location?: Expressionable<string>): ResourceDefinition<ClusterResourceProperties> {
    return {
      type: 'Microsoft.AppPlatform/Spring',
      apiVersion: '2019-05-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace Spring {
  export namespace apps {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AppResourceProperties): ResourceDefinition<AppResourceProperties> {
      return {
        type: 'Microsoft.AppPlatform/Spring/apps',
        apiVersion: '2019-05-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace Spring {
  export namespace apps {
    export namespace bindings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BindingResourceProperties): ResourceDefinition<BindingResourceProperties> {
        return {
          type: 'Microsoft.AppPlatform/Spring/apps/bindings',
          apiVersion: '2019-05-01-preview',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace Spring {
  export namespace apps {
    export namespace deployments {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DeploymentResourceProperties): ResourceDefinition<DeploymentResourceProperties> {
        return {
          type: 'Microsoft.AppPlatform/Spring/apps/deployments',
          apiVersion: '2019-05-01-preview',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}