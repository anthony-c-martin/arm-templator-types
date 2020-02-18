import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface BlobServicePropertiesProperties {
  cors?: Expressionable<CorsRules>;
  defaultServiceVersion?: Expressionable<string>;
  deleteRetentionPolicy?: Expressionable<DeleteRetentionPolicy>;
  automaticSnapshotPolicyEnabled?: Expressionable<boolean>;
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
}

export interface EncryptionServices {
  blob?: Expressionable<EncryptionService>;
  file?: Expressionable<EncryptionService>;
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

export interface NetworkRuleSet {
  bypass?: Expressionable<('None' | 'Logging' | 'Metrics' | 'AzureServices')>;
  virtualNetworkRules?: Expressionable<VirtualNetworkRule[]>;
  ipRules?: Expressionable<IPRule[]>;
  defaultAction: Expressionable<('Allow' | 'Deny')>;
}

export interface Restriction {
  reasonCode?: Expressionable<('QuotaId' | 'NotAvailableForSubscription')>;
}

export interface Sku {
  name: Expressionable<('Standard_LRS' | 'Standard_GRS' | 'Standard_RAGRS' | 'Standard_ZRS' | 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GZRS' | 'Standard_RAGZRS')>;
  restrictions?: Expressionable<Restriction[]>;
}

export interface StorageAccountPropertiesCreateParameters {
  customDomain?: Expressionable<CustomDomain>;
  encryption?: Expressionable<Encryption>;
  networkAcls?: Expressionable<NetworkRuleSet>;
  accessTier?: Expressionable<('Hot' | 'Cool')>;
  azureFilesAadIntegration?: Expressionable<boolean>;
  supportsHttpsTrafficOnly?: Expressionable<boolean>;
  isHnsEnabled?: Expressionable<boolean>;
}

export interface VirtualNetworkRule {
  id: Expressionable<string>;
  action?: Expressionable<('Allow')>;
  state?: Expressionable<('provisioning' | 'deprovisioning' | 'succeeded' | 'failed' | 'networkSourceDeleted')>;
}

export namespace storageAccounts {
  interface AdditionalProps {
    sku: Expressionable<Sku>;
    kind: Expressionable<('Storage' | 'StorageV2' | 'BlobStorage' | 'FileStorage' | 'BlockBlobStorage')>;
    identity?: Expressionable<Identity>;
  }
  
  export function create(name: Expressionable<string>, properties: StorageAccountPropertiesCreateParameters, location: Expressionable<string>, sku: Expressionable<Sku>, kind: Expressionable<('Storage' | 'StorageV2' | 'BlobStorage' | 'FileStorage' | 'BlockBlobStorage')>, identity?: Expressionable<Identity>): ResourceDefinition<StorageAccountPropertiesCreateParameters> & AdditionalProps {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2019-04-01',
      name: name,
      location,
      identity,
      sku,
      kind,
      properties,
    };
  }
}
export namespace storageAccounts {
  export namespace blobServices {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BlobServicePropertiesProperties): ResourceDefinition<BlobServicePropertiesProperties> {
      return {
        type: 'Microsoft.Storage/storageAccounts/blobServices',
        apiVersion: '2019-04-01',
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
          apiVersion: '2019-04-01',
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
            apiVersion: '2019-04-01',
            name: concatResourceName(...name),
            properties,
          };
        }
      }
    }
  }
}
export namespace storageAccounts {
  export namespace managementPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Storage/storageAccounts/managementPolicies',
        apiVersion: '2019-04-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}