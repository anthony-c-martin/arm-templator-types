import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AcsClusterProperties {
  agentCount?: Expressionable<number>;
  agentVmSize?: Expressionable<('Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5')>;
  orchestratorProperties: Expressionable<KubernetesClusterProperties>;
  orchestratorType: Expressionable<('Kubernetes')>;
  systemServices?: Expressionable<('Scoring' | 'Batch')[]>;
}

export interface AppInsightsCredentials {
  apiKey?: Expressionable<string>;
  appId?: Expressionable<string>;
}

export interface AutoScaleConfiguration {
  maxReplicas?: Expressionable<number>;
  minReplicas?: Expressionable<number>;
  refreshPeriodInSeconds?: Expressionable<number>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
  targetUtilization?: Expressionable<number>;
}

export interface ContainerRegistryProperties {
  resourceId?: Expressionable<string>;
}

export interface GlobalServiceConfiguration {
  additionalProperties?: Expressionable<any>;
  autoScale?: Expressionable<AutoScaleConfiguration>;
  etag?: Expressionable<string>;
  serviceAuth?: Expressionable<ServiceAuthConfiguration>;
  ssl?: Expressionable<SslConfiguration>;
}

export interface KubernetesClusterProperties {
  servicePrincipal: Expressionable<ServicePrincipalProperties>;
}

export interface OperationalizationClusterProperties {
  appInsights?: Expressionable<AppInsightsCredentials>;
  clusterType: Expressionable<('ACS')>;
  containerRegistry?: Expressionable<ContainerRegistryProperties>;
  containerService: Expressionable<AcsClusterProperties>;
  description?: Expressionable<string>;
  globalServiceConfiguration?: Expressionable<GlobalServiceConfiguration>;
  storageAccount?: Expressionable<StorageAccountProperties>;
}

export interface ServiceAuthConfiguration {
  primaryAuthKeyHash: Expressionable<string>;
  secondaryAuthKeyHash: Expressionable<string>;
}

export interface ServicePrincipalProperties {
  clientId: Expressionable<string>;
  secret: Expressionable<string>;
}

export interface SslConfiguration {
  cert?: Expressionable<string>;
  key?: Expressionable<string>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
}

export interface StorageAccountProperties {
  resourceId?: Expressionable<string>;
}

export namespace operationalizationClusters {
  export function create(name: Expressionable<string>, properties: OperationalizationClusterProperties, location: Expressionable<string>): ResourceDefinition<OperationalizationClusterProperties> {
    return {
      type: 'Microsoft.MachineLearningCompute/operationalizationClusters',
      apiVersion: '2017-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}