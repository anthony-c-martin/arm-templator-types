import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApplicationResourceProperties {
  debugParams?: Expressionable<string>;
  description?: Expressionable<string>;
  diagnostics?: Expressionable<DiagnosticsDescription>;
  services?: Expressionable<ServiceResourceDescription[]>;
}

export interface ApplicationScopedVolume {
  creationParameters: Expressionable<ApplicationScopedVolumeCreationParameters>;
  destinationPath: Expressionable<string>;
  name: Expressionable<string>;
  readOnly?: Expressionable<boolean>;
}

export interface ApplicationScopedVolumeCreationParameters {
  description?: Expressionable<string>;
}

export interface ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk {
  kind: Expressionable<('ServiceFabricVolumeDisk')>;
  sizeDisk: Expressionable<('Small' | 'Medium' | 'Large')>;
}

export interface AutoScalingMechanism {
}

export interface AutoScalingPolicy {
  mechanism: Expressionable<AutoScalingMechanism>;
  name: Expressionable<string>;
  trigger: Expressionable<AutoScalingTrigger>;
}

export interface AutoScalingTrigger {
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
  reliableCollectionsRefs?: Expressionable<ReliableCollectionsRef[]>;
  resources: Expressionable<ResourceRequirements>;
  settings?: Expressionable<Setting[]>;
  volumeRefs?: Expressionable<VolumeReference[]>;
  volumes?: Expressionable<ApplicationScopedVolume[]>;
}

export interface ContainerLabel {
  name: Expressionable<string>;
  value: Expressionable<string>;
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

export interface EndpointRef {
  name?: Expressionable<string>;
}

export interface EnvironmentVariable {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface GatewayDestination {
  applicationName: Expressionable<string>;
  endpointName: Expressionable<string>;
  serviceName: Expressionable<string>;
}

export interface GatewayResourceProperties {
  description?: Expressionable<string>;
  destinationNetwork: Expressionable<NetworkRef>;
  http?: Expressionable<HttpConfig[]>;
  sourceNetwork: Expressionable<NetworkRef>;
  tcp?: Expressionable<TcpConfig[]>;
}

export interface HttpConfig {
  hosts: Expressionable<HttpHostConfig[]>;
  name: Expressionable<string>;
  port: Expressionable<number>;
}

export interface HttpHostConfig {
  name: Expressionable<string>;
  routes: Expressionable<HttpRouteConfig[]>;
}

export interface HttpRouteConfig {
  destination: Expressionable<GatewayDestination>;
  match: Expressionable<HttpRouteMatchRule>;
  name: Expressionable<string>;
}

export interface HttpRouteMatchHeader {
  name: Expressionable<string>;
  type?: Expressionable<('exact')>;
  value?: Expressionable<string>;
}

export interface HttpRouteMatchPath {
  rewrite?: Expressionable<string>;
  type: Expressionable<('prefix')>;
  value: Expressionable<string>;
}

export interface HttpRouteMatchRule {
  headers?: Expressionable<HttpRouteMatchHeader[]>;
  path: Expressionable<HttpRouteMatchPath>;
}

export interface ImageRegistryCredential {
  password?: Expressionable<string>;
  server: Expressionable<string>;
  username: Expressionable<string>;
}

export interface InlinedValueSecretResourceProperties {
  kind: Expressionable<('inlinedValue')>;
}

export interface LocalNetworkResourceProperties {
  kind: Expressionable<('Local')>;
  networkAddressPrefix?: Expressionable<string>;
}

export interface NetworkRef {
  endpointRefs?: Expressionable<EndpointRef[]>;
  name?: Expressionable<string>;
}

export interface NetworkResourceProperties {
  description?: Expressionable<string>;
}

export interface ReliableCollectionsRef {
  doNotPersistState?: Expressionable<boolean>;
  name: Expressionable<string>;
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

export interface SecretResourceProperties {
  contentType?: Expressionable<string>;
  description?: Expressionable<string>;
}

export interface SecretValueResourceProperties {
  value?: Expressionable<string>;
}

export interface ServiceResourceDescription {
  name?: Expressionable<string>;
  properties: Expressionable<ServiceResourceProperties>;
}

export interface ServiceResourceProperties {
  autoScalingPolicies?: Expressionable<AutoScalingPolicy[]>;
  codePackages: Expressionable<ContainerCodePackageProperties[]>;
  description?: Expressionable<string>;
  diagnostics?: Expressionable<DiagnosticsRef>;
  networkRefs?: Expressionable<NetworkRef[]>;
  osType: Expressionable<('Linux' | 'Windows')>;
  replicaCount?: Expressionable<number>;
}

export interface Setting {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface TcpConfig {
  destination: Expressionable<GatewayDestination>;
  name: Expressionable<string>;
  port: Expressionable<number>;
}

export interface VolumeProviderParametersAzureFile {
  accountKey?: Expressionable<string>;
  accountName: Expressionable<string>;
  shareName: Expressionable<string>;
}

export interface VolumeReference {
  destinationPath: Expressionable<string>;
  name: Expressionable<string>;
  readOnly?: Expressionable<boolean>;
}

export interface VolumeResourceProperties {
  azureFileParameters?: Expressionable<VolumeProviderParametersAzureFile>;
  description?: Expressionable<string>;
  provider: Expressionable<('SFAzureFile')>;
}

export namespace applications {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ApplicationsResource = ResourceDefinition<ApplicationResourceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ApplicationResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): ApplicationsResource {
    return {
      type: 'Microsoft.ServiceFabricMesh/applications',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace gateways {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type GatewaysResource = ResourceDefinition<GatewayResourceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: GatewayResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): GatewaysResource {
    return {
      type: 'Microsoft.ServiceFabricMesh/gateways',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace networks {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type NetworksResource = ResourceDefinition<NetworkResourceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: NetworkResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): NetworksResource {
    return {
      type: 'Microsoft.ServiceFabricMesh/networks',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace secrets {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type SecretsResource = ResourceDefinition<SecretResourceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: SecretResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): SecretsResource {
    return {
      type: 'Microsoft.ServiceFabricMesh/secrets',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace secrets {
  export namespace values {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type ValuesResource = ResourceDefinition<SecretValueResourceProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecretValueResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): ValuesResource {
      return {
        type: 'Microsoft.ServiceFabricMesh/secrets/values',
        apiVersion: '2018-09-01-preview',
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
export namespace volumes {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type VolumesResource = ResourceDefinition<VolumeResourceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: VolumeResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): VolumesResource {
    return {
      type: 'Microsoft.ServiceFabricMesh/volumes',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}