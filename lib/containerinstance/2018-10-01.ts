import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AzureFileVolume {
  readOnly?: Expressionable<boolean>;
  shareName: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountName: Expressionable<string>;
}

export interface Componentsschemascontainergroupidentitypropertiesuserassignedidentitiesadditionalproperties {
}

export interface Container {
  name: Expressionable<string>;
  properties: Expressionable<ContainerProperties>;
}

export interface ContainerExec {
  command?: Expressionable<string[]>;
}

export interface ContainerGroupDiagnostics {
  logAnalytics?: Expressionable<LogAnalytics>;
}

export interface ContainerGroupIdentity {
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
  userAssignedIdentities?: Expressionable<any>;
}

export interface ContainerGroupNetworkProfile {
  id: Expressionable<string>;
}

export interface ContainerGroupProperties {
  containers: Expressionable<Container[]>;
  diagnostics?: Expressionable<ContainerGroupDiagnostics>;
  dnsConfig?: Expressionable<DnsConfiguration>;
  imageRegistryCredentials?: Expressionable<ImageRegistryCredential[]>;
  ipAddress?: Expressionable<IpAddress>;
  networkProfile?: Expressionable<ContainerGroupNetworkProfile>;
  osType: Expressionable<('Windows' | 'Linux')>;
  restartPolicy?: Expressionable<('Always' | 'OnFailure' | 'Never')>;
  volumes?: Expressionable<Volume[]>;
}

export interface ContainerHttpGet {
  path?: Expressionable<string>;
  port: Expressionable<number>;
  scheme?: Expressionable<('http' | 'https')>;
}

export interface ContainerPort {
  port: Expressionable<number>;
  protocol?: Expressionable<('TCP' | 'UDP')>;
}

export interface ContainerProbe {
  exec?: Expressionable<ContainerExec>;
  failureThreshold?: Expressionable<number>;
  httpGet?: Expressionable<ContainerHttpGet>;
  initialDelaySeconds?: Expressionable<number>;
  periodSeconds?: Expressionable<number>;
  successThreshold?: Expressionable<number>;
  timeoutSeconds?: Expressionable<number>;
}

export interface ContainerProperties {
  command?: Expressionable<string[]>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  image: Expressionable<string>;
  livenessProbe?: Expressionable<ContainerProbe>;
  ports?: Expressionable<ContainerPort[]>;
  readinessProbe?: Expressionable<ContainerProbe>;
  resources: Expressionable<ResourceRequirements>;
  volumeMounts?: Expressionable<VolumeMount[]>;
}

export interface DnsConfiguration {
  nameServers: Expressionable<string[]>;
  options?: Expressionable<string>;
  searchDomains?: Expressionable<string>;
}

export interface EnvironmentVariable {
  name: Expressionable<string>;
  secureValue?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface GitRepoVolume {
  directory?: Expressionable<string>;
  repository: Expressionable<string>;
  revision?: Expressionable<string>;
}

export interface GpuResource {
  count: Expressionable<number>;
  sku: Expressionable<('K80' | 'P100' | 'V100')>;
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
  type: Expressionable<('Public' | 'Private')>;
}

export interface LogAnalytics {
  logType?: Expressionable<('ContainerInsights' | 'ContainerInstanceLogs')>;
  metadata?: Expressionable<any>;
  workspaceId: Expressionable<string>;
  workspaceKey: Expressionable<string>;
}

export interface Port {
  port: Expressionable<number>;
  protocol?: Expressionable<('TCP' | 'UDP')>;
}

export interface ResourceLimits {
  cpu?: Expressionable<number>;
  gpu?: Expressionable<GpuResource>;
  memoryInGB?: Expressionable<number>;
}

export interface ResourceRequests {
  cpu: Expressionable<number>;
  gpu?: Expressionable<GpuResource>;
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
  export interface AdditionalProps {
    identity?: Expressionable<ContainerGroupIdentity>;
    tags?: Expressionable<any>;
  }
  
  export type ContainerGroupsResource = ResourceDefinition<ContainerGroupProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ContainerGroupProperties, location?: Expressionable<string>, identity?: Expressionable<ContainerGroupIdentity>, tags?: Expressionable<any>): ContainerGroupsResource {
    return {
      type: 'Microsoft.ContainerInstance/containerGroups',
      apiVersion: '2018-10-01',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        tags,
      },
    };
  }
}