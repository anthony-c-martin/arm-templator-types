import { Expressionable, ResourceDefinition } from 'arm-templator';

export namespace account {
  export type AccountResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): AccountResource {
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
    export type ProjectResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ProjectResource {
      return {
        type: 'microsoft.visualstudio/account/project',
        apiVersion: '2014-02-26',
        name: name,
        properties,
      };
    }
  }
}