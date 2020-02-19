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
  interface AdditionalProps {
    sku?: Expressionable<any>;
  }
  
  export function create(name: Expressionable<string>, properties: any, sku?: Expressionable<any>): ResourceDefinition<any> & AdditionalProps {
    return {
      type: 'Microsoft.Web/serverfarms',
      apiVersion: '2015-08-01',
      name: [name],
      sku,
      properties,
    };
  }
}
export namespace sites {
  export namespace config {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
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
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/sites',
      apiVersion: '2015-08-01',
      name: [name],
      properties,
    };
  }
}
export namespace certificates {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2015-08-01',
      name: [name],
      properties,
    };
  }
}