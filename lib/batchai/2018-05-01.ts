import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AppInsightsReference {
  component: Expressionable<ResourceId>;
  instrumentationKey?: Expressionable<string>;
  instrumentationKeySecretReference?: Expressionable<KeyVaultSecretReference>;
}

export interface AutoScaleSettings {
  initialNodeCount?: Expressionable<number>;
  maximumNodeCount: Expressionable<number>;
  minimumNodeCount: Expressionable<number>;
}

export interface AzureBlobFileSystemReference {
  accountName: Expressionable<string>;
  containerName: Expressionable<string>;
  credentials: Expressionable<AzureStorageCredentialsInfo>;
  mountOptions?: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
}

export interface AzureFileShareReference {
  accountName: Expressionable<string>;
  azureFileUrl: Expressionable<string>;
  credentials: Expressionable<AzureStorageCredentialsInfo>;
  directoryMode?: Expressionable<string>;
  fileMode?: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
}

export interface AzureStorageCredentialsInfo {
  accountKey?: Expressionable<string>;
  accountKeySecretReference?: Expressionable<KeyVaultSecretReference>;
}

export interface Caffe2Settings {
  commandLineArgs?: Expressionable<string>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath: Expressionable<string>;
}

export interface CaffeSettings {
  commandLineArgs?: Expressionable<string>;
  configFilePath?: Expressionable<string>;
  processCount?: Expressionable<number>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath?: Expressionable<string>;
}

export interface ChainerSettings {
  commandLineArgs?: Expressionable<string>;
  processCount?: Expressionable<number>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath: Expressionable<string>;
}

export interface ClusterBaseProperties {
  nodeSetup?: Expressionable<NodeSetup>;
  scaleSettings?: Expressionable<ScaleSettings>;
  subnet?: Expressionable<ResourceId>;
  userAccountSettings: Expressionable<UserAccountSettings>;
  virtualMachineConfiguration?: Expressionable<VirtualMachineConfiguration>;
  vmPriority?: Expressionable<('dedicated' | 'lowpriority')>;
  vmSize: Expressionable<string>;
}

export interface CNTKsettings {
  commandLineArgs?: Expressionable<string>;
  configFilePath?: Expressionable<string>;
  languageType?: Expressionable<string>;
  processCount?: Expressionable<number>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath?: Expressionable<string>;
}

export interface ContainerSettings {
  imageSourceRegistry: Expressionable<ImageSourceRegistry>;
  shmSize?: Expressionable<string>;
}

export interface CustomMpiSettings {
  commandLine: Expressionable<string>;
  processCount?: Expressionable<number>;
}

export interface CustomToolkitSettings {
  commandLine?: Expressionable<string>;
}

export interface DataDisks {
  cachingType?: Expressionable<('none' | 'readonly' | 'readwrite')>;
  diskCount: Expressionable<number>;
  diskSizeInGB: Expressionable<number>;
  storageAccountType: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
}

export interface EnvironmentVariable {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface EnvironmentVariableWithSecretValue {
  name: Expressionable<string>;
  value?: Expressionable<string>;
  valueSecretReference?: Expressionable<KeyVaultSecretReference>;
}

export interface FileServerBaseProperties {
  dataDisks: Expressionable<DataDisks>;
  sshConfiguration: Expressionable<SshConfiguration>;
  subnet?: Expressionable<ResourceId>;
  vmSize: Expressionable<string>;
}

export interface FileServerReference {
  fileServer: Expressionable<ResourceId>;
  mountOptions?: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
  sourceDirectory?: Expressionable<string>;
}

export interface HorovodSettings {
  commandLineArgs?: Expressionable<string>;
  processCount?: Expressionable<number>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath: Expressionable<string>;
}

export interface ImageReference {
  offer: Expressionable<string>;
  publisher: Expressionable<string>;
  sku: Expressionable<string>;
  version?: Expressionable<string>;
  virtualMachineImageId?: Expressionable<string>;
}

export interface ImageSourceRegistry {
  credentials?: Expressionable<PrivateRegistryCredentials>;
  image: Expressionable<string>;
  serverUrl?: Expressionable<string>;
}

export interface InputDirectory {
  id: Expressionable<string>;
  path: Expressionable<string>;
}

export interface JobBaseProperties {
  caffe2Settings?: Expressionable<Caffe2Settings>;
  caffeSettings?: Expressionable<CaffeSettings>;
  chainerSettings?: Expressionable<ChainerSettings>;
  cluster: Expressionable<ResourceId>;
  cntkSettings?: Expressionable<CNTKsettings>;
  constraints?: Expressionable<JobBasePropertiesConstraints>;
  containerSettings?: Expressionable<ContainerSettings>;
  customMpiSettings?: Expressionable<CustomMpiSettings>;
  customToolkitSettings?: Expressionable<CustomToolkitSettings>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  horovodSettings?: Expressionable<HorovodSettings>;
  inputDirectories?: Expressionable<InputDirectory[]>;
  jobPreparation?: Expressionable<JobPreparation>;
  mountVolumes?: Expressionable<MountVolumes>;
  nodeCount: Expressionable<number>;
  outputDirectories?: Expressionable<OutputDirectory[]>;
  pyTorchSettings?: Expressionable<PyTorchSettings>;
  schedulingPriority?: Expressionable<('low' | 'normal' | 'high')>;
  secrets?: Expressionable<EnvironmentVariableWithSecretValue[]>;
  stdOutErrPathPrefix: Expressionable<string>;
  tensorFlowSettings?: Expressionable<TensorFlowSettings>;
}

export interface JobBasePropertiesConstraints {
  maxWallClockTime?: Expressionable<string>;
}

export interface JobPreparation {
  commandLine: Expressionable<string>;
}

export interface KeyVaultSecretReference {
  secretUrl: Expressionable<string>;
  sourceVault: Expressionable<ResourceId>;
}

export interface ManualScaleSettings {
  nodeDeallocationOption?: Expressionable<('requeue' | 'terminate' | 'waitforjobcompletion')>;
  targetNodeCount: Expressionable<number>;
}

export interface MountVolumes {
  azureBlobFileSystems?: Expressionable<AzureBlobFileSystemReference[]>;
  azureFileShares?: Expressionable<AzureFileShareReference[]>;
  fileServers?: Expressionable<FileServerReference[]>;
  unmanagedFileSystems?: Expressionable<UnmanagedFileSystemReference[]>;
}

export interface NodeSetup {
  mountVolumes?: Expressionable<MountVolumes>;
  performanceCountersSettings?: Expressionable<PerformanceCountersSettings>;
  setupTask?: Expressionable<SetupTask>;
}

export interface OutputDirectory {
  id: Expressionable<string>;
  pathPrefix: Expressionable<string>;
  pathSuffix?: Expressionable<string>;
}

export interface PerformanceCountersSettings {
  appInsightsReference: Expressionable<AppInsightsReference>;
}

export interface PrivateRegistryCredentials {
  password?: Expressionable<string>;
  passwordSecretReference?: Expressionable<KeyVaultSecretReference>;
  username: Expressionable<string>;
}

export interface PyTorchSettings {
  commandLineArgs?: Expressionable<string>;
  communicationBackend?: Expressionable<string>;
  processCount?: Expressionable<number>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath: Expressionable<string>;
}

export interface ResourceId {
  id: Expressionable<string>;
}

export interface ScaleSettings {
  autoScale?: Expressionable<AutoScaleSettings>;
  manual?: Expressionable<ManualScaleSettings>;
}

export interface SetupTask {
  commandLine: Expressionable<string>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  secrets?: Expressionable<EnvironmentVariableWithSecretValue[]>;
  stdOutErrPathPrefix: Expressionable<string>;
}

export interface SshConfiguration {
  publicIPsToAllow?: Expressionable<string[]>;
  userAccountSettings: Expressionable<UserAccountSettings>;
}

export interface TensorFlowSettings {
  masterCommandLineArgs?: Expressionable<string>;
  parameterServerCommandLineArgs?: Expressionable<string>;
  parameterServerCount?: Expressionable<number>;
  pythonInterpreterPath?: Expressionable<string>;
  pythonScriptFilePath: Expressionable<string>;
  workerCommandLineArgs?: Expressionable<string>;
  workerCount?: Expressionable<number>;
}

export interface UnmanagedFileSystemReference {
  mountCommand: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
}

export interface UserAccountSettings {
  adminUserName: Expressionable<string>;
  adminUserPassword?: Expressionable<string>;
  adminUserSshPublicKey?: Expressionable<string>;
}

export interface VirtualMachineConfiguration {
  imageReference?: Expressionable<ImageReference>;
}

export namespace workspaces {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type WorkspacesResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, tags?: Expressionable<any>): WorkspacesResource {
    return {
      type: 'Microsoft.BatchAI/workspaces',
      apiVersion: '2018-05-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace workspaces {
  export namespace clusters {
    export type ClustersResource = ResourceDefinition<ClusterBaseProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ClusterBaseProperties): ClustersResource {
      return {
        type: 'Microsoft.BatchAI/workspaces/clusters',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace workspaces {
  export namespace experiments {
    export type ExperimentsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ExperimentsResource {
      return {
        type: 'Microsoft.BatchAI/workspaces/experiments',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace workspaces {
  export namespace experiments {
    export namespace jobs {
      export type JobsResource = ResourceDefinition<JobBaseProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobBaseProperties): JobsResource {
        return {
          type: 'Microsoft.BatchAI/workspaces/experiments/jobs',
          apiVersion: '2018-05-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace workspaces {
  export namespace fileServers {
    export type FileServersResource = ResourceDefinition<FileServerBaseProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FileServerBaseProperties): FileServersResource {
      return {
        type: 'Microsoft.BatchAI/workspaces/fileServers',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}