import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ContainerProperties {
  publicAccess?: Expressionable<('Container' | 'Blob' | 'None')>;
}

export interface CustomDomain {
  name: Expressionable<string>;
  useSubDomain?: Expressionable<boolean>;
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

export interface ManagementPoliciesRules {
  policy?: Expressionable<any>;
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
  name: Expressionable<('Standard_LRS' | 'Standard_GRS' | 'Standard_RAGRS' | 'Standard_ZRS' | 'Premium_LRS')>;
  restrictions?: Expressionable<Restriction[]>;
}

export interface StorageAccountPropertiesCreateParameters {
  customDomain?: Expressionable<CustomDomain>;
  encryption?: Expressionable<Encryption>;
  networkAcls?: Expressionable<NetworkRuleSet>;
  accessTier?: Expressionable<('Hot' | 'Cool')>;
  supportsHttpsTrafficOnly?: Expressionable<boolean>;
  isHnsEnabled?: Expressionable<boolean>;
}

export interface VirtualNetworkRule {
  id: Expressionable<string>;
  action?: Expressionable<('Allow')>;
  state?: Expressionable<('provisioning' | 'deprovisioning' | 'succeeded' | 'failed' | 'networkSourceDeleted')>;
}

export namespace storageAccounts {
  export interface AdditionalProps {
    identity?: Expressionable<Identity>;
    sku: Expressionable<Sku>;
    kind: Expressionable<('Storage' | 'StorageV2' | 'BlobStorage')>;
  }
  
  export type StorageAccountsResource = ResourceDefinition<StorageAccountPropertiesCreateParameters, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: StorageAccountPropertiesCreateParameters, location: Expressionable<string>, sku: Expressionable<Sku>, kind: Expressionable<('Storage' | 'StorageV2' | 'BlobStorage')>, identity?: Expressionable<Identity>): StorageAccountsResource {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2018-03-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        sku,
        kind,
      },
    };
  }
}
export namespace storageAccounts {
  export namespace blobServices {
    export namespace containers {
      export type ContainersResource = ResourceDefinition<ContainerProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ContainerProperties): ContainersResource {
        return {
          type: 'Microsoft.Storage/storageAccounts/blobServices/containers',
          apiVersion: '2018-03-01-preview',
          name: name,
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
        export type ImmutabilityPoliciesResource = ResourceDefinition<ImmutabilityPolicyProperty, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ImmutabilityPolicyProperty): ImmutabilityPoliciesResource {
          return {
            type: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies',
            apiVersion: '2018-03-01-preview',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace storageAccounts {
  export namespace managementPolicies {
    export type ManagementPoliciesResource = ResourceDefinition<ManagementPoliciesRules, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagementPoliciesRules): ManagementPoliciesResource {
      return {
        type: 'Microsoft.Storage/storageAccounts/managementPolicies',
        apiVersion: '2018-03-01-preview',
        name: name,
        properties,
      };
    }
  }
}