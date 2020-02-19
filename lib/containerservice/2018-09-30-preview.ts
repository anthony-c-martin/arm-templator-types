import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface NetworkProfile {
  peerVnetId?: Expressionable<string>;
  vnetCidr?: Expressionable<string>;
}

export interface OpenShiftManagedClusterAADIdentityProvider {
  clientId?: Expressionable<string>;
  customerAdminGroupId?: Expressionable<string>;
  kind: Expressionable<('AADIdentityProvider')>;
  secret?: Expressionable<string>;
  tenantId?: Expressionable<string>;
}

export interface OpenShiftManagedClusterAgentPoolProfile {
  count: Expressionable<number>;
  name: Expressionable<string>;
  osType?: Expressionable<('Linux' | 'Windows')>;
  role?: Expressionable<('compute' | 'infra')>;
  subnetCidr?: Expressionable<string>;
  vmSize: Expressionable<('Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_D16s_v3' | 'Standard_D32s_v3' | 'Standard_D64s_v3' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_F8s_v2' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8s' | 'Standard_F16s' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_E16s_v3' | 'Standard_E20s_v3' | 'Standard_E32s_v3' | 'Standard_E64s_v3' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_L32s')>;
}

export interface OpenShiftManagedClusterAuthProfile {
  identityProviders?: Expressionable<OpenShiftManagedClusterIdentityProvider[]>;
}

export interface OpenShiftManagedClusterBaseIdentityProvider {
}

export interface OpenShiftManagedClusterIdentityProvider {
  name?: Expressionable<string>;
  provider?: Expressionable<OpenShiftManagedClusterBaseIdentityProvider>;
}

export interface OpenShiftManagedClusterMasterPoolProfile {
  count: Expressionable<number>;
  name?: Expressionable<string>;
  osType?: Expressionable<('Linux' | 'Windows')>;
  subnetCidr?: Expressionable<string>;
  vmSize: Expressionable<('Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_D16s_v3' | 'Standard_D32s_v3' | 'Standard_D64s_v3' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_F8s_v2' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8s' | 'Standard_F16s' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_E16s_v3' | 'Standard_E20s_v3' | 'Standard_E32s_v3' | 'Standard_E64s_v3' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_L32s')>;
}

export interface OpenShiftManagedClusterProperties {
  agentPoolProfiles?: Expressionable<OpenShiftManagedClusterAgentPoolProfile[]>;
  authProfile?: Expressionable<OpenShiftManagedClusterAuthProfile>;
  fqdn?: Expressionable<string>;
  masterPoolProfile?: Expressionable<OpenShiftManagedClusterMasterPoolProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  openShiftVersion: Expressionable<string>;
  publicHostname?: Expressionable<string>;
  routerProfiles?: Expressionable<OpenShiftRouterProfile[]>;
}

export interface OpenShiftRouterProfile {
  name?: Expressionable<string>;
  publicSubdomain?: Expressionable<string>;
}

export interface PurchasePlan {
  name?: Expressionable<string>;
  product?: Expressionable<string>;
  promotionCode?: Expressionable<string>;
  publisher?: Expressionable<string>;
}

export namespace openShiftManagedClusters {
  interface AdditionalProps {
    plan?: Expressionable<PurchasePlan>;
  }
  
  export function create(name: Expressionable<string>, properties: OpenShiftManagedClusterProperties, location: Expressionable<string>, plan?: Expressionable<PurchasePlan>): ResourceDefinition<OpenShiftManagedClusterProperties> & AdditionalProps {
    return {
      type: 'Microsoft.ContainerService/openShiftManagedClusters',
      apiVersion: '2018-09-30-preview',
      name: [name],
      location,
      plan,
      properties,
    };
  }
}