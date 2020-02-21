import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CertificateDetails {
  id?: Expressionable<string>;
  name?: Expressionable<string>;
  kind?: Expressionable<string>;
  location: Expressionable<string>;
  type?: Expressionable<string>;
  properties?: Expressionable<CertificateDetails_properties>;
}

export interface CertificateDetails_properties {
  version?: Expressionable<number>;
  serialNumber?: Expressionable<string>;
  thumbprint?: Expressionable<string>;
  subject?: Expressionable<string>;
  notBefore?: Expressionable<string>;
  notAfter?: Expressionable<string>;
  signatureAlgorithm?: Expressionable<string>;
  issuer?: Expressionable<string>;
  rawData?: Expressionable<string>;
}

export interface CertificateOrder_properties {
  distinguishedName?: Expressionable<string>;
  domainVerificationToken?: Expressionable<string>;
  validityInYears?: Expressionable<number>;
  keySize?: Expressionable<number>;
  productType?: Expressionable<('StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl')>;
  autoRenew?: Expressionable<boolean>;
  provisioningState?: Expressionable<('Succeeded' | 'Failed' | 'Canceled' | 'InProgress' | 'Deleting')>;
  status?: Expressionable<('Pendingissuance' | 'Issued' | 'Revoked' | 'Canceled' | 'Denied' | 'Pendingrevocation' | 'PendingRekey' | 'Unused' | 'Expired' | 'NotSubmitted')>;
  signedCertificate?: Expressionable<CertificateDetails>;
  csr?: Expressionable<string>;
  intermediate?: Expressionable<CertificateDetails>;
  root?: Expressionable<CertificateDetails>;
  serialNumber?: Expressionable<string>;
  lastCertificateIssuanceTime?: Expressionable<string>;
  expirationTime?: Expressionable<string>;
}

export interface CertificateOrderCertificate {
  id?: Expressionable<string>;
  name?: Expressionable<string>;
  kind?: Expressionable<string>;
  location: Expressionable<string>;
  type?: Expressionable<string>;
  properties?: Expressionable<CertificateOrderCertificate_properties>;
}

export interface CertificateOrderCertificate_properties {
  keyVaultId?: Expressionable<string>;
  keyVaultSecretName?: Expressionable<string>;
  provisioningState?: Expressionable<('Initialized' | 'WaitingOnCertificateOrder' | 'Succeeded' | 'CertificateOrderFailed' | 'OperationNotPermittedOnKeyVault' | 'AzureServiceUnauthorizedToAccessKeyVault' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'UnknownError' | 'Unknown')>;
}

export namespace certificateOrders {
  export type CertificateOrdersResource = ResourceDefinition<CertificateOrder_properties, undefined>;
  
  export function create(name: Expressionable<string>, properties: CertificateOrder_properties): CertificateOrdersResource {
    return {
      type: 'Microsoft.CertificateRegistration/certificateOrders',
      apiVersion: '2015-08-01',
      name: [name],
      properties,
    };
  }
}
export namespace certificateOrders {
  export namespace certificates {
    export type CertificatesResource = ResourceDefinition<CertificateOrderCertificate_properties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CertificateOrderCertificate_properties): CertificatesResource {
      return {
        type: 'Microsoft.CertificateRegistration/certificateOrders/certificates',
        apiVersion: '2015-08-01',
        name: name,
        properties,
      };
    }
  }
}