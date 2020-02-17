// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2014-02-26/microsoft.visualstudio.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace account {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'microsoft.visualstudio/account',
      apiVersion: '2014-02-26',
      name: name,
      location,
      properties,
    };
  }
}
export namespace account {
  export namespace project {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'microsoft.visualstudio/account/project',
        apiVersion: '2014-02-26',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
