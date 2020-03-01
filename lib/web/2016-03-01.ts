import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface Certificate_properties {
  hostNames?: Expressionable<string[]>;
  pfxBlob?: Expressionable<string>;
  password?: Expressionable<string>;
  cerBlob?: Expressionable<string>;
  keyVaultId?: Expressionable<string>;
  keyVaultSecretName?: Expressionable<string>;
  serverFarmId?: Expressionable<string>;
}

export interface Csr_properties {
  name?: Expressionable<string>;
  distinguishedName?: Expressionable<string>;
  csrString?: Expressionable<string>;
  pfxBlob?: Expressionable<string>;
  password?: Expressionable<string>;
  publicKeyHash?: Expressionable<string>;
  hostingEnvironment?: Expressionable<string>;
}

export namespace certificates {
  export type CertificatesResource = ResourceDefinition<Certificate_properties, undefined>;
  
  export function create(name: Expressionable<string>, properties: Certificate_properties): CertificatesResource {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2016-03-01',
      name: [name],
      properties,
    };
  }
}
export namespace csrs {
  export type CsrsResource = ResourceDefinition<Csr_properties, undefined>;
  
  export function create(name: Expressionable<string>, properties: Csr_properties): CsrsResource {
    return {
      type: 'Microsoft.Web/csrs',
      apiVersion: '2016-03-01',
      name: [name],
      properties,
    };
  }
}