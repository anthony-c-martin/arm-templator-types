// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-09-01-preview/Microsoft.Attestation.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface JSONWebKey {
  alg: Expressionable<string>;
  crv?: Expressionable<string>;
  d?: Expressionable<string>;
  dp?: Expressionable<string>;
  dq?: Expressionable<string>;
  e?: Expressionable<string>;
  k?: Expressionable<string>;
  kid: Expressionable<string>;
  kty: Expressionable<string>;
  n?: Expressionable<string>;
  p?: Expressionable<string>;
  q?: Expressionable<string>;
  qi?: Expressionable<string>;
  use: Expressionable<string>;
  x?: Expressionable<string>;
  x5c?: Expressionable<string[]>;
  y?: Expressionable<string>;
}

export interface JSONWebKeySet {
  keys?: Expressionable<JSONWebKey[]>;
}

export namespace attestationProviders {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Attestation/attestationProviders',
      apiVersion: '2018-09-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
