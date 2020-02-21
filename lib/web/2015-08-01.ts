import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface web {
  name: Expressionable<('web')>;
  properties: Expressionable<any>;
}

export interface connectionstrings {
  name: Expressionable<('connectionstrings')>;
}

export interface appsettings {
  name: Expressionable<('appsettings')>;
}

export namespace serverfarms {
  export interface AdditionalProps {
    sku?: Expressionable<any>;
  }
  
  export type ServerfarmsResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, sku?: Expressionable<any>): ServerfarmsResource {
    return {
      type: 'Microsoft.Web/serverfarms',
      apiVersion: '2015-08-01',
      name: [name],
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace sites {
  export namespace config {
    export type ConfigResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ConfigResource {
      return {
        type: 'Microsoft.Web/sites/config',
        apiVersion: '2015-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace extensions {
    export type ExtensionsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ExtensionsResource {
      return {
        type: 'Microsoft.Web/sites/extensions',
        apiVersion: '2015-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export type SitesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): SitesResource {
    return {
      type: 'Microsoft.Web/sites',
      apiVersion: '2015-08-01',
      name: [name],
      properties,
    };
  }
}
export namespace certificates {
  export type CertificatesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): CertificatesResource {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2015-08-01',
      name: [name],
      properties,
    };
  }
}