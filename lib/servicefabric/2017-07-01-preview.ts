import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApplicationMetricDescription {
  MaximumCapacity?: Expressionable<number>;
  Name?: Expressionable<string>;
  ReservationCapacity?: Expressionable<number>;
  TotalApplicationCapacity?: Expressionable<number>;
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
  ConsiderWarningAsError?: Expressionable<boolean>;
  DefaultServiceTypeHealthPolicy?: Expressionable<ArmServiceTypeHealthPolicy>;
  MaxPercentUnhealthyDeployedApplications?: Expressionable<number>;
  ServiceTypeHealthPolicyMap?: Expressionable<any>;
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
  maxPercentUnhealthyApplications?: Expressionable<number>;
  maxPercentUnhealthyNodes?: Expressionable<number>;
}

export interface ClusterProperties {
  addOnFeatures?: Expressionable<('RepairManager' | 'DnsService' | 'BackupRestoreService')[]>;
  availableClusterVersions?: Expressionable<ClusterVersionDetails[]>;
  azureActiveDirectory?: Expressionable<AzureActiveDirectory>;
  certificate?: Expressionable<CertificateDescription>;
  clientCertificateCommonNames?: Expressionable<ClientCertificateCommonName[]>;
  clientCertificateThumbprints?: Expressionable<ClientCertificateThumbprint[]>;
  clusterCodeVersion?: Expressionable<string>;
  clusterState?: Expressionable<('WaitingForNodes' | 'Deploying' | 'BaselineUpgrade' | 'UpdatingUserConfiguration' | 'UpdatingUserCertificate' | 'UpdatingInfrastructure' | 'EnforcingClusterVersion' | 'UpgradeServiceUnreachable' | 'AutoScale' | 'Ready')>;
  diagnosticsStorageAccountConfig?: Expressionable<DiagnosticsStorageAccountConfig>;
  fabricSettings?: Expressionable<SettingsSectionDescription[]>;
  managementEndpoint: Expressionable<string>;
  nodeTypes: Expressionable<NodeTypeDescription[]>;
  reliabilityLevel?: Expressionable<('None' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum')>;
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
  upgradeDomainTimeout: Expressionable<string>;
  upgradeReplicaSetCheckTimeout: Expressionable<string>;
  upgradeTimeout: Expressionable<string>;
}

export interface ClusterVersionDetails {
  codeVersion?: Expressionable<string>;
  environment?: Expressionable<('Windows' | 'Linux')>;
  supportExpiryUtc?: Expressionable<string>;
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

export interface ServiceCorrelationDescription {
  Scheme: Expressionable<('Invalid' | 'Affinity' | 'AlignedAffinity' | 'NonAlignedAffinity')>;
  ServiceName: Expressionable<string>;
}

export interface ServiceLoadMetricDescription {
  DefaultLoad?: Expressionable<number>;
  Name: Expressionable<string>;
  PrimaryDefaultLoad?: Expressionable<number>;
  SecondaryDefaultLoad?: Expressionable<number>;
  Weight?: Expressionable<('Zero' | 'Low' | 'Medium' | 'High')>;
}

export interface ServicePlacementPolicyDescription {
}

export interface ServiceResourceProperties {
  correlationScheme?: Expressionable<ServiceCorrelationDescription[]>;
  defaultMoveCost?: Expressionable<('Zero' | 'Low' | 'Medium' | 'High')>;
  partitionDescription?: Expressionable<PartitionSchemeDescription>;
  placementConstraints?: Expressionable<string>;
  serviceLoadMetrics?: Expressionable<ServiceLoadMetricDescription[]>;
  servicePlacementPolicies?: Expressionable<ServicePlacementPolicyDescription[]>;
  serviceTypeName?: Expressionable<string>;
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
  PartitionScheme: Expressionable<('Singleton')>;
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
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ClustersResource = ResourceDefinition<ClusterProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ClusterProperties, location: Expressionable<string>, tags?: Expressionable<any>): ClustersResource {
    return {
      type: 'Microsoft.ServiceFabric/clusters',
      apiVersion: '2017-07-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace clusters {
  export namespace applications {
    export type ApplicationsResource = ResourceDefinition<ApplicationResourceProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApplicationResourceProperties, location?: Expressionable<string>): ApplicationsResource {
      return {
        type: 'Microsoft.ServiceFabric/clusters/applications',
        apiVersion: '2017-07-01-preview',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace applications {
    export namespace services {
      export type ServicesResource = ResourceDefinition<ServiceResourceProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServiceResourceProperties, location?: Expressionable<string>): ServicesResource {
        return {
          type: 'Microsoft.ServiceFabric/clusters/applications/services',
          apiVersion: '2017-07-01-preview',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace clusters {
  export namespace applicationTypes {
    export type ApplicationTypesResource = ResourceDefinition<ApplicationTypeResourceProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApplicationTypeResourceProperties, location?: Expressionable<string>): ApplicationTypesResource {
      return {
        type: 'Microsoft.ServiceFabric/clusters/applicationTypes',
        apiVersion: '2017-07-01-preview',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace applicationTypes {
    export namespace versions {
      export type VersionsResource = ResourceDefinition<ApplicationTypeVersionResourceProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ApplicationTypeVersionResourceProperties, location?: Expressionable<string>): VersionsResource {
        return {
          type: 'Microsoft.ServiceFabric/clusters/applicationTypes/versions',
          apiVersion: '2017-07-01-preview',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}