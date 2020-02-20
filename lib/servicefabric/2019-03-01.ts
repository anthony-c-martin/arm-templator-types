import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApplicationDeltaHealthPolicy {
  defaultServiceTypeDeltaHealthPolicy?: Expressionable<ServiceTypeDeltaHealthPolicy>;
  serviceTypeDeltaHealthPolicies?: Expressionable<any>;
}

export interface ApplicationHealthPolicy {
  defaultServiceTypeHealthPolicy?: Expressionable<ServiceTypeHealthPolicy>;
  serviceTypeHealthPolicies?: Expressionable<any>;
}

export interface ApplicationMetricDescription {
  maximumCapacity?: Expressionable<number>;
  name?: Expressionable<string>;
  reservationCapacity?: Expressionable<number>;
  totalApplicationCapacity?: Expressionable<number>;
}

export interface ApplicationResourceProperties {
  maximumNodes?: Expressionable<number>;
  metrics?: Expressionable<ApplicationMetricDescription[]>;
  minimumNodes?: Expressionable<number>;
  parameters?: Expressionable<any>;
  removeApplicationCapacity?: Expressionable<boolean>;
  typeName?: Expressionable<string>;
  typeVersion?: Expressionable<string>;
  upgradePolicy?: Expressionable<ApplicationUpgradePolicy>;
}

export interface ApplicationTypeResourceProperties {
}

export interface ApplicationTypeVersionResourceProperties {
  appPackageUrl: Expressionable<string>;
}

export interface ApplicationUpgradePolicy {
  applicationHealthPolicy?: Expressionable<ArmApplicationHealthPolicy>;
  forceRestart?: Expressionable<boolean>;
  rollingUpgradeMonitoringPolicy?: Expressionable<ArmRollingUpgradeMonitoringPolicy>;
  upgradeReplicaSetCheckTimeout?: Expressionable<string>;
}

export interface ArmApplicationHealthPolicy {
  considerWarningAsError?: Expressionable<boolean>;
  defaultServiceTypeHealthPolicy?: Expressionable<ArmServiceTypeHealthPolicy>;
  maxPercentUnhealthyDeployedApplications?: Expressionable<number>;
  serviceTypeHealthPolicyMap?: Expressionable<any>;
}

export interface ArmRollingUpgradeMonitoringPolicy {
  failureAction?: Expressionable<('Rollback' | 'Manual')>;
  healthCheckRetryTimeout?: Expressionable<string>;
  healthCheckStableDuration?: Expressionable<string>;
  healthCheckWaitDuration?: Expressionable<string>;
  upgradeDomainTimeout?: Expressionable<string>;
  upgradeTimeout?: Expressionable<string>;
}

export interface ArmServiceTypeHealthPolicy {
  maxPercentUnhealthyPartitionsPerService?: Expressionable<number>;
  maxPercentUnhealthyReplicasPerPartition?: Expressionable<number>;
  maxPercentUnhealthyServices?: Expressionable<number>;
}

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
  applicationHealthPolicies?: Expressionable<any>;
  maxPercentUnhealthyApplications?: Expressionable<number>;
  maxPercentUnhealthyNodes?: Expressionable<number>;
}

export interface ClusterProperties {
  addOnFeatures?: Expressionable<('RepairManager' | 'DnsService' | 'BackupRestoreService' | 'ResourceMonitorService')[]>;
  azureActiveDirectory?: Expressionable<AzureActiveDirectory>;
  certificate?: Expressionable<CertificateDescription>;
  certificateCommonNames?: Expressionable<ServerCertificateCommonNames>;
  clientCertificateCommonNames?: Expressionable<ClientCertificateCommonName[]>;
  clientCertificateThumbprints?: Expressionable<ClientCertificateThumbprint[]>;
  clusterCodeVersion?: Expressionable<string>;
  diagnosticsStorageAccountConfig?: Expressionable<DiagnosticsStorageAccountConfig>;
  eventStoreServiceEnabled?: Expressionable<boolean>;
  fabricSettings?: Expressionable<SettingsSectionDescription[]>;
  managementEndpoint: Expressionable<string>;
  nodeTypes: Expressionable<NodeTypeDescription[]>;
  reliabilityLevel?: Expressionable<('None' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum')>;
  reverseProxyCertificate?: Expressionable<CertificateDescription>;
  reverseProxyCertificateCommonNames?: Expressionable<ServerCertificateCommonNames>;
  upgradeDescription?: Expressionable<ClusterUpgradePolicy>;
  upgradeMode?: Expressionable<('Automatic' | 'Manual')>;
  vmImage?: Expressionable<string>;
}

export interface ClusterUpgradeDeltaHealthPolicy {
  applicationDeltaHealthPolicies?: Expressionable<any>;
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

export interface PartitionSchemeDescription {
}

export interface ServerCertificateCommonName {
  certificateCommonName: Expressionable<string>;
  certificateIssuerThumbprint: Expressionable<string>;
}

export interface ServerCertificateCommonNames {
  commonNames?: Expressionable<ServerCertificateCommonName[]>;
  x509StoreName?: Expressionable<('AddressBook' | 'AuthRoot' | 'CertificateAuthority' | 'Disallowed' | 'My' | 'Root' | 'TrustedPeople' | 'TrustedPublisher')>;
}

export interface ServiceCorrelationDescription {
  scheme: Expressionable<('Invalid' | 'Affinity' | 'AlignedAffinity' | 'NonAlignedAffinity')>;
  serviceName: Expressionable<string>;
}

export interface ServiceLoadMetricDescription {
  defaultLoad?: Expressionable<number>;
  name: Expressionable<string>;
  primaryDefaultLoad?: Expressionable<number>;
  secondaryDefaultLoad?: Expressionable<number>;
  weight?: Expressionable<('Zero' | 'Low' | 'Medium' | 'High')>;
}

export interface ServicePlacementPolicyDescription {
}

export interface ServiceResourceProperties {
  correlationScheme?: Expressionable<ServiceCorrelationDescription[]>;
  defaultMoveCost?: Expressionable<('Zero' | 'Low' | 'Medium' | 'High')>;
  partitionDescription?: Expressionable<PartitionSchemeDescription>;
  placementConstraints?: Expressionable<string>;
  serviceLoadMetrics?: Expressionable<ServiceLoadMetricDescription[]>;
  servicePackageActivationMode?: Expressionable<('SharedProcess' | 'ExclusiveProcess')>;
  servicePlacementPolicies?: Expressionable<ServicePlacementPolicyDescription[]>;
  serviceTypeName?: Expressionable<string>;
}

export interface ServiceTypeDeltaHealthPolicy {
  maxPercentDeltaUnhealthyServices?: Expressionable<number>;
}

export interface ServiceTypeHealthPolicy {
  maxPercentUnhealthyServices?: Expressionable<number>;
}

export interface SettingsParameterDescription {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface SettingsSectionDescription {
  name: Expressionable<string>;
  parameters: Expressionable<SettingsParameterDescription[]>;
}

export interface SingletonPartitionSchemeDescription {
  partitionScheme: Expressionable<('Singleton')>;
}

export interface StatefulServiceProperties {
  hasPersistedState?: Expressionable<boolean>;
  minReplicaSetSize?: Expressionable<number>;
  quorumLossWaitDuration?: Expressionable<string>;
  replicaRestartWaitDuration?: Expressionable<string>;
  serviceKind: Expressionable<('Stateful')>;
  standByReplicaKeepDuration?: Expressionable<string>;
  targetReplicaSetSize?: Expressionable<number>;
}

export interface StatelessServiceProperties {
  instanceCount?: Expressionable<number>;
  serviceKind: Expressionable<('Stateless')>;
}

export namespace clusters {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ClustersResource = ResourceDefinition<ClusterProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>, tags?: Expressionable<any>): ClustersResource {
    return {
      type: 'Microsoft.ServiceFabric/clusters',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace clusters {
  export namespace applications {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type ApplicationsResource = ResourceDefinition<ApplicationResourceProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApplicationResourceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ApplicationsResource {
      return {
        type: 'Microsoft.ServiceFabric/clusters/applications',
        apiVersion: '2019-03-01',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace applications {
    export namespace services {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type ServicesResource = ResourceDefinition<ServiceResourceProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServiceResourceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ServicesResource {
        return {
          type: 'Microsoft.ServiceFabric/clusters/applications/services',
          apiVersion: '2019-03-01',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace clusters {
  export namespace applicationTypes {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type ApplicationTypesResource = ResourceDefinition<ApplicationTypeResourceProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApplicationTypeResourceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ApplicationTypesResource {
      return {
        type: 'Microsoft.ServiceFabric/clusters/applicationTypes',
        apiVersion: '2019-03-01',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace applicationTypes {
    export namespace versions {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type VersionsResource = ResourceDefinition<ApplicationTypeVersionResourceProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ApplicationTypeVersionResourceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): VersionsResource {
        return {
          type: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions',
          apiVersion: '2019-03-01',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}