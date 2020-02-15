// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-03-01-preview/Microsoft.Storage.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: StorageAccountPropertiesCreateParameters, location: Expressionable<string>): ResourceDefinition<StorageAccountPropertiesCreateParameters> {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2018-03-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace storageAccounts {
  export namespace blobServices {
    export namespace containers {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ContainerProperties, location: Expressionable<string>): ResourceDefinition<ContainerProperties> {
        return {
          type: 'Microsoft.Storage/storageAccounts/blobServices/containers',
          apiVersion: '2018-03-01-preview',
          name: concatResourceName(...name),
          location,
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
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ImmutabilityPolicyProperty, location: Expressionable<string>): ResourceDefinition<ImmutabilityPolicyProperty> {
          return {
            type: 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies',
            apiVersion: '2018-03-01-preview',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace storageAccounts {
  export namespace managementPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagementPoliciesRules, location: Expressionable<string>): ResourceDefinition<ManagementPoliciesRules> {
      return {
        type: 'Microsoft.Storage/storageAccounts/managementPolicies',
        apiVersion: '2018-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
