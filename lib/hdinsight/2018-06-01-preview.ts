import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApplicationGetEndpoint {
  destinationPort?: Expressionable<number>;
  location?: Expressionable<string>;
  publicPort?: Expressionable<number>;
}

export interface ApplicationGetHttpsEndpoint {
  accessModes?: Expressionable<string[]>;
  destinationPort?: Expressionable<number>;
  disableGatewayAuth?: Expressionable<boolean>;
  location?: Expressionable<string>;
  publicPort?: Expressionable<number>;
  subDomainSuffix?: Expressionable<string>;
}

export interface ApplicationProperties {
  applicationType?: Expressionable<string>;
  computeProfile?: Expressionable<ComputeProfile>;
  errors?: Expressionable<Errors[]>;
  httpsEndpoints?: Expressionable<ApplicationGetHttpsEndpoint[]>;
  installScriptActions?: Expressionable<RuntimeScriptAction[]>;
  sshEndpoints?: Expressionable<ApplicationGetEndpoint[]>;
  uninstallScriptActions?: Expressionable<RuntimeScriptAction[]>;
}

export interface Autoscale {
  capacity?: Expressionable<AutoscaleCapacity>;
  recurrence?: Expressionable<AutoscaleRecurrence>;
}

export interface AutoscaleCapacity {
  maxInstanceCount?: Expressionable<number>;
  minInstanceCount?: Expressionable<number>;
}

export interface AutoscaleRecurrence {
  schedule?: Expressionable<AutoscaleSchedule[]>;
  timeZone?: Expressionable<string>;
}

export interface AutoscaleSchedule {
  days?: Expressionable<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[]>;
  timeAndCapacity?: Expressionable<AutoscaleTimeAndCapacity>;
}

export interface AutoscaleTimeAndCapacity {
  maxInstanceCount?: Expressionable<number>;
  minInstanceCount?: Expressionable<number>;
  time?: Expressionable<string>;
}

export interface ClientGroupInfo {
  groupId?: Expressionable<string>;
  groupName?: Expressionable<string>;
}

export interface ClusterCreateProperties {
  clusterDefinition?: Expressionable<ClusterDefinition>;
  clusterVersion?: Expressionable<string>;
  computeProfile?: Expressionable<ComputeProfile>;
  diskEncryptionProperties?: Expressionable<DiskEncryptionProperties>;
  kafkaRestProperties?: Expressionable<KafkaRestProperties>;
  minSupportedTlsVersion?: Expressionable<string>;
  osType?: Expressionable<('Windows' | 'Linux')>;
  securityProfile?: Expressionable<SecurityProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  tier?: Expressionable<('Standard' | 'Premium')>;
}

export interface ClusterDefinition {
  blueprint?: Expressionable<string>;
  componentVersion?: Expressionable<any>;
  configurations?: Expressionable<any>;
  kind?: Expressionable<string>;
}

export interface ClusterIdentity {
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
  userAssignedIdentities?: Expressionable<any>;
}

export interface Componentsschemasclusteridentitypropertiesuserassignedidentitiesadditionalproperties {
}

export interface ComputeProfile {
  roles?: Expressionable<Role[]>;
}

export interface DataDisksGroups {
  disksPerNode?: Expressionable<number>;
}

export interface DiskEncryptionProperties {
  encryptionAlgorithm?: Expressionable<('RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5')>;
  keyName?: Expressionable<string>;
  keyVersion?: Expressionable<string>;
  msiResourceId?: Expressionable<string>;
  vaultUri?: Expressionable<string>;
}

export interface Errors {
  code?: Expressionable<string>;
  message?: Expressionable<string>;
}

export interface HardwareProfile {
  vmSize?: Expressionable<string>;
}

export interface KafkaRestProperties {
  clientGroupInfo?: Expressionable<ClientGroupInfo>;
}

export interface LinuxOperatingSystemProfile {
  password?: Expressionable<string>;
  sshProfile?: Expressionable<SshProfile>;
  username?: Expressionable<string>;
}

export interface OsProfile {
  linuxOperatingSystemProfile?: Expressionable<LinuxOperatingSystemProfile>;
}

export interface Role {
  autoscale?: Expressionable<Autoscale>;
  dataDisksGroups?: Expressionable<DataDisksGroups[]>;
  hardwareProfile?: Expressionable<HardwareProfile>;
  minInstanceCount?: Expressionable<number>;
  name?: Expressionable<string>;
  osProfile?: Expressionable<OsProfile>;
  scriptActions?: Expressionable<ScriptAction[]>;
  targetInstanceCount?: Expressionable<number>;
  virtualNetworkProfile?: Expressionable<VirtualNetworkProfile>;
}

export interface RuntimeScriptAction {
  name: Expressionable<string>;
  parameters?: Expressionable<string>;
  roles: Expressionable<string[]>;
  uri: Expressionable<string>;
}

export interface ScriptAction {
  name: Expressionable<string>;
  parameters: Expressionable<string>;
  uri: Expressionable<string>;
}

export interface SecurityProfile {
  aaddsResourceId?: Expressionable<string>;
  clusterUsersGroupDNs?: Expressionable<string[]>;
  directoryType?: Expressionable<('ActiveDirectory')>;
  domain?: Expressionable<string>;
  domainUsername?: Expressionable<string>;
  domainUserPassword?: Expressionable<string>;
  ldapsUrls?: Expressionable<string[]>;
  msiResourceId?: Expressionable<string>;
  organizationalUnitDN?: Expressionable<string>;
}

export interface SshProfile {
  publicKeys?: Expressionable<SshPublicKey[]>;
}

export interface SshPublicKey {
  certificateData?: Expressionable<string>;
}

export interface StorageAccount {
  container?: Expressionable<string>;
  fileSystem?: Expressionable<string>;
  isDefault?: Expressionable<boolean>;
  key?: Expressionable<string>;
  msiResourceId?: Expressionable<string>;
  name?: Expressionable<string>;
  resourceId?: Expressionable<string>;
}

export interface StorageProfile {
  storageaccounts?: Expressionable<StorageAccount[]>;
}

export interface VirtualNetworkProfile {
  id?: Expressionable<string>;
  subnet?: Expressionable<string>;
}

export namespace clusters {
  interface AdditionalProps {
    identity?: Expressionable<ClusterIdentity>;
  }
  
  export function create(name: Expressionable<string>, properties: ClusterCreateProperties, location?: Expressionable<string>, identity?: Expressionable<ClusterIdentity>): ResourceDefinition<ClusterCreateProperties> & AdditionalProps {
    return {
      type: 'Microsoft.HDInsight/clusters',
      apiVersion: '2018-06-01-preview',
      name: [name],
      location,
      identity,
      properties,
    };
  }
}
export namespace clusters {
  export namespace applications {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApplicationProperties): ResourceDefinition<ApplicationProperties> {
      return {
        type: 'Microsoft.HDInsight/clusters/applications',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace clusters {
  export namespace extensions {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.HDInsight/clusters/extensions',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}