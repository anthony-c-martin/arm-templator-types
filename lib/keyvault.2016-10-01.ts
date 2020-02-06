// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-10-01/Microsoft.KeyVault.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: VaultProperties, location: Expressionable<string>): ResourceDefinition<VaultProperties> {
    return {
      type: 'Microsoft.KeyVault/vaults',
      apiVersion: '2016-10-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace vaults {
  export namespace accessPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VaultAccessPolicyProperties, location: Expressionable<string>): ResourceDefinition<VaultAccessPolicyProperties> {
      return {
        type: 'Microsoft.KeyVault/vaults/accessPolicies',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace secrets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecretProperties, location: Expressionable<string>): ResourceDefinition<SecretProperties> {
      return {
        type: 'Microsoft.KeyVault/vaults/secrets',
        apiVersion: '2016-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
