import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CreationData {
  createOption: Expressionable<('Empty' | 'Attach' | 'FromImage' | 'Import' | 'Copy' | 'Restore')>;
  storageAccountId?: Expressionable<string>;
  imageReference?: Expressionable<ImageDiskReference>;
  sourceUri?: Expressionable<string>;
  sourceResourceId?: Expressionable<string>;
}

export interface DiskProperties {
  osType?: Expressionable<('Windows' | 'Linux')>;
  creationData: Expressionable<CreationData>;
  diskSizeGB?: Expressionable<number>;
  encryptionSettings?: Expressionable<EncryptionSettings>;
}

export interface DiskSku {
  name?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
}

export interface EncryptionSettings {
  enabled?: Expressionable<boolean>;
  diskEncryptionKey?: Expressionable<KeyVaultAndSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultAndKeyReference>;
}

export interface ImageDiskReference {
  id: Expressionable<string>;
  lun?: Expressionable<number>;
}

export interface KeyVaultAndKeyReference {
  sourceVault: Expressionable<SourceVault>;
  keyUrl: Expressionable<string>;
}

export interface KeyVaultAndSecretReference {
  sourceVault: Expressionable<SourceVault>;
  secretUrl: Expressionable<string>;
}

export interface SnapshotSku {
  name?: Expressionable<('Standard_LRS' | 'Premium_LRS' | 'Standard_ZRS')>;
}

export interface SourceVault {
  id?: Expressionable<string>;
}

export namespace disks {
  interface AdditionalProps {
    sku?: Expressionable<DiskSku>;
    zones?: Expressionable<string[]>;
  }
  
  export function create(name: Expressionable<string>, properties: DiskProperties, location: Expressionable<string>, sku?: Expressionable<DiskSku>, zones?: Expressionable<string[]>): ResourceDefinition<DiskProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Compute/disks',
      apiVersion: '2018-04-01',
      name: [name],
      location,
      sku,
      zones,
      properties,
    };
  }
}
export namespace snapshots {
  interface AdditionalProps {
    sku?: Expressionable<SnapshotSku>;
  }
  
  export function create(name: Expressionable<string>, properties: DiskProperties, location: Expressionable<string>, sku?: Expressionable<SnapshotSku>): ResourceDefinition<DiskProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Compute/snapshots',
      apiVersion: '2018-04-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}