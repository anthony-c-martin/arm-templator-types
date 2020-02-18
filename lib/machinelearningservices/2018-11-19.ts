import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AKS {
  properties?: Expressionable<AKSProperties>;
  computeType: Expressionable<string>;
}

export interface AksNetworkingConfiguration {
  subnetId?: Expressionable<string>;
  serviceCidr?: Expressionable<string>;
  dnsServiceIP?: Expressionable<string>;
  dockerBridgeCidr?: Expressionable<string>;
}

export interface AKSProperties {
  clusterFqdn?: Expressionable<string>;
  agentCount?: Expressionable<number>;
  agentVMSize?: Expressionable<string>;
  sslConfiguration?: Expressionable<SslConfiguration>;
  aksNetworkingConfiguration?: Expressionable<AksNetworkingConfiguration>;
}

export interface AmlCompute {
  properties?: Expressionable<AmlComputeProperties>;
  computeType: Expressionable<string>;
}

export interface AmlComputeProperties {
  vmSize?: Expressionable<string>;
  vmPriority?: Expressionable<('Dedicated' | 'LowPriority')>;
  scaleSettings?: Expressionable<ScaleSettings>;
  userAccountCredentials?: Expressionable<UserAccountCredentials>;
  subnet?: Expressionable<ResourceId>;
}

export interface Compute {
  computeLocation?: Expressionable<string>;
  description?: Expressionable<string>;
  resourceId?: Expressionable<string>;
  computeType: Expressionable<string>;
}

export interface Databricks {
  properties?: Expressionable<DatabricksProperties>;
  computeType: Expressionable<string>;
}

export interface DatabricksProperties {
  databricksAccessToken?: Expressionable<string>;
}

export interface DataFactory {
  computeType: Expressionable<string>;
}

export interface DataLakeAnalytics {
  properties?: Expressionable<DataLakeAnalyticsProperties>;
  computeType: Expressionable<string>;
}

export interface DataLakeAnalyticsProperties {
  dataLakeStoreAccountName?: Expressionable<string>;
}

export interface HDInsight {
  properties?: Expressionable<HDInsightProperties>;
  computeType: Expressionable<string>;
}

export interface HDInsightProperties {
  sshPort?: Expressionable<number>;
  address?: Expressionable<string>;
  administratorAccount?: Expressionable<VirtualMachineSshCredentials>;
}

export interface ResourceId {
  id: Expressionable<string>;
}

export interface ScaleSettings {
  maxNodeCount: Expressionable<number>;
  minNodeCount?: Expressionable<number>;
  nodeIdleTimeBeforeScaleDown?: Expressionable<string>;
}

export interface SslConfiguration {
  status?: Expressionable<('Disabled' | 'Enabled')>;
  cert?: Expressionable<string>;
  key?: Expressionable<string>;
  cname?: Expressionable<string>;
}

export interface UserAccountCredentials {
  adminUserName: Expressionable<string>;
  adminUserSshPublicKey?: Expressionable<string>;
  adminUserPassword?: Expressionable<string>;
}

export interface VirtualMachine {
  properties?: Expressionable<VirtualMachineProperties>;
  computeType: Expressionable<string>;
}

export interface VirtualMachineProperties {
  virtualMachineSize?: Expressionable<string>;
  sshPort?: Expressionable<number>;
  address?: Expressionable<string>;
  administratorAccount?: Expressionable<VirtualMachineSshCredentials>;
}

export interface VirtualMachineSshCredentials {
  username?: Expressionable<string>;
  password?: Expressionable<string>;
  publicKeyData?: Expressionable<string>;
  privateKeyData?: Expressionable<string>;
}

export interface WorkspaceProperties {
  description?: Expressionable<string>;
  friendlyName?: Expressionable<string>;
  keyVault?: Expressionable<string>;
  applicationInsights?: Expressionable<string>;
  containerRegistry?: Expressionable<string>;
  storageAccount?: Expressionable<string>;
  discoveryUrl?: Expressionable<string>;
}

export namespace workspaces {
  export function create(name: Expressionable<string>, properties: WorkspaceProperties, location: Expressionable<string>): ResourceDefinition<WorkspaceProperties> {
    return {
      type: 'Microsoft.MachineLearningServices/workspaces',
      apiVersion: '2018-11-19',
      name: name,
      location,
      properties,
    };
  }
}
export namespace workspaces {
  export namespace computes {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Compute, location: Expressionable<string>): ResourceDefinition<Compute> {
      return {
        type: 'Microsoft.MachineLearningServices/workspaces/computes',
        apiVersion: '2018-11-19',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}