import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace account {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'microsoft.visualstudio/account',
      apiVersion: '2014-02-26',
      name: [name],
      properties,
    };
  }
}
export namespace account {
  export namespace project {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'microsoft.visualstudio/account/project',
        apiVersion: '2014-02-26',
        name: name,
        properties,
      };
    }
  }
}