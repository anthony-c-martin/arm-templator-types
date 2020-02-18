import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface accessPolicy {
  tenantId: Expressionable<string>;
  objectId: Expressionable<string>;
  permissions: Expressionable<permissions>;
}

export interface permissions {
  keys?: Expressionable<('all' | 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'import' | 'list' | 'restore' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey')[]>;
  secrets?: Expressionable<('all' | 'delete' | 'get' | 'list' | 'set')[]>;
}

export interface sku {
  name: Expressionable<('standard' | 'premium')>;
  family: Expressionable<('A')>;
}

export namespace vaults {
  export namespace secrets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.KeyVault/vaults/secrets',
        apiVersion: '2014-12-19-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export function create(name: [], properties: any): ResourceDefinition<any> {
  return {
    type: 'secrets',
    apiVersion: '2014-12-19-preview',
    name: concatResourceName(...name),
    properties,
  };
}
export namespace vaults {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.KeyVault/vaults',
      apiVersion: '2014-12-19-preview',
      name: name,
      properties,
    };
  }
}