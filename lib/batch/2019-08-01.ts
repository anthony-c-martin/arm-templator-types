import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ApplicationPackageProperties {
}

export interface ApplicationPackageReference {
  id: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface ApplicationProperties {
  allowUpdates?: Expressionable<boolean>;
  defaultVersion?: Expressionable<string>;
  displayName?: Expressionable<string>;
}

export interface AutoScaleSettings {
  evaluationInterval?: Expressionable<string>;
  formula: Expressionable<string>;
}

export interface AutoStorageBaseProperties {
  storageAccountId: Expressionable<string>;
}

export interface AutoUserSpecification {
  elevationLevel?: Expressionable<('NonAdmin' | 'Admin')>;
  scope?: Expressionable<('Task' | 'Pool')>;
}

export interface AzureBlobFileSystemConfiguration {
  accountKey?: Expressionable<string>;
  accountName: Expressionable<string>;
  blobfuseOptions?: Expressionable<string>;
  containerName: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
  sasKey?: Expressionable<string>;
}

export interface AzureFileShareConfiguration {
  accountKey: Expressionable<string>;
  accountName: Expressionable<string>;
  azureFileUrl: Expressionable<string>;
  mountOptions?: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
}

export interface BatchAccountCreateProperties {
  autoStorage?: Expressionable<AutoStorageBaseProperties>;
  keyVaultReference?: Expressionable<KeyVaultReference>;
  poolAllocationMode?: Expressionable<('BatchService' | 'UserSubscription')>;
}

export interface CertificateCreateOrUpdateProperties {
  data: Expressionable<string>;
  format?: Expressionable<('Pfx' | 'Cer')>;
  password?: Expressionable<string>;
  thumbprint?: Expressionable<string>;
  thumbprintAlgorithm?: Expressionable<string>;
}

export interface CertificateReference {
  id: Expressionable<string>;
  storeLocation?: Expressionable<('CurrentUser' | 'LocalMachine')>;
  storeName?: Expressionable<string>;
  visibility?: Expressionable<('StartTask' | 'Task' | 'RemoteUser')[]>;
}

export interface CIFSMountConfiguration {
  mountOptions?: Expressionable<string>;
  password: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
  source: Expressionable<string>;
  username: Expressionable<string>;
}

export interface CloudServiceConfiguration {
  osFamily: Expressionable<string>;
  osVersion?: Expressionable<string>;
}

export interface ContainerConfiguration {
  containerImageNames?: Expressionable<string[]>;
  containerRegistries?: Expressionable<ContainerRegistry[]>;
  type: Expressionable<('DockerCompatible')>;
}

export interface ContainerRegistry {
  password: Expressionable<string>;
  registryServer?: Expressionable<string>;
  username: Expressionable<string>;
}

export interface DataDisk {
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  diskSizeGB: Expressionable<number>;
  lun: Expressionable<number>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
}

export interface DeploymentConfiguration {
  cloudServiceConfiguration?: Expressionable<CloudServiceConfiguration>;
  virtualMachineConfiguration?: Expressionable<VirtualMachineConfiguration>;
}

export interface EnvironmentSetting {
  name: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface FixedScaleSettings {
  nodeDeallocationOption?: Expressionable<('Requeue' | 'Terminate' | 'TaskCompletion' | 'RetainedData')>;
  resizeTimeout?: Expressionable<string>;
  targetDedicatedNodes?: Expressionable<number>;
  targetLowPriorityNodes?: Expressionable<number>;
}

export interface ImageReference {
  id?: Expressionable<string>;
  offer?: Expressionable<string>;
  publisher?: Expressionable<string>;
  sku?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface InboundNatPool {
  backendPort: Expressionable<number>;
  frontendPortRangeEnd: Expressionable<number>;
  frontendPortRangeStart: Expressionable<number>;
  name: Expressionable<string>;
  networkSecurityGroupRules?: Expressionable<NetworkSecurityGroupRule[]>;
  protocol: Expressionable<('TCP' | 'UDP')>;
}

export interface KeyVaultReference {
  id: Expressionable<string>;
  url: Expressionable<string>;
}

export interface LinuxUserConfiguration {
  gid?: Expressionable<number>;
  sshPrivateKey?: Expressionable<string>;
  uid?: Expressionable<number>;
}

export interface MetadataItem {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface MountConfiguration {
  azureBlobFileSystemConfiguration?: Expressionable<AzureBlobFileSystemConfiguration>;
  azureFileShareConfiguration?: Expressionable<AzureFileShareConfiguration>;
  cifsMountConfiguration?: Expressionable<CIFSMountConfiguration>;
  nfsMountConfiguration?: Expressionable<NFSMountConfiguration>;
}

export interface NetworkConfiguration {
  endpointConfiguration?: Expressionable<PoolEndpointConfiguration>;
  publicIPs?: Expressionable<string[]>;
  subnetId?: Expressionable<string>;
}

export interface NetworkSecurityGroupRule {
  access: Expressionable<('Allow' | 'Deny')>;
  priority: Expressionable<number>;
  sourceAddressPrefix: Expressionable<string>;
  sourcePortRanges?: Expressionable<string[]>;
}

export interface NFSMountConfiguration {
  mountOptions?: Expressionable<string>;
  relativeMountPath: Expressionable<string>;
  source: Expressionable<string>;
}

export interface PoolEndpointConfiguration {
  inboundNatPools: Expressionable<InboundNatPool[]>;
}

export interface PoolProperties {
  applicationLicenses?: Expressionable<string[]>;
  applicationPackages?: Expressionable<ApplicationPackageReference[]>;
  certificates?: Expressionable<CertificateReference[]>;
  deploymentConfiguration?: Expressionable<DeploymentConfiguration>;
  displayName?: Expressionable<string>;
  interNodeCommunication?: Expressionable<('Enabled' | 'Disabled')>;
  maxTasksPerNode?: Expressionable<number>;
  metadata?: Expressionable<MetadataItem[]>;
  mountConfiguration?: Expressionable<MountConfiguration[]>;
  networkConfiguration?: Expressionable<NetworkConfiguration>;
  scaleSettings?: Expressionable<ScaleSettings>;
  startTask?: Expressionable<StartTask>;
  taskSchedulingPolicy?: Expressionable<TaskSchedulingPolicy>;
  userAccounts?: Expressionable<UserAccount[]>;
  vmSize?: Expressionable<string>;
}

export interface ResourceFile {
  autoStorageContainerName?: Expressionable<string>;
  blobPrefix?: Expressionable<string>;
  fileMode?: Expressionable<string>;
  filePath?: Expressionable<string>;
  httpUrl?: Expressionable<string>;
  storageContainerUrl?: Expressionable<string>;
}

export interface ScaleSettings {
  autoScale?: Expressionable<AutoScaleSettings>;
  fixedScale?: Expressionable<FixedScaleSettings>;
}

export interface StartTask {
  commandLine?: Expressionable<string>;
  containerSettings?: Expressionable<TaskContainerSettings>;
  environmentSettings?: Expressionable<EnvironmentSetting[]>;
  maxTaskRetryCount?: Expressionable<number>;
  resourceFiles?: Expressionable<ResourceFile[]>;
  userIdentity?: Expressionable<UserIdentity>;
  waitForSuccess?: Expressionable<boolean>;
}

export interface TaskContainerSettings {
  containerRunOptions?: Expressionable<string>;
  imageName: Expressionable<string>;
  registry?: Expressionable<ContainerRegistry>;
  workingDirectory?: Expressionable<('TaskWorkingDirectory' | 'ContainerImageDefault')>;
}

export interface TaskSchedulingPolicy {
  nodeFillType: Expressionable<('Spread' | 'Pack')>;
}

export interface UserAccount {
  elevationLevel?: Expressionable<('NonAdmin' | 'Admin')>;
  linuxUserConfiguration?: Expressionable<LinuxUserConfiguration>;
  name: Expressionable<string>;
  password: Expressionable<string>;
  windowsUserConfiguration?: Expressionable<WindowsUserConfiguration>;
}

export interface UserIdentity {
  autoUser?: Expressionable<AutoUserSpecification>;
  userName?: Expressionable<string>;
}

export interface VirtualMachineConfiguration {
  containerConfiguration?: Expressionable<ContainerConfiguration>;
  dataDisks?: Expressionable<DataDisk[]>;
  imageReference: Expressionable<ImageReference>;
  licenseType?: Expressionable<string>;
  nodeAgentSkuId: Expressionable<string>;
  windowsConfiguration?: Expressionable<WindowsConfiguration>;
}

export interface WindowsConfiguration {
  enableAutomaticUpdates?: Expressionable<boolean>;
}

export interface WindowsUserConfiguration {
  loginMode?: Expressionable<('Batch' | 'Interactive')>;
}

export namespace batchAccounts {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type BatchAccountsResource = ResourceDefinition<BatchAccountCreateProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: BatchAccountCreateProperties, location: Expressionable<string>, tags?: Expressionable<any>): BatchAccountsResource {
    return {
      type: 'Microsoft.Batch/batchAccounts',
      apiVersion: '2019-08-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace batchAccounts {
  export namespace applications {
    export type ApplicationsResource = ResourceDefinition<ApplicationProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApplicationProperties): ApplicationsResource {
      return {
        type: 'Microsoft.Batch/batchAccounts/applications',
        apiVersion: '2019-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace batchAccounts {
  export namespace applications {
    export namespace versions {
      export type VersionsResource = ResourceDefinition<ApplicationPackageProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ApplicationPackageProperties): VersionsResource {
        return {
          type: 'Microsoft.Batch/batchAccounts/applications/versions',
          apiVersion: '2019-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace batchAccounts {
  export namespace certificates {
    export type CertificatesResource = ResourceDefinition<CertificateCreateOrUpdateProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CertificateCreateOrUpdateProperties): CertificatesResource {
      return {
        type: 'Microsoft.Batch/batchAccounts/certificates',
        apiVersion: '2019-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace batchAccounts {
  export namespace pools {
    export type PoolsResource = ResourceDefinition<PoolProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PoolProperties): PoolsResource {
      return {
        type: 'Microsoft.Batch/batchAccounts/pools',
        apiVersion: '2019-08-01',
        name: name,
        properties,
      };
    }
  }
}