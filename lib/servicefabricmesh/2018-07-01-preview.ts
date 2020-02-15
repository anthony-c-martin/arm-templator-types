// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-07-01-preview/Microsoft.ServiceFabricMesh.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ApplicationResourceProperties {
  debugParams?: Expressionable<string>;
  description?: Expressionable<string>;
  diagnostics?: Expressionable<DiagnosticsDescription>;
  services?: Expressionable<ServiceResourceDescription[]>;
}

export interface AzureInternalMonitoringPipelineSinkDescription {
  accountName?: Expressionable<string>;
  autoKeyConfigUrl?: Expressionable<string>;
  fluentdConfigUrl?: Expressionable<any>;
  kind: Expressionable<('AzureInternalMonitoringPipeline')>;
  maConfigUrl?: Expressionable<string>;
  namespace?: Expressionable<string>;
}

export interface ContainerCodePackageProperties {
  commands?: Expressionable<string[]>;
  diagnostics?: Expressionable<DiagnosticsRef>;
  endpoints?: Expressionable<EndpointProperties[]>;
  entrypoint?: Expressionable<string>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  image: Expressionable<string>;
  imageRegistryCredential?: Expressionable<ImageRegistryCredential>;
  labels?: Expressionable<ContainerLabel[]>;
  name: Expressionable<string>;
  resources: Expressionable<ResourceRequirements>;
  settings?: Expressionable<Setting[]>;
  volumeRefs?: Expressionable<ContainerVolume[]>;
}

export interface ContainerLabel {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface ContainerVolume {
  destinationPath: Expressionable<string>;
  name: Expressionable<string>;
  readOnly?: Expressionable<boolean>;
}

export interface DiagnosticsDescription {
  defaultSinkRefs?: Expressionable<string[]>;
  enabled?: Expressionable<boolean>;
  sinks?: Expressionable<DiagnosticsSinkProperties[]>;
}

export interface DiagnosticsRef {
  enabled?: Expressionable<boolean>;
  sinkRefs?: Expressionable<string[]>;
}

export interface DiagnosticsSinkProperties {
  description?: Expressionable<string>;
  name?: Expressionable<string>;
}

export interface EndpointProperties {
  name: Expressionable<string>;
  port?: Expressionable<number>;
}

export interface EnvironmentVariable {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ImageRegistryCredential {
  password?: Expressionable<string>;
  server: Expressionable<string>;
  username: Expressionable<string>;
}

export interface IngressConfig {
  layer4?: Expressionable<Layer4IngressConfig[]>;
  qosLevel?: Expressionable<('Bronze')>;
}

export interface Layer4IngressConfig {
  applicationName?: Expressionable<string>;
  endpointName?: Expressionable<string>;
  name?: Expressionable<string>;
  publicPort?: Expressionable<number>;
  serviceName?: Expressionable<string>;
}

export interface NetworkRef {
  name?: Expressionable<string>;
}

export interface NetworkResourceProperties {
  addressPrefix: Expressionable<string>;
  description?: Expressionable<string>;
  ingressConfig?: Expressionable<IngressConfig>;
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

export interface ServiceResourceDescription {
  name?: Expressionable<string>;
  properties: Expressionable<ServiceResourceProperties>;
}

export interface ServiceResourceProperties {
  codePackages: Expressionable<ContainerCodePackageProperties[]>;
  description?: Expressionable<string>;
  diagnostics?: Expressionable<DiagnosticsRef>;
  healthState?: Expressionable<('Invalid' | 'Ok' | 'Warning' | 'Error' | 'Unknown')>;
  networkRefs?: Expressionable<NetworkRef[]>;
  osType: Expressionable<('Linux' | 'Windows')>;
  replicaCount?: Expressionable<number>;
}

export interface Setting {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface VolumeProviderParametersAzureFile {
  accountKey?: Expressionable<string>;
  accountName: Expressionable<string>;
  shareName: Expressionable<string>;
}

export interface VolumeResourceProperties {
  azureFileParameters?: Expressionable<VolumeProviderParametersAzureFile>;
  description?: Expressionable<string>;
  provider: Expressionable<('SFAzureFile')>;
}

export namespace applications {
  export function create(name: Expressionable<string>, properties: ApplicationResourceProperties, location: Expressionable<string>): ResourceDefinition<ApplicationResourceProperties> {
    return {
      type: 'Microsoft.ServiceFabricMesh/applications',
      apiVersion: '2018-07-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace networks {
  export function create(name: Expressionable<string>, properties: NetworkResourceProperties, location: Expressionable<string>): ResourceDefinition<NetworkResourceProperties> {
    return {
      type: 'Microsoft.ServiceFabricMesh/networks',
      apiVersion: '2018-07-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace volumes {
  export function create(name: Expressionable<string>, properties: VolumeResourceProperties, location: Expressionable<string>): ResourceDefinition<VolumeResourceProperties> {
    return {
      type: 'Microsoft.ServiceFabricMesh/volumes',
      apiVersion: '2018-07-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
