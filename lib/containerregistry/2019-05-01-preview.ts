// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-05-01-preview/Microsoft.ContainerRegistry.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ScopeMapProperties {
  actions: Expressionable<string[]>;
  description?: Expressionable<string>;
}

export interface TokenCertificate {
  encodedPemCertificate?: Expressionable<string>;
  expiry?: Expressionable<string>;
  name?: Expressionable<('certificate1' | 'certificate2')>;
  thumbprint?: Expressionable<string>;
}

export interface TokenCredentialsProperties {
  certificates?: Expressionable<TokenCertificate[]>;
  passwords?: Expressionable<TokenPassword[]>;
}

export interface TokenPassword {
  creationTime?: Expressionable<string>;
  expiry?: Expressionable<string>;
  name?: Expressionable<('password1' | 'password2')>;
}

export interface TokenProperties {
  credentials?: Expressionable<TokenCredentialsProperties>;
  objectId?: Expressionable<string>;
  scopeMapId?: Expressionable<string>;
  status?: Expressionable<('enabled' | 'disabled')>;
}

export namespace registries {
  export namespace scopeMaps {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScopeMapProperties, location: Expressionable<string>): ResourceDefinition<ScopeMapProperties> {
      return {
        type: 'Microsoft.ContainerRegistry/registries/scopeMaps',
        apiVersion: '2019-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace registries {
  export namespace tokens {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TokenProperties, location: Expressionable<string>): ResourceDefinition<TokenProperties> {
      return {
        type: 'Microsoft.ContainerRegistry/registries/tokens',
        apiVersion: '2019-05-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
