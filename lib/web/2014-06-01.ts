import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace serverfarms {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
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
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/sites',
      apiVersion: '2014-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace certificates {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2014-06-01',
      name: [name],
      properties,
    };
  }
}