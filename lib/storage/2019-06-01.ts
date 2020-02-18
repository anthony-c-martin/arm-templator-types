import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ActiveDirectoryProperties {
  domainName: Expressionable<string>;
  netBiosDomainName: Expressionable<string>;
  forestName: Expressionable<string>;
  domainGuid: Expressionable<string>;
  domainSid: Expressionable<string>;
  azureStorageSid: Expressionable<string>;
}

export interface AzureFilesIdentityBasedAuthentication {
  directoryServiceOptions: Expressionable<('None' | 'AADDS' | 'AD')>;
  activeDirectoryProperties?: Expressionable<ActiveDirectoryProperties>;
}

export interface BlobServicePropertiesProperties {
  cors?: Expressionable<CorsRules>;
  defaultServiceVersion?: Expressionable<string>;
  deleteRetentionPolicy?: Expressionable<DeleteRetentionPolicy>;
  automaticSnapshotPolicyEnabled?: Expressionable<boolean>;
  changeFeed?: Expressionable<ChangeFeed>;
}

export interface ChangeFeed {
  enabled?: Expressionable<boolean>;
}

export interface ContainerProperties {
  publicAccess?: Expressionable<('Container' | 'Blob' | 'None')>;
}

export interface CorsRule {
  allowedOrigins: Expressionable<string[]>;
  allowedMethods: Expressionable<('DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'POST' | 'OPTIONS' | 'PUT')[]>;
  maxAgeInSeconds: Expressionable<number>;
  exposedHeaders: Expressionable<string[]>;
  allowedHeaders: Expressionable<string[]>;
}

export interface CorsRules {
  corsRules?: Expressionable<CorsRule[]>;
}

export interface CustomDomain {
  name: Expressionable<string>;
  useSubDomainName?: Expressionable<boolean>;
}

export interface DateAfterCreation {
  daysAfterCreationGreaterThan: Expressionable<number>;
}

export interface DateAfterModification {
  daysAfterModificationGreaterThan: Expressionable<number>;
}

export interface DeleteRetentionPolicy {
  enabled?: Expressionable<boolean>;
  days?: Expressionable<number>;
}

export interface Encryption {
  services?: Expressionable<EncryptionServices>;
  keySource: Expressionable<('Microsoft.Storage' | 'Microsoft.Keyvault')>;
  keyvaultproperties?: Expressionable<KeyVaultProperties>;
}

export interface EncryptionService {
  enabled?: Expressionable<boolean>;
  keyType?: Expressionable<('Service' | 'Account')>;
}

export interface EncryptionServices {
  blob?: Expressionable<EncryptionService>;
  file?: Expressionable<EncryptionService>;
  table?: Expressionable<EncryptionService>;
  queue?: Expressionable<EncryptionService>;
}

export interface FileServicePropertiesProperties {
  cors?: Expressionable<CorsRules>;
  shareDeleteRetentionPolicy?: Expressionable<DeleteRetentionPolicy>;
}

export interface FileShareProperties {
  shareQuota?: Expressionable<number>;
}

export interface Identity {
  type: Expressionable<('SystemAssigned')>;
}

export interface ImmutabilityPolicyProperty {
  immutabilityPeriodSinceCreationInDays: Expressionable<number>;
}

export interface IPRule {
  value: Expressionable<string>;
  action?: Expressionable<('Allow')>;
}

export interface KeyVaultProperties {
  keyname?: Expressionable<string>;
  keyversion?: Expressionable<string>;
  keyvaulturi?: Expressionable<string>;
}

export interface ManagementPolicyAction {
  baseBlob?: Expressionable<ManagementPolicyBaseBlob>;
  snapshot?: Expressionable<ManagementPolicySnapShot>;
}

export interface ManagementPolicyBaseBlob {
  tierToCool?: Expressionable<DateAfterModification>;
  tierToArchive?: Expressionable<DateAfterModification>;
  delete?: Expressionable<DateAfterModification>;
}

export interface ManagementPolicyDefinition {
  actions: Expressionable<ManagementPolicyAction>;
  filters?: Expressionable<ManagementPolicyFilter>;
}

export interface ManagementPolicyFilter {
  prefixMatch?: Expressionable<string[]>;
  blobTypes: Expressionable<string[]>;
}

export interface ManagementPolicyProperties {
  policy: Expressionable<ManagementPolicySchema>;
}

export interface ManagementPolicyRule {
  enabled?: Expressionable<boolean>;
  name: Expressionable<string>;
  type: Expressionable<('Lifecycle')>;
  definition: Expressionable<ManagementPolicyDefinition>;
}

export interface ManagementPolicySchema {
  rules: Expressionable<ManagementPolicyRule[]>;
}

export interface ManagementPolicySnapShot {
  delete?: Expressionable<DateAfterCreation>;
}

export interface NetworkRuleSet {
  bypass?: Expressionable<('None' | 'Logging' | 'Metrics' | 'AzureServices')>;
  virtualNetworkRules?: Expressionable<VirtualNetworkRule[]>;
  ipRules?: Expressionable<IPRule[]>;
  defaultAction: Expressionable<('Allow' | 'Deny')>;
}

export interface PrivateEndpoint {
}

export interface PrivateEndpointConnectionProperties {
  privateEndpoint?: Expressionable<PrivateEndpoint>;
  privateLinkServiceConnectionState: Expressionable<PrivateLinkServiceConnectionState>;
  provisioningState?: Expressionable<('Succeeded' | 'Creating' | 'Deleting' | 'Failed')>;
}

export interface PrivateLinkServiceConnectionState {
  status?: Expressionable<('Pending' | 'Approved' | 'Rejected')>;
  description?: Expressionable<string>;
  actionRequired?: Expressionable<string>;
}

export interface RoutingPreference {
  routingChoice?: Expressionable<('MicrosoftRouting' | 'InternetRouting')>;
  publishMicrosoftEndpoints?: Expressionable<boolean>;
  publishInternetEndpoints?: Expressionable<boolean>;
}

export interface Sku {
  name: Expressionable<('Standard_LRS' | 'Standard_GRS' | 'Standard_RAGRS' | 'Standard_ZRS' | 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GZRS' | 'Standard_RAGZRS')>;
  tier?: Expressionable<('Standard' | 'Premium')>;
}

export interface StorageAccountPropertiesCreateParameters {
  customDomain?: Expressionable<CustomDomain>;
  encryption?: Expressionable<Encryption>;
  networkAcls?: Expressionable<NetworkRuleSet>;
  accessTier?: Expressionable<('Hot' | 'Cool')>;
  azureFilesIdentityBasedAuthentication?: Expressionable<AzureFilesIdentityBasedAuthentication>;
  supportsHttpsTrafficOnly?: Expressionable<boolean>;
  isHnsEnabled?: Expressionable<boolean>;
  largeFileSharesState?: Expressionable<('Disabled' | 'Enabled')>;
  routingPreference?: Expressionable<RoutingPreference>;
}

export interface VirtualNetworkRule {
  id: Expressionable<string>;
  action?: Expressionable<('Allow')>;
  state?: Expressionable<('provisioning' | 'deprovisioning' | 'succeeded' | 'failed' | 'networkSourceDeleted')>;
}

export namespace storageAccounts {
  export function create(name: Expressionable<string>, properties: StorageAccountPropertiesCreateParameters, location: Expressionable<string>): ResourceDefinition<StorageAccountPropertiesCreateParameters> {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2019-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace storageAccounts {
  export namespace blobServices {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BlobServicePropertiesProperties): ResourceDefinition<BlobServicePropertiesProperties> {
      return {
        type: 'Microsoft.Storage/storageAccounts/blobServices',
        apiVersion: '2019-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace storageAccounts {
  export namespace blobServices {
    export namespace containers {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ContainerProperties): ResourceDefinition<ContainerProperties> {
        return {
          type: 'Microsoft.Storage/storageAccounts/blobServices/containers',
          apiVersion: '2019-06-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace storageAccounts {
  export namespace blobServices {
    export namespace containers {
      export namespace immutabilityPolicies {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ImmutabilityPolicyProperty): ResourceDefinition<ImmutabilityPolicyProperty> {
          return {
            type: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies',
            apiVersion: '2019-06-01',
            name: concatResourceName(...name),
            properties,
          };
        }
      }
    }
  }
}
export namespace storageAccounts {
  export namespace fileServices {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FileServicePropertiesProperties): ResourceDefinition<FileServicePropertiesProperties> {
      return {
        type: 'Microsoft.Storage/storageAccounts/fileServices',
        apiVersion: '2019-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace storageAccounts {
  export namespace fileServices {
    export namespace shares {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: FileShareProperties): ResourceDefinition<FileShareProperties> {
        return {
          type: 'Microsoft.Storage/storageAccounts/fileServices/shares',
          apiVersion: '2019-06-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace storageAccounts {
  export namespace managementPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagementPolicyProperties): ResourceDefinition<ManagementPolicyProperties> {
      return {
        type: 'Microsoft.Storage/storageAccounts/managementPolicies',
        apiVersion: '2019-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace storageAccounts {
  export namespace privateEndpointConnections {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): ResourceDefinition<PrivateEndpointConnectionProperties> {
      return {
        type: 'Microsoft.Storage/storageAccounts/privateEndpointConnections',
        apiVersion: '2019-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}