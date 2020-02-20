import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AzureActiveDirectory {
  clientApplication?: Expressionable<string>;
  clusterApplication?: Expressionable<string>;
  tenantId?: Expressionable<string>;
}

export interface CertificateDescription {
  thumbprint: Expressionable<string>;
  thumbprintSecondary?: Expressionable<string>;
  x509StoreName?: Expressionable<('AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher')>;
}

export interface ClientCertificateCommonName {
  certificateCommonName: Expressionable<string>;
  certificateIssuerThumbprint: Expressionable<string>;
  isAdmin: Expressionable<boolean>;
}

export interface ClientCertificateThumbprint {
  certificateThumbprint: Expressionable<string>;
  isAdmin: Expressionable<boolean>;
}

export interface ClusterHealthPolicy {
  maxPercentUnhealthyApplications?: Expressionable<number>;
  maxPercentUnhealthyNodes?: Expressionable<number>;
}

export interface ClusterProperties {
  azureActiveDirectory?: Expressionable<AzureActiveDirectory>;
  certificate?: Expressionable<CertificateDescription>;
  clientCertificateCommonNames?: Expressionable<ClientCertificateCommonName[]>;
  clientCertificateThumbprints?: Expressionable<ClientCertificateThumbprint[]>;
  clusterCodeVersion?: Expressionable<string>;
  diagnosticsStorageAccountConfig?: Expressionable<DiagnosticsStorageAccountConfig>;
  fabricSettings?: Expressionable<SettingsSectionDescription[]>;
  managementEndpoint: Expressionable<string>;
  nodeTypes: Expressionable<NodeTypeDescription[]>;
  reliabilityLevel?: Expressionable<('Bronze' | 'Silver' | 'Gold' | 'Platinum')>;
  reverseProxyCertificate?: Expressionable<CertificateDescription>;
  upgradeDescription?: Expressionable<ClusterUpgradePolicy>;
  upgradeMode?: Expressionable<('Automatic' | 'Manual')>;
  vmImage?: Expressionable<string>;
}

export interface ClusterUpgradeDeltaHealthPolicy {
  maxPercentDeltaUnhealthyApplications: Expressionable<number>;
  maxPercentDeltaUnhealthyNodes: Expressionable<number>;
  maxPercentUpgradeDomainDeltaUnhealthyNodes: Expressionable<number>;
}

export interface ClusterUpgradePolicy {
  deltaHealthPolicy?: Expressionable<ClusterUpgradeDeltaHealthPolicy>;
  forceRestart?: Expressionable<boolean>;
  healthCheckRetryTimeout: Expressionable<string>;
  healthCheckStableDuration: Expressionable<string>;
  healthCheckWaitDuration: Expressionable<string>;
  healthPolicy: Expressionable<ClusterHealthPolicy>;
  overrideUserUpgradePolicy?: Expressionable<boolean>;
  upgradeDomainTimeout: Expressionable<string>;
  upgradeReplicaSetCheckTimeout: Expressionable<string>;
  upgradeTimeout: Expressionable<string>;
}

export interface DiagnosticsStorageAccountConfig {
  blobEndpoint: Expressionable<string>;
  protectedAccountKeyName: Expressionable<string>;
  queueEndpoint: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  tableEndpoint: Expressionable<string>;
}

export interface EndpointRangeDescription {
  endPort: Expressionable<number>;
  startPort: Expressionable<number>;
}

export interface NodeTypeDescription {
  applicationPorts?: Expressionable<EndpointRangeDescription>;
  capacities?: Expressionable<any>;
  clientConnectionEndpointPort: Expressionable<number>;
  durabilityLevel?: Expressionable<('Bronze' | 'Silver' | 'Gold')>;
  ephemeralPorts?: Expressionable<EndpointRangeDescription>;
  httpGatewayEndpointPort: Expressionable<number>;
  isPrimary: Expressionable<boolean>;
  name: Expressionable<string>;
  placementProperties?: Expressionable<any>;
  reverseProxyEndpointPort?: Expressionable<number>;
  vmInstanceCount: Expressionable<number>;
}

export interface SettingsParameterDescription {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface SettingsSectionDescription {
  name: Expressionable<string>;
  parameters: Expressionable<SettingsParameterDescription[]>;
}

export namespace clusters {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ClustersResource = ResourceDefinition<ClusterProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>, tags?: Expressionable<any>): ClustersResource {
    return {
      type: 'Microsoft.ServiceFabric/clusters',
      apiVersion: '2016-09-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}