// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2014-06-01/Microsoft.Web.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace serverfarms {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/serverfarms',
      apiVersion: '2014-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace sites {
  export namespace config {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Web/sites/config',
        apiVersion: '2014-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace extensions {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Web/sites/extensions',
        apiVersion: '2014-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace sites {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/sites',
      apiVersion: '2014-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace certificates {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Web/certificates',
      apiVersion: '2014-06-01',
      name: name,
      location,
      properties,
    };
  }
}
