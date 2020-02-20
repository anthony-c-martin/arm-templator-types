import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace serverfarms {
  export type ServerfarmsResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): ServerfarmsResource {
    return {
      type: 'Microsoft.Web/serverfarms',
      apiVersion: '2014-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace sites {
  export namespace config {
    export type ConfigResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ConfigResource {
      return {
        type: 'Microsoft.Web/sites/config',
        apiVersion: '2014-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace extensions {
    export type ExtensionsResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ExtensionsResource {
      return {
        type: 'Microsoft.Web/sites/extensions',
        apiVersion: '2014-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export type SitesResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): SitesResource {
    return {
      type: 'Microsoft.Web/sites',
      apiVersion: '2014-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace certificates {
  export type CertificatesResource = ResourceDefinition<any>;
  
  export function create(name: Expressionable<string>, properties: any): CertificatesResource {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2014-06-01',
      name: [name],
      properties,
    };
  }
}