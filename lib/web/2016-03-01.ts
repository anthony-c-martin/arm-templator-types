// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-03-01/Microsoft.Web.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: Certificate_properties, location: Expressionable<string>): ResourceDefinition<Certificate_properties> {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2016-03-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace csrs {
  export function create(name: Expressionable<string>, properties: Csr_properties, location: Expressionable<string>): ResourceDefinition<Csr_properties> {
    return {
      type: 'Microsoft.Web/csrs',
      apiVersion: '2016-03-01',
      name: name,
      location,
      properties,
    };
  }
}
