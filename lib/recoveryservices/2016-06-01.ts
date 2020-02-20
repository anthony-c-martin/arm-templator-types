import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Sku {
  name: Expressionable<('RS0')>;
  tier: Expressionable<('Standard')>;
}

export interface RecoveryServicesPropertiesCreateParameters {
}

export interface RawCertificateData {
  authType?: Expressionable<('Invalid' | 'ACS' | 'AAD' | 'AccessControlService' | 'AzureActiveDirectory')>;
  certificate?: Expressionable<string[]>;
}

export interface VaultExtendedInfo {
  integrityKey?: Expressionable<string>;
  encryptionKey?: Expressionable<string>;
  encryptionKeyThumbprint?: Expressionable<string>;
  algorithm?: Expressionable<string>;
}

export namespace vaults {
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
  }
  
  export type VaultsResource = ResourceDefinition<RecoveryServicesPropertiesCreateParameters> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: RecoveryServicesPropertiesCreateParameters, location: Expressionable<string>, sku: Expressionable<Sku>): VaultsResource {
    return {
      type: 'Microsoft.RecoveryServices/vaults',
      apiVersion: '2018-01-10',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace vaults {
  export namespace certificates {
    export type CertificatesResource = ResourceDefinition<RawCertificateData>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RawCertificateData): CertificatesResource {
      return {
        type: 'Microsoft.RecoveryServices/vaults/certificates',
        apiVersion: '2016-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace extendedInformation {
    export type ExtendedInformationResource = ResourceDefinition<VaultExtendedInfo>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VaultExtendedInfo): ExtendedInformationResource {
      return {
        type: 'Microsoft.RecoveryServices/vaults/extendedInformation',
        apiVersion: '2016-06-01',
        name: name,
        properties,
      };
    }
  }
}