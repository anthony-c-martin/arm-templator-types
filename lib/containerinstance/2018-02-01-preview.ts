// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-02-01-preview/Microsoft.ContainerInstance.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AzureFileVolume {
  readOnly?: Expressionable<boolean>;
  shareName: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountName: Expressionable<string>;
}

export interface Container {
  name: Expressionable<string>;
  properties: Expressionable<ContainerProperties>;
}

export interface ContainerGroupProperties {
  containers: Expressionable<Container[]>;
  imageRegistryCredentials?: Expressionable<ImageRegistryCredential[]>;
  ipAddress?: Expressionable<IpAddress>;
  osType: Expressionable<('Windows' | 'Linux')>;
  restartPolicy?: Expressionable<('Always' | 'OnFailure' | 'Never')>;
  volumes?: Expressionable<Volume[]>;
}

export interface ContainerPort {
  port: Expressionable<number>;
  protocol?: Expressionable<('TCP' | 'UDP')>;
}

export interface ContainerProperties {
  command?: Expressionable<string[]>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  image: Expressionable<string>;
  ports?: Expressionable<ContainerPort[]>;
  resources: Expressionable<ResourceRequirements>;
  volumeMounts?: Expressionable<VolumeMount[]>;
}

export interface EnvironmentVariable {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface GitRepoVolume {
  directory?: Expressionable<string>;
  repository: Expressionable<string>;
  revision?: Expressionable<string>;
}

export interface ImageRegistryCredential {
  password?: Expressionable<string>;
  server: Expressionable<string>;
  username: Expressionable<string>;
}

export interface IpAddress {
  dnsNameLabel?: Expressionable<string>;
  ip?: Expressionable<string>;
  ports: Expressionable<Port[]>;
  type: Expressionable<('Public')>;
}

export interface Port {
  port: Expressionable<number>;
  protocol?: Expressionable<('TCP' | 'UDP')>;
}

export interface ResourceLimits {
  cpu?: Expressionable<number>;
  memoryInGB?: Expressionable<number>;
}

export interface ResourceRequests {
  cpu: Expressionable<number>;
  memoryInGB: Expressionable<number>;
}

export interface ResourceRequirements {
  limits?: Expressionable<ResourceLimits>;
  requests: Expressionable<ResourceRequests>;
}

export interface Volume {
  azureFile?: Expressionable<AzureFileVolume>;
  emptyDir?: Expressionable<any>;
  gitRepo?: Expressionable<GitRepoVolume>;
  name: Expressionable<string>;
  secret?: Expressionable<any>;
}

export interface VolumeMount {
  mountPath: Expressionable<string>;
  name: Expressionable<string>;
  readOnly?: Expressionable<boolean>;
}

export namespace containerGroups {
  export function create(name: Expressionable<string>, properties: ContainerGroupProperties, location: Expressionable<string>): ResourceDefinition<ContainerGroupProperties> {
    return {
      type: 'Microsoft.ContainerInstance/containerGroups',
      apiVersion: '2018-02-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
