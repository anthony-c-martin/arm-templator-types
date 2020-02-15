// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-05-16/Microsoft.AnalysisServices.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Sku {
  name?: Expressionable<('D1' | 'S1' | 'S2' | 'S4')>;
}

export interface ServerProperties {
  asAdministrators?: Expressionable<any>;
  managedMode?: Expressionable<number>;
}

export interface administrator {
}

export namespace servers {
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>): ResourceDefinition<ServerProperties> {
    return {
      type: 'Microsoft.AnalysisServices/servers',
      apiVersion: '2016-05-16',
      name: name,
      location,
      properties,
    };
  }
}
