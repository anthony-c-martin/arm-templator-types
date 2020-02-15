// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-01-01/Microsoft.Storage.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface CustomDomain {
  name: Expressionable<string>;
  useSubDomain?: Expressionable<boolean>;
}

export interface Encryption {
  services?: Expressionable<EncryptionServices>;
  keySource: Expressionable<('Microsoft.Storage')>;
}

export interface EncryptionService {
  enabled?: Expressionable<boolean>;
}

export interface EncryptionServices {
  blob?: Expressionable<EncryptionService>;
}

export interface Sku {
  name: Expressionable<('Standard_LRS' | 'Standard_GRS' | 'Standard_RAGRS' | 'Standard_ZRS' | 'Premium_LRS')>;
}

export interface StorageAccountPropertiesCreateParameters {
  customDomain?: Expressionable<CustomDomain>;
  encryption?: Expressionable<Encryption>;
  accessTier?: Expressionable<('Hot' | 'Cool')>;
}

export namespace storageAccounts {
  export function create(name: Expressionable<string>, properties: StorageAccountPropertiesCreateParameters, location: Expressionable<string>): ResourceDefinition<StorageAccountPropertiesCreateParameters> {
    return {
      type: 'Microsoft.Storage/storageAccounts',
      apiVersion: '2016-01-01',
      name: name,
      location,
      properties,
    };
  }
}
