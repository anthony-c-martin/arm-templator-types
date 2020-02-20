import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ContainerServiceLinuxProfile {
  adminUsername: Expressionable<string>;
  ssh: Expressionable<ContainerServiceSshConfiguration>;
}

export interface ContainerServiceNetworkProfile {
  dnsServiceIP?: Expressionable<string>;
  dockerBridgeCidr?: Expressionable<string>;
  loadBalancerProfile?: Expressionable<ManagedClusterLoadBalancerProfile>;
  loadBalancerSku?: Expressionable<('standard' | 'basic')>;
  networkPlugin?: Expressionable<('azure' | 'kubenet')>;
  networkPolicy?: Expressionable<('calico' | 'azure')>;
  podCidr?: Expressionable<string>;
  serviceCidr?: Expressionable<string>;
}

export interface ContainerServiceSshConfiguration {
  publicKeys: Expressionable<ContainerServiceSshPublicKey[]>;
}

export interface ContainerServiceSshPublicKey {
  keyData: Expressionable<string>;
}

export interface ManagedClusterAADProfile {
  clientAppID: Expressionable<string>;
  serverAppID: Expressionable<string>;
  serverAppSecret?: Expressionable<string>;
  tenantID?: Expressionable<string>;
}

export interface ManagedClusterAddonProfile {
  config?: Expressionable<any>;
  enabled: Expressionable<boolean>;
}

export interface ManagedClusterAgentPoolProfile {
  availabilityZones?: Expressionable<string[]>;
  count?: Expressionable<number>;
  enableAutoScaling?: Expressionable<boolean>;
  enableNodePublicIP?: Expressionable<boolean>;
  maxCount?: Expressionable<number>;
  maxPods?: Expressionable<number>;
  minCount?: Expressionable<number>;
  name: Expressionable<string>;
  nodeTaints?: Expressionable<string[]>;
  orchestratorVersion?: Expressionable<string>;
  osDiskSizeGB?: Expressionable<number>;
  osType?: Expressionable<('Linux' | 'Windows')>;
  scaleSetEvictionPolicy?: Expressionable<('Delete' | 'Deallocate')>;
  scaleSetPriority?: Expressionable<('Low' | 'Regular')>;
  type?: Expressionable<('VirtualMachineScaleSets' | 'AvailabilitySet')>;
  vmSize?: Expressionable<('Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6')>;
  vnetSubnetID?: Expressionable<string>;
}

export interface ManagedClusterAgentPoolProfileProperties {
  availabilityZones?: Expressionable<string[]>;
  count?: Expressionable<number>;
  enableAutoScaling?: Expressionable<boolean>;
  enableNodePublicIP?: Expressionable<boolean>;
  maxCount?: Expressionable<number>;
  maxPods?: Expressionable<number>;
  minCount?: Expressionable<number>;
  nodeTaints?: Expressionable<string[]>;
  orchestratorVersion?: Expressionable<string>;
  osDiskSizeGB?: Expressionable<number>;
  osType?: Expressionable<('Linux' | 'Windows')>;
  scaleSetEvictionPolicy?: Expressionable<('Delete' | 'Deallocate')>;
  scaleSetPriority?: Expressionable<('Low' | 'Regular')>;
  type?: Expressionable<('VirtualMachineScaleSets' | 'AvailabilitySet')>;
  vmSize?: Expressionable<('Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6')>;
  vnetSubnetID?: Expressionable<string>;
}

export interface ManagedClusterAPIServerAccessProfile {
  authorizedIPRanges?: Expressionable<string[]>;
  enablePrivateCluster?: Expressionable<boolean>;
}

export interface ManagedClusterIdentity {
  type?: Expressionable<('SystemAssigned' | 'None')>;
}

export interface ManagedClusterLoadBalancerProfile {
  effectiveOutboundIPs?: Expressionable<ResourceReference[]>;
  managedOutboundIPs?: Expressionable<ManagedClusterLoadBalancerProfileManagedOutboundIPs>;
  outboundIPPrefixes?: Expressionable<ManagedClusterLoadBalancerProfileOutboundIPPrefixes>;
  outboundIPs?: Expressionable<ManagedClusterLoadBalancerProfileOutboundIPs>;
}

export interface ManagedClusterLoadBalancerProfileManagedOutboundIPs {
  count?: Expressionable<number>;
}

export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixes {
  publicIPPrefixes?: Expressionable<ResourceReference[]>;
}

export interface ManagedClusterLoadBalancerProfileOutboundIPs {
  publicIPs?: Expressionable<ResourceReference[]>;
}

export interface ManagedClusterProperties {
  aadProfile?: Expressionable<ManagedClusterAADProfile>;
  addonProfiles?: Expressionable<any>;
  agentPoolProfiles?: Expressionable<ManagedClusterAgentPoolProfile[]>;
  apiServerAccessProfile?: Expressionable<ManagedClusterAPIServerAccessProfile>;
  dnsPrefix?: Expressionable<string>;
  enablePodSecurityPolicy?: Expressionable<boolean>;
  enableRBAC?: Expressionable<boolean>;
  kubernetesVersion?: Expressionable<string>;
  linuxProfile?: Expressionable<ContainerServiceLinuxProfile>;
  networkProfile?: Expressionable<ContainerServiceNetworkProfile>;
  nodeResourceGroup?: Expressionable<string>;
  servicePrincipalProfile?: Expressionable<ManagedClusterServicePrincipalProfile>;
  windowsProfile?: Expressionable<ManagedClusterWindowsProfile>;
}

export interface ManagedClusterServicePrincipalProfile {
  clientId: Expressionable<string>;
  secret?: Expressionable<string>;
}

export interface ManagedClusterWindowsProfile {
  adminPassword?: Expressionable<string>;
  adminUsername: Expressionable<string>;
}

export interface ResourceReference {
  id?: Expressionable<string>;
}

export namespace managedClusters {
  export interface AddedResourceProps {
    identity?: Expressionable<ManagedClusterIdentity>;
    tags?: Expressionable<any>;
  }
  
  export type ManagedClustersResource = ResourceDefinition<ManagedClusterProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ManagedClusterProperties, location: Expressionable<string>, identity?: Expressionable<ManagedClusterIdentity>, tags?: Expressionable<any>): ManagedClustersResource {
    return {
      type: 'Microsoft.ContainerService/managedClusters',
      apiVersion: '2019-08-01',
      name: [name],
      location,
      identity,
      tags,
      properties,
    };
  }
}
export namespace managedClusters {
  export namespace agentPools {
    export type AgentPoolsResource = ResourceDefinition<ManagedClusterAgentPoolProfileProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedClusterAgentPoolProfileProperties): AgentPoolsResource {
      return {
        type: 'Microsoft.ContainerService/managedClusters/agentPools',
        apiVersion: '2019-08-01',
        name: name,
        properties,
      };
    }
  }
}