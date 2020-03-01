import { Expressionable, ResourceDefinition } from 'arm-templator';

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
    export type SecretsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): SecretsResource {
      return {
        type: 'Microsoft.KeyVault/vaults/secrets',
        apiVersion: '2014-12-19-preview',
        name: name,
        properties,
      };
    }
  }
}
export type UndefinedResource = ResourceDefinition<any, undefined>;

export function create(name: [], properties: any): UndefinedResource {
  return {
    type: 'secrets',
    apiVersion: '2014-12-19-preview',
    name: name,
    properties,
  };
}
export namespace vaults {
  export type VaultsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): VaultsResource {
    return {
      type: 'Microsoft.KeyVault/vaults',
      apiVersion: '2014-12-19-preview',
      name: [name],
      properties,
    };
  }
}