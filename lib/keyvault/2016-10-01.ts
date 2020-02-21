import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AccessPolicyEntry {
  tenantId: Expressionable<string>;
  objectId: Expressionable<string>;
  applicationId?: Expressionable<string>;
  permissions: Expressionable<Permissions>;
}

export interface Permissions {
  keys?: Expressionable<('encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'sign' | 'verify' | 'get' | 'list' | 'create' | 'update' | 'import' | 'delete' | 'backup' | 'restore' | 'recover' | 'purge')[]>;
  secrets?: Expressionable<('get' | 'list' | 'set' | 'delete' | 'backup' | 'restore' | 'recover' | 'purge')[]>;
  certificates?: Expressionable<('get' | 'list' | 'delete' | 'create' | 'import' | 'update' | 'managecontacts' | 'getissuers' | 'listissuers' | 'setissuers' | 'deleteissuers' | 'manageissuers' | 'recover' | 'purge')[]>;
  storage?: Expressionable<('get' | 'list' | 'delete' | 'set' | 'update' | 'regeneratekey' | 'setsas' | 'listsas' | 'getsas' | 'deletesas')[]>;
}

export interface SecretAttributes {
  enabled?: Expressionable<boolean>;
  nbf?: Expressionable<number>;
  exp?: Expressionable<number>;
}

export interface SecretProperties {
  value?: Expressionable<string>;
  contentType?: Expressionable<string>;
  attributes?: Expressionable<SecretAttributes>;
}

export interface Sku {
  family: Expressionable<('A')>;
  name: Expressionable<('standard' | 'premium')>;
}

export interface VaultAccessPolicyProperties {
  accessPolicies: Expressionable<AccessPolicyEntry[]>;
}

export interface VaultProperties {
  tenantId: Expressionable<string>;
  sku: Expressionable<Sku>;
  accessPolicies?: Expressionable<AccessPolicyEntry[]>;
  enabledForDeployment?: Expressionable<boolean>;
  enabledForDiskEncryption?: Expressionable<boolean>;
  enabledForTemplateDeployment?: Expressionable<boolean>;
  enableSoftDelete?: Expressionable<boolean>;
  createMode?: Expressionable<('recover' | 'default')>;
}

export namespace vaults {
  export type VaultsResource = ResourceDefinition<VaultProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: VaultProperties, location: Expressionable<string>): VaultsResource {
    return {
      type: 'Microsoft.KeyVault/vaults',
      apiVersion: '2016-10-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace vaults {
  export namespace accessPolicies {
    export type AccessPoliciesResource = ResourceDefinition<VaultAccessPolicyProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VaultAccessPolicyProperties): AccessPoliciesResource {
      return {
        type: 'Microsoft.KeyVault/vaults/accessPolicies',
        apiVersion: '2016-10-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace secrets {
    export type SecretsResource = ResourceDefinition<SecretProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecretProperties): SecretsResource {
      return {
        type: 'Microsoft.KeyVault/vaults/secrets',
        apiVersion: '2016-10-01',
        name: name,
        properties,
      };
    }
  }
}